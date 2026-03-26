import { useState } from "react";
import { catCfg, S } from "../config.js";

export default function DayCard({ day }) {
  const [done, setDone] = useState(false);

  const cfg      = catCfg[day.cat] || catCfg.stats;
  const isReview = day.cat === "review";

  const navigate = (e) => {
    e.preventDefault();
    window.history.pushState({}, "", `/day/${day.day}`);
    window.dispatchEvent(new PopStateEvent("popstate"));
    window.scrollTo(0, 0);
  };

  return (
    <div
      onClick={navigate}
      style={{
        background:   isReview ? "rgba(100,116,139,.1)" : S.card,
        border:       "1px solid " + (isReview ? "#475569" : S.border),
        borderRadius: 12, padding: "16px 18px", cursor: "pointer",
        opacity: done ? 0.5 : 1, position: "relative", transition: "all .2s",
      }}
      onMouseEnter={e => { e.currentTarget.style.border = "1px solid " + cfg.color + "60"; e.currentTarget.style.background = `linear-gradient(135deg,${cfg.color}18,rgba(255,255,255,.04))`; }}
      onMouseLeave={e => { e.currentTarget.style.border = "1px solid " + (isReview ? "#475569" : S.border); e.currentTarget.style.background = isReview ? "rgba(100,116,139,.1)" : S.card; }}
    >
      {done && (
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,.35)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28, borderRadius: 12, zIndex: 2 }}>✓</div>
      )}

      {/* Header row */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
        <div>
          <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: 2, color: cfg.color, textTransform: "uppercase" }}>Day {day.day}</div>
          <div style={{ fontSize: 14, fontWeight: 600, marginTop: 3, lineHeight: 1.3 }}>{cfg.emoji} {day.title}</div>
        </div>
        <button
          onClick={e => { e.stopPropagation(); setDone(d => !d); }}
          title="Mark done"
          style={{ width: 22, height: 22, borderRadius: "50%", border: "2px solid " + (done ? cfg.color : "rgba(255,255,255,.2)"), background: done ? cfg.color : "transparent", cursor: "pointer", flexShrink: 0, marginLeft: 8, display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: 11 }}
        >{done ? "✓" : ""}</button>
      </div>

      {/* Topic preview */}
      <div style={{ fontSize: 11, color: "#475569", marginBottom: 10 }}>
        {day.topics[0]}{day.topics.length > 1 ? ` +${day.topics.length - 1} more` : ""}
        {day.questions && day.questions.length > 0 ? ` · ${day.questions.length} Qs` : ""}
      </div>

      {/* Footer CTA */}
      <div style={{ fontSize: 11, color: cfg.color, opacity: 0.7 }}>
        📖 Open study page →
      </div>
    </div>
  );
}
