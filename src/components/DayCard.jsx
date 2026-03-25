import { useState } from "react";
import { catCfg, S } from "../config.js";
import QuestionCard from "./QuestionCard.jsx";
import rawQs from "../data/rawQs.js";
import remindersByWeek from "../data/reminders.js";

export default function DayCard({ day }) {
  const [open, setOpen]       = useState(false);
  const [done, setDone]       = useState(false);
  const [showRaw, setShowRaw] = useState(false);

  const cfg      = catCfg[day.cat] || catCfg.stats;
  const isReview = day.cat === "review";
  const dayRaw   = rawQs[day.day] || [];
  const reminders = ([7,14,21,28].includes(day.day) && remindersByWeek[day.week]) || [];

  return (
    <div
      onClick={() => setOpen(o => !o)}
      style={{
        background:   open ? `linear-gradient(135deg,${cfg.color}18,rgba(255,255,255,.04))` : isReview ? "rgba(100,116,139,.1)" : S.card,
        border:       "1px solid " + (open ? cfg.color + "60" : isReview ? "#475569" : S.border),
        borderRadius: 12, padding: "16px 18px", cursor: "pointer",
        opacity: done ? 0.5 : 1, position: "relative", transition: "all .2s",
      }}
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
          style={{ width: 22, height: 22, borderRadius: "50%", border: "2px solid " + (done ? cfg.color : "rgba(255,255,255,.2)"), background: done ? cfg.color : "transparent", cursor: "pointer", flexShrink: 0, marginLeft: 8, display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: 11 }}
        >{done ? "✓" : ""}</button>
      </div>

      {/* Collapsed preview */}
      {!open && (
        <div style={{ fontSize: 11, color: "#475569" }}>
          {day.topics[0]}{day.topics.length > 1 ? ` +${day.topics.length - 1} more` : ""}
          {day.questions.length > 0 ? ` · ${day.questions.length} Qs` : ""}
        </div>
      )}

      {/* Expanded */}
      {open && (
        <div style={{ borderTop: "1px solid rgba(255,255,255,.08)", paddingTop: 12, marginTop: 6 }}>

          {/* Weekly review reminder */}
          {reminders.length > 0 && (
            <div style={{ marginBottom: 14, background: "rgba(239,68,68,.07)", border: "1px solid rgba(239,68,68,.25)", borderRadius: 10, padding: "14px 16px" }}>
              <div style={{ fontSize: 10, fontWeight: 700, color: S.red, letterSpacing: 2, textTransform: "uppercase", marginBottom: 4 }}>⏰ Weekly Review — do this first</div>
              <div style={{ fontSize: 11, color: S.dim, marginBottom: 12 }}>1 hour: write each derivation cold — no notes.</div>
              {reminders.map((r, i) => {
                const rc = r.risk === "High" ? S.red : S.yellow;
                return (
                  <div key={i} style={{ marginBottom: 8, padding: "9px 11px", background: "rgba(0,0,0,.2)", borderRadius: 8, borderLeft: "3px solid " + rc }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 4, flexWrap: "wrap" }}>
                      <span style={{ fontSize: 11, fontWeight: 700, color: S.text }}>{r.concept}</span>
                      <span style={{ fontSize: 9, color: S.dim, background: "rgba(255,255,255,.06)", padding: "1px 6px", borderRadius: 4 }}>Week {r.fromWeek}</span>
                      <span style={{ fontSize: 9, color: rc, marginLeft: "auto" }}>{r.risk === "High" ? "🔴 High" : "🟡 Med"}</span>
                    </div>
                    <div style={{ fontSize: 11, color: S.muted, lineHeight: 1.5 }}>{r.action}</div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Topics */}
          <div style={{ marginBottom: 12 }}>
            <div style={{ fontSize: 9, letterSpacing: 2, color: S.dim, textTransform: "uppercase", marginBottom: 6 }}>Topics</div>
            {day.topics.map((t, i) => (
              <div key={i} style={{ fontSize: 12, color: t.startsWith("→") || t.startsWith("✍") ? S.purple : S.muted, marginBottom: 4, paddingLeft: 10, borderLeft: "2px solid " + (t.startsWith("→") || t.startsWith("✍") ? S.purple : cfg.color + "60") }}>{t}</div>
            ))}
          </div>

          {/* Resources */}
          <div style={{ marginBottom: 12 }}>
            <div style={{ fontSize: 9, letterSpacing: 2, color: S.dim, textTransform: "uppercase", marginBottom: 6 }}>Resources</div>
            {day.resources.map((r, i) => {
              const m = r.match(/—\s*(\S+\.\S+)/);
              const url   = m ? (m[1].startsWith("http") ? "" : "https://") + m[1] : null;
              const label = m ? r.replace(/—\s*\S+\.\S+$/, "").trim() : r;
              return (
                <div key={i} style={{ fontSize: 11, color: S.purple, marginBottom: 3 }}>
                  → {url ? <a href={url} target="_blank" rel="noreferrer" onClick={e => e.stopPropagation()} style={{ color: S.purple, textDecoration: "underline" }}>{label}</a> : r}
                </div>
              );
            })}
          </div>

          {/* Practice questions */}
          {day.questions.length > 0 && (
            <div>
              <div style={{ fontSize: 9, letterSpacing: 2, color: S.dim, textTransform: "uppercase", marginBottom: 8 }}>Practice Questions ({day.questions.length})</div>
              {day.questions.map((q, qi) => (
                <QuestionCard key={qi} q={q} qKey={`${day.day}-${qi}`} accentColor={cfg.color} />
              ))}
            </div>
          )}

          {/* 1p3acres toggle */}
          {dayRaw.length > 0 && (
            <div style={{ marginTop: 12, borderTop: "1px solid rgba(255,255,255,.06)", paddingTop: 12 }}>
              <button onClick={e => { e.stopPropagation(); setShowRaw(s => !s); }} style={{ fontSize: 10, color: S.dim, background: "transparent", border: "1px solid rgba(255,255,255,.1)", borderRadius: 6, padding: "4px 12px", cursor: "pointer", width: "100%", textAlign: "left" }}>
                {showRaw ? "▲ Hide" : "▼ Show"} {dayRaw.length} real interview reports (1point3acres)
              </button>
              {showRaw && dayRaw.map((q, qi) => (
                <QuestionCard key={qi} q={q} qKey={`raw-${day.day}-${qi}`} accentColor={S.dim} />
              ))}
            </div>
          )}

          {/* Link to daily study page */}
          <div style={{ marginTop: 12, paddingTop: 12, borderTop: "1px solid rgba(255,255,255,.06)" }}>
            <a href={`/day/${day.day}`} onClick={e => e.stopPropagation()} style={{ fontSize: 11, color: S.purple, textDecoration: "none" }}>📖 Open full study page →</a>
          </div>
        </div>
      )}
    </div>
  );
}
