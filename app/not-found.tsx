import Link from "next/link";

export const metadata = {
  title: "Page Not Found",
  description: "The requested page could not be found on Rajan Chaudhary's portfolio.",
};

export default function NotFound() {
  return (
    <main>
      <section className="section">
        <div className="container">
          <span className="eyebrow">404</span>
          <h1 style={{ fontSize: "clamp(44px, 7vw, 76px)", lineHeight: 1, margin: "16px 0" }}>That page doesn&apos;t exist.</h1>
          <p className="muted">The project may have moved, been renamed, or no longer be public.</p>
          <Link className="btn primary" href="/" style={{ marginTop: 18 }}>Back home</Link>
        </div>
      </section>
    </main>
  );
}
