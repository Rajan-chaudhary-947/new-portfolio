"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { Icon } from "@/components/Icon";
import { navigation, site } from "@/lib/site";

export function Header() {
  const mobileMenuRef = useRef<HTMLDetailsElement>(null);

  function handleSectionNavigation(event: React.MouseEvent<HTMLAnchorElement>) {
    const targetUrl = new URL(event.currentTarget.href);
    const targetPath = targetUrl.pathname;

    const isSectionPath = navigation.some((item) => item.href === targetPath);
    const isHomepageShell = window.location.pathname === "/" || navigation.some((item) => item.href === window.location.pathname);

    if (!isSectionPath || !isHomepageShell) {
      return;
    }

    event.preventDefault();
    const targetId = targetPath.slice(1);
    window.history.pushState({}, "", targetPath);
    mobileMenuRef.current?.removeAttribute("open");
    document.getElementById(targetId)?.scrollIntoView({ block: "start", behavior: "smooth" });
  }

  useEffect(() => {
    function closeMenuOnOutsideClick(event: PointerEvent) {
      const mobileMenu = mobileMenuRef.current;

      if (mobileMenu?.open && !mobileMenu.contains(event.target as Node)) {
        mobileMenu.open = false;
      }
    }

    document.addEventListener("pointerdown", closeMenuOnOutsideClick);
    return () => document.removeEventListener("pointerdown", closeMenuOnOutsideClick);
  }, []);

  useEffect(() => {
    const sectionId = window.location.pathname.slice(1);
    const section = document.getElementById(sectionId);

    if (section) {
      requestAnimationFrame(() => section.scrollIntoView({ block: "start" }));
    }
  }, []);

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link className="brand" href="/" aria-label="Rajan Chaudhary home">

          <span className="sky-color">&lt;</span><span>{site.name}</span><span className="sky-color">/</span>
          <span className="sky-color">&gt;</span>
        </Link>
        <nav aria-label="Primary navigation" className="nav-links">
          {navigation.map((item) => <a key={item.href} href={item.href} onClick={handleSectionNavigation}>{item.label}</a>)}
        </nav>
        <a className="nav-cta" href={`mailto:${site.email}`} aria-label="Send an email">
          <span className="nav-cta-label">Let&apos;s talk</span>
          <Icon className="nav-cta-mail" name="mail" aria-hidden="true" />
        </a>
        <details ref={mobileMenuRef} className="mobile-menu">
          <summary aria-label="Open navigation menu">
            <span />
            <span />
            <span />
          </summary>
          <nav aria-label="Mobile navigation" className="mobile-menu-links">
            {navigation.map((item) => <a key={item.href} href={item.href} onClick={handleSectionNavigation}>{item.label}</a>)}
          </nav>
        </details>
      </div>
    </header>
  );
}
