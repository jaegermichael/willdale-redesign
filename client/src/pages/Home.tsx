/*
  Clay & Canopy design reminder:
  Warm material-led architectural editorial for Willdale, with charcoal-green structure,
  terracotta material cues, and Willdale green reserved for actions and active signals.
*/
import { FormEvent, useEffect, useState } from "react";
import { FocusCards } from "@/components/ui/focus-cards";
import { projects, projectCategories } from "@/lib/projects";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Clock3,
  Facebook,
  Instagram,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  PhoneCall,
  Ruler,
  Truck,
  X,
} from "lucide-react";

const asset = {
  hero: "https://willdale.co.zw/wp-content/uploads/2022/06/joina.png",
  project: "https://willdale.co.zw/wp-content/uploads/2022/06/joina.png",
  topaz: "https://willdale.co.zw/wp-content/uploads/2022/10/Topaz-Dark-Rustic.jpg",
  ashBlue: "https://willdale.co.zw/wp-content/uploads/2022/10/ash-blue-rustic.jpg",
  logistics: "https://willdale.co.zw/wp-content/uploads/2023/05/PSC-Sanganai-flats.jpg",
  mark: "/manus-storage/willdale-mark_6006b84e.png",
};

const products = [
  {
    name: "Topaz Dark Rustic",
    type: "Face brick",
    tone: "Deep clay / low sheen",
    image: asset.topaz,
    featured: true,
  },
  {
    name: "Ash Blue Rustic",
    type: "Face brick",
    tone: "Mineral blue / textured",
    image: asset.ashBlue,
    featured: false,
  },
  {
    name: "Blue Multi Rustic",
    type: "Face brick",
    tone: "Blue-grey / variegated",
    image: "https://willdale.co.zw/wp-content/uploads/2022/10/blue-multi-rustic-1.jpg",
    featured: false,
  },
  {
    name: "Ash Blue Smooth",
    type: "Face brick",
    tone: "Cool ash / smooth",
    image: "https://willdale.co.zw/wp-content/uploads/2022/10/ash-blue-smooth-1.jpg",
    featured: false,
  },
];

function SafeImage({ src, fallback, alt }: { src: string; fallback: string; alt: string }) {
  return (
    <img
      src={src}
      alt={alt}
      onError={(event) => {
        if (!event.currentTarget.dataset.fallbackApplied) {
          event.currentTarget.dataset.fallbackApplied = "true";
          event.currentTarget.src = fallback;
        }
      }}
    />
  );
}

function SectionMarker({ index, label, light = false }: { index: string; label: string; light?: boolean }) {
  return (
    <div className={`section-marker ${light ? "section-marker--light" : ""}`} aria-hidden="true">
      <span className="section-marker-number">{index}</span>
      <span className="section-marker-courses"><i /><i /><i /></span>
      <span className="section-marker-label">{label}</span>
    </div>
  );
}

function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <a className={`brand ${compact ? "brand--compact" : ""}`} href="#top" aria-label="Willdale home">
      <span className="brand-mark" aria-hidden="true"><span className="brand-monogram">W</span></span>
      <span className="brand-copy">
        <strong>Willdale</strong>
        <span>Limited</span>
      </span>
    </a>
  );
}

