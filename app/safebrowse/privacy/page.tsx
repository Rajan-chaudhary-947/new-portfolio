import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "SafeBrowse Privacy Policy | Rajan Chaudhary",
    description:
        "Privacy Policy for SafeBrowse, a local-first browser web filtering and parental control extension.",
    alternates: {
        canonical: "https://rajanchaudhary947.vercel.app/safebrowse/privacy",
    },
    robots: {
        index: true,
        follow: true,
    },
};

const sections = [
    {
        number: "01",
        title: "Overview",
        content: (
            <p>
                SafeBrowse is a browser extension for web filtering and parental
                controls. It allows users to create website policies, schedule access
                restrictions, manage profiles, and view local policy-enforcement
                activity and analytics.
            </p>
        ),
    },
    {
        number: "02",
        title: "Information SafeBrowse Stores",
        content: (
            <>
                <p>
                    SafeBrowse stores information required to provide its features. This
                    information is primarily stored in the browser on the user's device.
                </p>

                <div className="safebrowse-data-grid">
                    {[
                        [
                            "Web-filtering activity",
                            "Domains associated with blocked top-level navigation requests used by the Activity and Analytics features.",
                        ],
                        [
                            "Profiles",
                            "Profile names and related profile configuration created by the user.",
                        ],
                        [
                            "Policies",
                            "Website, category, allow/block, priority, and schedule settings configured by the user.",
                        ],
                        [
                            "Authentication",
                            "A salted, derived PIN verifier used to protect parent-console administration. The original PIN is not stored.",
                        ],
                    ].map(([title, description]) => (
                        <div
                            key={title}
                            className="safebrowse-data-card"
                        >
                            <h3>
                                {title}
                            </h3>
                            <p>
                                {description}
                            </p>
                        </div>
                    ))}
                </div>
            </>
        ),
    },
    {
        number: "03",
        title: "How the Information Is Used",
        content: (
            <>
                <p>Stored information is used to provide SafeBrowse features such as:</p>

                <ul>
                    <li>Enforcing user-configured website restrictions;</li>
                    <li>Applying scheduled policies;</li>
                    <li>Managing separate browsing-policy profiles;</li>
                    <li>Displaying Activity and Analytics information; and</li>
                    <li>Protecting parent-console settings with a PIN.</li>
                </ul>

                <p>
                    SafeBrowse does not use this information for advertising, profiling,
                    or selling user data.
                </p>
            </>
        ),
    },
    {
        number: "04",
        title: "Local Storage and Privacy",
        content: (
            <>
                <p>
                    SafeBrowse is designed as a local-first extension. Policy settings,
                    profiles, and policy-enforcement activity are stored in browser
                    storage rather than being sent to a SafeBrowse-operated analytics
                    server.
                </p>

                <p>
                    SafeBrowse does not intentionally collect webpage text, passwords,
                    form contents, private messages, payment information, health
                    information, or device location.
                </p>
            </>
        ),
    },
    {
        number: "05",
        title: "Browser Sync",
        content: (
            <>
                <p>
                    SafeBrowse may use the browser's built-in extension synchronization
                    storage when supported and enabled by the user. This can be used for
                    synchronizing supported configuration such as profiles and policies
                    between browser instances.
                </p>

                <p>
                    SafeBrowse does not place the parent PIN or local Activity history
                    into synchronization storage.
                </p>
            </>
        ),
    },
    {
        number: "06",
        title: "Website Filtering",
        content: (
            <>
                <p>
                    SafeBrowse uses browser network-filtering rules to allow or block web
                    navigation according to policies configured by the user.
                </p>

                <p>
                    Blocked navigation requests may be redirected to a SafeBrowse
                    extension page so that the extension can explain why the destination
                    was restricted and record the corresponding policy-enforcement event.
                </p>
            </>
        ),
    },
    {
        number: "07",
        title: "Third-Party Services",
        content: (
            <p>
                SafeBrowse does not require a SafeBrowse-hosted analytics platform or
                advertising network to provide its core features. Optional browser
                synchronization is provided by the browser platform and is subject to
                that platform's own policies.
            </p>
        ),
    },
    {
        number: "08",
        title: "Data Security",
        content: (
            <>
                <p>
                    SafeBrowse uses browser storage controls and a salted PBKDF2-derived
                    verifier for parent PIN authentication rather than storing the
                    original PIN as plain text.
                </p>

                <p>
                    Users should keep exported backup files private because backup files
                    can contain SafeBrowse configuration.
                </p>
            </>
        ),
    },
    {
        number: "09",
        title: "Data Deletion",
        content: (
            <>
                <p>
                    Users can remove SafeBrowse policies, profiles, settings, and local
                    activity data through the extension's controls. Uninstalling the
                    extension also removes its browser-managed extension storage,
                    subject to browser behavior.
                </p>
            </>
        ),
    },
    {
        number: "10",
        title: "Changes to This Policy",
        content: (
            <p>
                This Privacy Policy may be updated when SafeBrowse's functionality or
                data practices change. The latest version will be published on this
                page with its updated effective date.
            </p>
        ),
    },
    {
        number: "11",
        title: "Contact",
        content: (
            <>
                <p>
                    For questions about SafeBrowse or this Privacy Policy, contact:
                </p>

                <a
                    href="mailto:chaudharyrajan947@gmail.com"
                >
                    chaudharyrajan947@gmail.com
                </a>
            </>
        ),
    },
];

