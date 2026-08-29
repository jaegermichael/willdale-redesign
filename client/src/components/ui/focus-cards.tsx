import React, { useState } from "react";

export type FocusCardItem = {
  eyebrow: string;
  fallback?: string;
  href: string;
  src: string;
  title: string;
};

const FocusCard = React.memo(function FocusCard({
  card,
  index,
  focused,
  setFocused,
}: {
  card: FocusCardItem;
  index: number;
  focused: number | null;
  setFocused: React.Dispatch<React.SetStateAction<number | null>>;
}) {
  const isMuted = focused !== null && focused !== index;

  return (
    <article className={`focus-card ${isMuted ? "focus-card--muted" : ""}`}>
      <a
        className="focus-card-link"
        href={card.href}
        aria-label={`View details for ${card.title}`}
        onMouseEnter={() => setFocused(index)}
        onMouseLeave={() => setFocused(null)}
        onFocus={() => setFocused(index)}
        onBlur={() => setFocused(null)}
      >
        <div className="focus-card-image">
          <img
            src={card.src}
            alt={card.title}
            onError={(event) => {
              if (card.fallback && event.currentTarget.src !== card.fallback) {
                event.currentTarget.src = card.fallback;
              }
            }}
          />
          <span className="focus-card-action" aria-hidden="true">Explore project</span>
        </div>
        <div className="focus-card-copy">
          <span>{card.eyebrow}</span>
          <h3>{card.title}</h3>
          <span className="focus-card-arrow" aria-hidden="true">↗</span>
        </div>
      </a>
    </article>
  );
});

export function FocusCards({ cards }: { cards: FocusCardItem[] }) {
  const [focused, setFocused] = useState<number | null>(null);

  return (
    <div className="focus-cards" role="list">
      {cards.map((card, index) => (
        <FocusCard
          card={card}
          focused={focused}
          index={index}
          key={card.href}
          setFocused={setFocused}
        />
      ))}
    </div>
  );
}