function CallbackDialog({ onClose }: { onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="dialog-backdrop" role="presentation" onMouseDown={onClose}>
      <div
        className="callback-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="callback-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button className="dialog-close" type="button" onClick={onClose} aria-label="Close callback form">
          <X size={18} />
        </button>
        {!submitted ? (
          <>
            <span className="eyebrow">Talk to the team</span>
            <h2 id="callback-title">Tell us what you’re building.</h2>
            <p>Leave your details and the Willdale team can help with product selection, availability, or delivery.</p>
            <form onSubmit={handleSubmit}>
              <label>
                Your name
                <input name="name" required autoFocus />
              </label>
              <label>
                Phone number
                <input name="phone" type="tel" required />
              </label>
              <label>
                What do you need?
                <textarea name="message" rows={3} placeholder="Product advice, a quote, delivery question..." />
              </label>
              <button className="button button--green button--full" type="submit">
                Request a call <ArrowRight size={16} />
              </button>
            </form>
          </>
        ) : (
          <div className="dialog-success">
            <span className="success-icon"><Check size={20} /></span>
            <span className="eyebrow">Request noted</span>
            <h2>We’ll be in touch.</h2>
            <p>This preview records the interaction locally. Connect the form to your preferred contact workflow before launch.</p>
            <a className="button button--dark" href="mailto:marketing@willdale.co.zw">Email the team <Mail size={16} /></a>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [callbackOpen, setCallbackOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("top");
  const [projectCategory, setProjectCategory] = useState("All");
  const [visibleProjectCount, setVisibleProjectCount] = useState(4);
  const filteredProjects = projectCategory === "All" ? projects : projects.filter((project) => project.category === projectCategory);
  const visibleProjects = filteredProjects.slice(0, visibleProjectCount);

  useEffect(() => {
    setVisibleProjectCount(4);
  }, [projectCategory]);

  useEffect(() => {
    if (!callbackOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setCallbackOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [callbackOpen]);

  useEffect(() => {
    const sections = ["top", "about", "projects", "products", "contact"]
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActiveSection(visible.target.id);
      },
      { rootMargin: "-20% 0px -60%", threshold: [0.05, 0.2, 0.5] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const revealItems = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if (!("IntersectionObserver" in window)) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      return;
    }
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -12%", threshold: 0.08 },
    );
    revealItems.forEach((item) => revealObserver.observe(item));
    return () => revealObserver.disconnect();
  }, []);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <div className="site" id="top">
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <div className="utility-bar">
        <div className="site-shell utility-inner">
          <a href="#standards"><Ruler size={14} /> Standard brick specifications</a>
          <div className="utility-right">
            <a href="mailto:marketing@willdale.co.zw"><Mail size={14} /> marketing@willdale.co.zw</a>
            <a href="tel:+2638677007150"><PhoneCall size={14} /> +263 8677 007 150</a>
            <span className="utility-socials" aria-label="Social media">
              <a href="https://www.facebook.com/willdalebricks/" target="_blank" rel="noreferrer" aria-label="Facebook"><Facebook size={14} /></a>
              <a href="https://www.instagram.com/willdalebricks/" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={14} /></a>
              <a href="https://www.linkedin.com/company/willdalelimited/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={14} /></a>
            </span>
          </div>
        </div>
      </div>

      <header className="site-header">
        <div className="site-shell nav-inner">
          <Logo />
          <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="primary-nav" onClick={() => setMenuOpen((open) => !open)}>
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
            <span>{menuOpen ? "Close" : "Menu"}</span>
          </button>
          <nav id="primary-nav" className={`primary-nav ${menuOpen ? "primary-nav--open" : ""}`} aria-label="Primary navigation">
            <a className={activeSection === "about" ? "is-active" : ""} href="#about" onClick={closeMenu}>About</a>
            <a className={activeSection === "projects" ? "is-active" : ""} href="#projects" onClick={closeMenu}>Projects</a>
            <a className={activeSection === "products" ? "is-active" : ""} href="#products" onClick={closeMenu}>Products</a>
            <a href="#standards" onClick={closeMenu}>Specifications</a>
            <a className={activeSection === "contact" ? "is-active" : ""} href="#contact" onClick={closeMenu}>Contact</a>
            <button className="button button--green button--nav" type="button" onClick={() => { closeMenu(); setCallbackOpen(true); }}>
              Call me back <ArrowUpRight size={15} />
            </button>
          </nav>
        </div>
      </header>

      <main id="main-content">
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="site-shell hero-grid">
            <div className="hero-copy reveal">
              <span className="eyebrow eyebrow--green">Clay, shaped for place</span>
              <h1 id="hero-title">Brick made for the life <em>around it.</em></h1>
              <p className="hero-intro">Zimbabwean clay bricks for considered homes, enduring landmarks, and everything built between them.</p>
              <div className="hero-actions">
                <a className="button button--green" href="#products">Explore the range <ArrowRight size={16} /></a>
                <a className="text-link" href="#projects">See where we build <ArrowUpRight size={16} /></a>
              </div>
              <div className="hero-proof">
                <span><strong>01</strong> Local material knowledge</span>
                <span><strong>02</strong> Built for Zimbabwean conditions</span>
              </div>
            </div>
            <div className="hero-visual reveal reveal--delay">
              <SafeImage src={asset.hero} fallback={asset.project} alt="Stacks of fired clay bricks at a Willdale brick yard" />
              <div className="hero-visual-overlay" />
              <div className="hero-caption">
                <span>Mount Hampden, Harare</span>
                <span>Fired clay / 2026</span>
              </div>
              <div className="hero-stamp"><Layers3 size={18} /><span>Made<br />to last</span></div>
            </div>
          </div>
          <div className="site-shell hero-index" aria-hidden="true">
            <span className="index-line" />
            <span>Material index</span>
            <span className="index-line" />
            <span>01 / 04</span>
          </div>
        </section>

        <section className="statement-section" id="about" aria-labelledby="about-title">
          <div className="site-shell"><SectionMarker index="01" label="Material" /></div>
          <div className="site-shell statement-grid reveal">
            <div>
              <span className="eyebrow">What we make</span>
              <h2 id="about-title">The first decision in a building is what it stands on.</h2>
            </div>
            <div className="statement-body">
              <p className="lead-copy">We manufacture and distribute affordable, world-class clay bricks and clay-based construction products, made with appropriate technology and a clear understanding of the places they serve.</p>
              <p>From the first pallet to the last course, our work is about dependable material, thoughtful service, and a healthier built environment for customers, employees, communities, and shareholders.</p>
              <a className="text-link text-link--dark" href="#standards">Read our brick standards <ArrowRight size={16} /></a>
            </div>
          </div>
        </section>

        <section className="service-band" aria-label="Willdale capabilities">
          <div className="site-shell capability-grid reveal">
            <div className="capability-intro">
              <span className="eyebrow eyebrow--light">From earth to site</span>
              <h2>Material, made useful.</h2>
            </div>
            <div className="capability-item"><Truck size={20} /><span><strong>Reliable movement</strong>Willtrans logistics keeps product moving from yard to site.</span></div>
            <div className="capability-item"><Layers3 size={20} /><span><strong>Made to specification</strong>Choose the face, finish, and tone for your project.</span></div>
            <div className="capability-item"><Ruler size={20} /><span><strong>Built on detail</strong>Find dimensions and standards before you order.</span></div>
          </div>
        </section>

        <section className="projects-section" id="projects" aria-labelledby="projects-title">
          <div className="site-shell"><SectionMarker index="02" label="Places" /></div>
          <div className="site-shell">
            <div className="section-head section-head--split reveal">
              <div>
                <span className="eyebrow">Places we’ve shaped</span>
                <h2 id="projects-title">A brick is small.<br /><em>The place is not.</em></h2>
              </div>
              <div className="section-head-aside"><p>From civic landmarks to homes and schools, Willdale bricks are part of the everyday architecture of Zimbabwe.</p><a className="text-link text-link--dark" href="#contact">Start a project conversation <ArrowRight size={16} /></a></div>
            </div>
            <div className="project-feature reveal reveal--delay">
              <div className="project-feature-image">              <SafeImage src={asset.project} fallback="https://willdale.co.zw/wp-content/uploads/2022/06/joina.png" alt="Contemporary face-brick civic building in Harare" /></div>
              <div className="project-feature-copy">
                <span className="eyebrow eyebrow--green">Featured project</span>
                <h3>Architecture that holds its ground.</h3>
                <p>Face brick gives a building a sense of place before the doors even open. Explore selected projects where texture and longevity do the talking.</p>
                <div className="project-meta"><span>Harare, Zimbabwe</span><span>Commercial / civic</span></div>
              </div>
            </div>
            <div className="gallery-toolbar reveal reveal--delay-2">
              <div className="filter-tabs" role="group" aria-label="Filter projects by category">
                {projectCategories.map((category) => (
                  <button
                    className={`filter-tab ${projectCategory === category ? "is-active" : ""}`}
                    type="button"
                    key={category}
                    aria-pressed={projectCategory === category}
                    onClick={() => setProjectCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
              <span className="gallery-count" aria-live="polite">Showing {visibleProjects.length} of {filteredProjects.length} {filteredProjects.length === 1 ? "project" : "projects"}</span>
            </div>
            <div id="project-gallery" aria-label={`${projectCategory} Willdale projects`}>
              <FocusCards
                cards={visibleProjects.map((project) => ({
                  eyebrow: `${project.category} / ${project.place}`,
                  fallback: asset.project,
                  href: `/projects/${project.slug}`,
                  src: project.image,
                  title: project.name,
                }))}
              />
            </div>
            {visibleProjectCount < filteredProjects.length && (
              <div className="load-more-wrap">
                <button className="button button--outline load-more" type="button" onClick={() => setVisibleProjectCount((count) => Math.min(count + 4, filteredProjects.length))} aria-controls="project-gallery">
                  Load more projects <ArrowDown size={16} />
                </button>
              </div>
            )}
          </div>
        </section>

        <section className="products-section" id="products" aria-labelledby="products-title">
          <div className="site-shell"><SectionMarker index="03" label="Products" /></div>
          <div className="site-shell">
            <div className="section-head section-head--products reveal">
              <div><span className="eyebrow">A material library</span><h2 id="products-title">Find the colour<br /><em>in the clay.</em></h2></div>
              <div className="section-head-aside"><p>Explore a considered range of face bricks with distinct tone, texture, and character.</p><a className="button button--outline" href="#standards">View all specifications <ArrowRight size={16} /></a></div>
            </div>
            <div className="product-grid reveal reveal--delay">
              {products.map((product) => (
                <article className={`product-card ${product.featured ? "product-card--featured" : ""}`} key={product.name}>
                  <div className="product-image"><SafeImage src={product.image} fallback={product.name === "Topaz Dark Rustic" ? "https://willdale.co.zw/wp-content/uploads/2022/10/Topaz-Dark-Rustic.jpg" : product.name === "Ash Blue Rustic" ? "https://willdale.co.zw/wp-content/uploads/2022/10/ash-blue-rustic.jpg" : product.image} alt={`${product.name} ${product.type}`} /><span className="product-arrow"><ArrowUpRight size={17} /></span></div>
                  <div className="product-copy"><div><span className="eyebrow">{product.type}</span><h3>{product.name}</h3><p>{product.tone}</p></div><span className="product-index">0{products.indexOf(product) + 1}</span></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="logistics-section">
          <div className="site-shell"><SectionMarker index="04" label="Movement" /></div>
          <div className="site-shell logistics-grid reveal">
            <div className="logistics-image"><SafeImage src={asset.logistics} fallback={asset.project} alt="Willdale project showing brick construction in Zimbabwe" /></div>
            <div className="logistics-copy"><span className="eyebrow eyebrow--green">Willtrans logistics</span><h2>From our yard to your site.</h2><p>Good material is only useful when it arrives where it needs to be. Willtrans supports the movement of Willdale product with a practical, dependable approach to delivery.</p><a className="text-link text-link--dark" href="#contact">Talk to logistics <ArrowRight size={16} /></a></div>
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="site-shell"><SectionMarker index="05" label="The yard" light /></div>
          <div className="site-shell contact-grid reveal">
            <div className="contact-intro"><span className="eyebrow eyebrow--light">Find us</span><h2 id="contact-title">Let’s put the right brick in the right place.</h2><p>Visit the yard, ask about a product, or bring us the outline of your next build.</p><button className="button button--green" type="button" onClick={() => setCallbackOpen(true)}>Call me back <PhoneCall size={16} /></button></div>
            <div className="contact-details">
              <div className="detail-block"><MapPin size={18} /><div><span>Yard & showroom</span><strong>19.5km peg, Lomagundi Road<br />Mount Hampden, Harare</strong></div></div>
              <div className="detail-block"><Clock3 size={18} /><div><span>Business hours</span><strong>Mon-Fri, 8am-5pm<br />Sat, 8:30am-1pm</strong></div></div>
              <div className="detail-block"><PhoneCall size={18} /><div><span>Call the team</span><strong><a href="tel:+2638677007150">+263 8677 007 150</a><br /><a href="mailto:marketing@willdale.co.zw">marketing@willdale.co.zw</a></strong></div></div>
            </div>
          </div>
        </section>

        <section className="standards-section" id="standards" aria-labelledby="standards-title">
          <div className="site-shell"><SectionMarker index="06" label="Standards" /></div>
          <div className="site-shell standards-inner reveal"><div><span className="eyebrow">Before the first course</span><h2 id="standards-title">Good building starts with a clear specification.</h2></div><a className="button button--dark" href="https://willdale.co.zw/brick-standard-specifications/" target="_blank" rel="noreferrer">Open brick standards <ArrowUpRight size={16} /></a></div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="site-shell footer-grid">
          <div><Logo compact /><p>Clay bricks and construction products for places that should endure.</p></div>
          <div className="footer-links"><a href="#about">About</a><a href="#projects">Projects</a><a href="#products">Products</a><a href="#standards">Specifications</a><a href="#contact">Contact</a></div>
          <div className="footer-socials"><a href="https://www.facebook.com/willdalebricks/" target="_blank" rel="noreferrer">Facebook <ArrowUpRight size={14} /></a><a href="https://www.instagram.com/willdalebricks/" target="_blank" rel="noreferrer">Instagram <ArrowUpRight size={14} /></a><a href="https://www.linkedin.com/company/willdalelimited/" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={14} /></a></div>
        </div>
        <div className="site-shell footer-bottom"><span>© {new Date().getFullYear()} Willdale Limited</span><span>Built in Zimbabwe</span><span>Privacy / Terms</span></div>
      </footer>

      {callbackOpen && <CallbackDialog onClose={() => setCallbackOpen(false)} />}
    </div>
  );
}
