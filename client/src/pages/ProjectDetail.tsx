/*
  Clay & Canopy design reminder:
  Detail pages read like architectural field notes: tactile imagery, quiet metadata,
  and direct navigation back to the project archive.
*/
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Layers3, MapPin } from "lucide-react";
import { Link, useRoute } from "wouter";
import NotFound from "./NotFound";
import { Project, projects } from "@/lib/projects";

const fallbackImage = "/manus-storage/willdale-hero-reference_5cc5730f.jpg";

function SafeImage({ src, alt }: { src: string; alt: string }) {
  return <img src={src} alt={alt} onError={(event) => { event.currentTarget.src = fallbackImage; }} />;
}

function DetailMark() {
  return <span className="detail-mark" aria-hidden="true"><span>W</span></span>;
}

function ProjectCarousel({ project }: { project: Project }) {
  const [current, setCurrent] = useState(0);
  const slide = project.gallery[current];

  function move(direction: number) {
    setCurrent((index) => (index + direction + project.gallery.length) % project.gallery.length);
  }

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "ArrowLeft") move(-1);
      if (event.key === "ArrowRight") move(1);
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [project.gallery.length]);

  return (
    <div className="detail-carousel" aria-roledescription="carousel" aria-label={`${project.name} image gallery`}>
      <div className="detail-carousel-stage">
        <SafeImage src={slide.src} alt={slide.alt} />
        <div className="detail-carousel-caption"><span>{slide.label}</span><span>{String(current + 1).padStart(2, "0")} / {String(project.gallery.length).padStart(2, "0")}</span></div>
      </div>
      <div className="detail-carousel-controls">
        <div className="detail-carousel-dots" role="tablist" aria-label="Choose project image">
          {project.gallery.map((image, index) => (
            <button key={image.src} type="button" role="tab" aria-selected={index === current} aria-label={`Show ${image.label}`} className={index === current ? "is-active" : ""} onClick={() => setCurrent(index)} />
          ))}
        </div>
        <div className="detail-carousel-arrows">
          <button type="button" onClick={() => move(-1)} aria-label="Previous project image"><ArrowLeft size={17} /></button>
          <button type="button" onClick={() => move(1)} aria-label="Next project image"><ArrowRight size={17} /></button>
        </div>
      </div>
    </div>
  );
}

export default function ProjectDetail() {
  const [, params] = useRoute<{ slug: string }>("/projects/:slug");
  const project = projects.find((item) => item.slug === params?.slug);

  if (!project) return <NotFound />;

  return (
    <div className="detail-page">
      <header className="detail-header">
        <div className="site-shell detail-header-inner">
          <Link href="/" className="detail-brand" aria-label="Back to Willdale home"><DetailMark /><span><strong>Willdale</strong><small>Limited</small></span></Link>
          <Link href="/#projects" className="detail-back"><ArrowLeft size={15} /> Back to projects</Link>
        </div>
      </header>
      <main>
        <section className="detail-hero">
          <div className="site-shell detail-hero-grid">
            <div className="detail-hero-copy">
              <span className="eyebrow eyebrow--green">Project archive / {project.category}</span>
              <h1>{project.name}</h1>
              <p>{project.summary}</p>
              <div className="detail-hero-meta"><span><MapPin size={15} /> {project.place}</span><span><Layers3 size={15} /> {project.scope}</span></div>
            </div>
            <div className="detail-hero-side"><span>Built with Willdale</span><span>{project.category}</span></div>
          </div>
        </section>

        <section className="detail-content">
          <div className="site-shell detail-content-grid">
            <ProjectCarousel project={project} />
            <aside className="detail-specs" aria-labelledby="detail-specs-title">
              <span className="eyebrow">Project specification</span>
              <h2 id="detail-specs-title">The details<br /><em>in context.</em></h2>
              <dl>
                <div><dt>Project</dt><dd>{project.name}</dd></div>
                <div><dt>Category</dt><dd>{project.category}</dd></div>
                <div><dt>Location</dt><dd>{project.place}</dd></div>
                <div><dt>Willdale scope</dt><dd>{project.scope}</dd></div>
              </dl>
              <a className="button button--green" href="/#contact">Discuss a project <ArrowUpRight size={16} /></a>
            </aside>
          </div>
        </section>

        <section className="detail-footer-cta">
          <div className="site-shell detail-footer-cta-inner"><div><span className="eyebrow eyebrow--light">Continue exploring</span><h2>See more places shaped with Willdale.</h2></div><Link className="button button--dark" href="/#projects">Browse the archive <ArrowRight size={16} /></Link></div>
        </section>
      </main>
      <footer className="detail-footer"><div className="site-shell"><span>© {new Date().getFullYear()} Willdale Limited</span><span>Built in Zimbabwe</span></div></footer>
    </div>
  );
}
