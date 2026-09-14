"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { Icon } from "@/components/Icon";

type Message = { role: "user" | "assistant"; text: string };

function renderFormattedText(text: string) {
  return text.split("\n").map((line, lineIndex) => {
    const heading = line.match(/^#{1,3}\s+(.+)$/);
    const content = heading ? heading[1] : line;
    const parts = content.split(/(\*\*.*?\*\*)/g);
    const formattedContent = parts.map((part, partIndex) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return <strong key={`${lineIndex}-bold-${partIndex}`}>{part.slice(2, -2)}</strong>;
      }
      return <span key={`${lineIndex}-text-${partIndex}`}>{part}</span>;
    });

    return (
      <span className={heading ? "gemini-heading" : undefined} key={`line-${lineIndex}`}>
        {formattedContent}
        {lineIndex < text.split("\n").length - 1 ? <br /> : null}
      </span>
    );
  });
}

const suggestedQuestions = [
    "Tell me about Rajan.",
  "What projects has Rajan built?",
  "What technologies does Rajan use?",
  "How can I contact Rajan?",
];

export function GeminiAssistant() {
  const assistantRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    function closeOnOutsidePointer(event: PointerEvent) {
      if (assistantRef.current && !assistantRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setIsOpen(false);
    }

    document.addEventListener("pointerdown", closeOnOutsidePointer);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOnOutsidePointer);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  async function askGemini(nextQuestion: string) {
    const trimmedQuestion = nextQuestion.trim();
    if (!trimmedQuestion || isLoading) return;

    setQuestion("");
    setMessages((current) => [...current, { role: "user", text: trimmedQuestion }]);
    setIsLoading(true);

    try {
      const response = await fetch("/api/gemini", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: trimmedQuestion }),
      });
      const data = await response.json();
      setMessages((current) => [...current, {
        role: "assistant",
        text: data.answer || data.error || "I could not answer that right now.",
      }]);
    } catch {
      setMessages((current) => [...current, { role: "assistant", text: "I could not connect right now. Please try again or email Rajan directly." }]);
    } finally {
      setIsLoading(false);
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void askGemini(question);
  }

  return (
    <div className="gemini-assistant" ref={assistantRef}>
      {isOpen ? (
        <section className="gemini-panel" aria-label="Ask Rajan's portfolio assistant">
          <div className="gemini-panel-header">
            <div>
              <span className="gemini-kicker"><span className="gemini-spark" aria-hidden="true">✦</span> Gemini assistant</span>
              <h2>Ask about Rajan</h2>
            </div>
            <button className="gemini-close" type="button" onClick={() => setIsOpen(false)} aria-label="Close assistant">×</button>
          </div>

          <div className="gemini-messages" aria-live="polite">
            {messages.length === 0 ? (
              <div className="gemini-welcome">
                <p>I can answer questions about Rajan&apos;s projects, skills, education, and contact details.</p>
                <div className="gemini-suggestions">
                  {suggestedQuestions.map((suggestion) => (
                    <button key={suggestion} type="button" onClick={() => void askGemini(suggestion)}>{suggestion}</button>
                  ))}
                </div>
              </div>
            ) : messages.map((message, index) => (
              <div className={`gemini-message ${message.role}`} key={`${message.role}-${index}`}>
                {message.role === "assistant" ? renderFormattedText(message.text) : message.text}
              </div>
            ))}
            {isLoading ? <div className="gemini-message assistant gemini-loading">Thinking<span>.</span><span>.</span><span>.</span></div> : null}
          </div>

          <form className="gemini-form" onSubmit={handleSubmit}>
            <input
              value={question}
              onChange={(event) => setQuestion(event.target.value)}
              placeholder="Ask about Rajan..."
              aria-label="Ask a question about Rajan"
              maxLength={500}
              disabled={isLoading}
            />
            <button type="submit" aria-label="Send question" disabled={!question.trim() || isLoading}>
              <Icon name="arrow" />
            </button>
          </form>
        </section>
      ) : null}
      <button className="gemini-fab" type="button" onClick={() => setIsOpen((current) => !current)} aria-label={isOpen ? "Close Gemini assistant" : "Open Gemini assistant"} aria-expanded={isOpen}>
        <span className="gemini-fab-spark" aria-hidden="true">✦</span>
      </button>
    </div>
  );
}