export default function SafeBrowsePrivacyPage() {
    return (
        <main className="safebrowse-privacy">
            <div className="safebrowse-container">
                {/* Header */}
                <header>
                    <div>
                        <div>
                            <Link
                                href="/"
                            >
                                <span aria-hidden="true">←</span>
                                Rajan Chaudhary
                            </Link>

                            <div className="safebrowse-brand">
                                <div className="safebrowse-brand-mark">
                                    S<span>R</span>
                                </div>

                                <div>
                                    <p className="safebrowse-brand-kicker">SafeBrowse</p>

                                    <h1 className="safebrowse-title">
                                        Privacy Policy
                                    </h1>

                                    <p className="safebrowse-subtitle">
                                        How SafeBrowse handles information while providing browser
                                        web filtering, parental controls, policy management, and
                                        local analytics.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="safebrowse-effective">
                            Effective September 23, 2026
                        </div>
                    </div>
                </header>

                {/* Intro notice */}
                <section className="safebrowse-intro">
                    <p>
                        SafeBrowse is designed to keep its core data handling local to
                        the browser. The extension records limited policy-enforcement
                        information so its Activity and Analytics features can work,
                        but it does not operate a server that receives general browsing
                        history.
                    </p>
                </section>

                {/* Policy sections */}
                <div className="safebrowse-sections">
                    {sections.map((section) => (
                        <section
                            key={section.number}
                            className="safebrowse-section"
                        >
                            <div className="safebrowse-section-number">
                                {section.number}
                            </div>

                            <div className="safebrowse-section-content">
                                <h2>
                                    {section.title}
                                </h2>

                                <div>
                                    {section.content}
                                </div>
                            </div>
                        </section>
                    ))}
                </div>

                {/* Footer */}
                <footer className="safebrowse-footer">
                    <div>
                        <p className="safebrowse-footer-title">
                            SafeBrowse
                        </p>
                        <p className="safebrowse-footer-subtitle">
                            Web Policy &amp; Parental Controls
                        </p>
                    </div>

                    <div className="safebrowse-footer-meta">
                        <a
                            href="https://rajanchaudhary947.vercel.app/work"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Portfolio ↗
                        </a>

                        <span aria-hidden="true">•</span>

                        <span>© 2026 Rajan Chaudhary</span>
                    </div>
                </footer>
            </div>
        </main>
    );
}