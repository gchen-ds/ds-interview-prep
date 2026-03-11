import { useState } from "react";
import { S, coColors } from "../config.js";

const freqStyle = {
  High:   { color: "#4ade80", bg: "rgba(74,222,128,.12)"  },
  Medium: { color: "#a3e635", bg: "rgba(163,230,53,.10)"  },
};

export default function QuizPage({ data }) {
  const [marks,    setMarks]    = useState({});
  const [revealed, setRevealed] = useState({});
  const [checked,  setChecked]  = useState({});

  const allQs       = data.sections.flatMap(s => s.qs);
  const total       = allQs.length;
  const correctCt   = Object.values(marks).filter(v => v === "correct").length;
  const wrongCt     = Object.values(marks).filter(v => v === "wrong").length;
  const remaining   = total - correctCt - wrongCt;
  const progress    = Math.round((correctCt + wrongCt) / total * 100);
  const allAnswered = correctCt + wrongCt === total;
  const pct         = allAnswered ? Math.round(correctCt / total * 100) : null;

  const toggle = (id) => setRevealed(p => ({ ...p, [id]: !p[id] }));

  const mark = (id, result) =>
    setMarks(p => {
      if (p[id] === result) { const n = { ...p }; delete n[id]; return n; }
      return { ...p, [id]: result };
    });

  const reset = () => { setMarks({}); setRevealed({}); };

  const weakQs = allQs.filter(q => marks[q.id] === "wrong");

  return (
    <div style={{ background: S.bg, minHeight: "100vh", color: S.text, fontFamily: "Inter,system-ui,sans-serif" }}>

      {/* ── Nav ── */}
      <nav style={{
        background: "rgba(255,255,255,.03)", borderBottom: "1px solid " + S.border,
        padding: "14px 36px", display: "flex", alignItems: "center", gap: 16,
        position: "sticky", top: 0, zIndex: 100, backdropFilter: "blur(20px)"
      }}>
        <a href="/" style={{ fontWeight: 700, color: S.purple, textDecoration: "none", fontSize: 13 }}>📅 Schedule</a>
        <span style={{ color: "rgba(255,255,255,.15)" }}>/</span>
        <span style={{ fontSize: 13 }}>Day {data.day}</span>
        <div style={{ marginLeft: "auto", display: "flex", gap: 8 }}>
          {data.prev_day && (
            <a href={"/day/" + data.prev_day} style={{ padding: "6px 14px", border: "1px solid rgba(255,255,255,.1)", borderRadius: 20, fontSize: 12, color: S.muted, textDecoration: "none" }}>
              ← Day {data.prev_day}
            </a>
          )}
          {data.next_day && (
            <a href={"/day/" + data.next_day} style={{ padding: "6px 14px", border: "1px solid rgba(255,255,255,.1)", borderRadius: 20, fontSize: 12, color: S.muted, textDecoration: "none" }}>
              Day {data.next_day} →
            </a>
          )}
        </div>
      </nav>

      {/* ── Scoreboard ── */}
      <div style={{
        position: "sticky", top: 57, zIndex: 99,
        background: S.bg + "f0", backdropFilter: "blur(20px)",
        borderBottom: "1px solid " + S.border,
        padding: "10px 36px", display: "flex", alignItems: "center", gap: 18
      }}>
        <span style={{ fontSize: 12, color: S.dim, fontWeight: 600 }}>Score</span>
        <span style={{ fontSize: 22, fontWeight: 800, color: "#4ade80",  lineHeight: 1 }}>{correctCt}</span>
        <span style={{ color: S.dim, fontSize: 16 }}>·</span>
        <span style={{ fontSize: 22, fontWeight: 800, color: "#ef4444",  lineHeight: 1 }}>{wrongCt}</span>
        <span style={{ color: S.dim, fontSize: 16 }}>·</span>
        <span style={{ fontSize: 22, fontWeight: 800, color: S.dim,      lineHeight: 1 }}>{remaining}</span>
        <div style={{ width: 140, height: 5, background: "rgba(255,255,255,.08)", borderRadius: 3, overflow: "hidden" }}>
          <div style={{
            height: "100%", width: progress + "%",
            background: "linear-gradient(90deg,#4ade80,#60a5fa)",
            borderRadius: 3, transition: "width .3s"
          }} />
        </div>
        <span style={{ fontSize: 12, color: S.dim }}>{progress}%</span>
        <button
          onClick={reset}
          style={{ marginLeft: "auto", background: "rgba(255,255,255,.06)", border: "1px solid " + S.border, color: S.muted, padding: "6px 14px", borderRadius: 8, fontSize: 12, cursor: "pointer", fontWeight: 600 }}
        >
          ↺ Reset
        </button>
      </div>

      {/* ── Hero ── */}
      <div style={{ padding: "40px 36px 8px", maxWidth: 900, margin: "0 auto" }}>
        <div style={{ fontSize: 10, letterSpacing: 4, color: S.purple, textTransform: "uppercase", marginBottom: 8 }}>
          {data.date_note}
        </div>
        <h1 style={{ fontSize: 30, fontWeight: 700, marginBottom: 8 }}>{data.title}</h1>
        <p style={{ fontSize: 14, color: S.muted }}>{data.subtitle}</p>
      </div>

      {/* ── Day progress strip ── */}
      <div style={{ display: "flex", gap: 3, padding: "16px 36px 4px", maxWidth: 900, margin: "0 auto" }}>
        {Array.from({ length: 30 }, (_, i) => (
          <div key={i} style={{
            height: 4, flex: 1, borderRadius: 2,
            background: i < data.day - 1 ? "#a78bfa" : i === data.day - 1 ? S.yellow : "rgba(255,255,255,.1)"
          }} />
        ))}
      </div>

      {/* ── Sections & Questions ── */}
      <main style={{ maxWidth: 900, margin: "0 auto", padding: "0 36px 80px" }}>

        {/* ── Review Tasks ── */}
        {data.review_tasks && (
          <div style={{ background: "rgba(167,139,250,.06)", border: "1px solid rgba(167,139,250,.2)", borderRadius: 14, padding: "20px 24px", marginTop: 32 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: S.purple, letterSpacing: 2, textTransform: "uppercase", marginBottom: 14 }}>
              ✍️ Before the Quiz — Write From Memory (60–90 min)
            </div>
            {data.review_tasks.map((t, i) => (
              <div key={i} style={{ fontSize: 13, color: S.muted, padding: "4px 0 4px 14px", borderLeft: "2px solid rgba(167,139,250,.3)", marginBottom: 6, lineHeight: 1.6 }}>
                {t}
              </div>
            ))}
          </div>
        )}

        {/* ── Derivations Checklist ── */}
        {data.derivations && (
          <>
            <div style={{ fontSize: 10, letterSpacing: 3, color: S.dim, textTransform: "uppercase", marginBottom: 14, marginTop: 40 }}>
              ✍️ Write From Memory — Check Each When You Can Write It Cold
            </div>
            <div style={{ background: S.card, border: "1px solid " + S.border, borderRadius: 12, padding: "20px 24px", marginBottom: 12 }}>
              <p style={{ fontSize: 12, color: S.dim, marginBottom: 16, fontStyle: "italic" }}>
                Close your notes. Check each box only when you can write it completely from memory.
              </p>
              {data.derivations.map((item, i) => (
                <div
                  key={i}
                  onClick={() => setChecked(p => ({ ...p, [i]: !p[i] }))}
                  style={{
                    display: "flex", gap: 12, alignItems: "flex-start",
                    padding: "12px 0", borderBottom: "1px solid rgba(255,255,255,.06)",
                    cursor: "pointer", opacity: checked[i] ? 0.45 : 1
                  }}
                >
                  <div style={{
                    width: 16, height: 16, borderRadius: 4, flexShrink: 0, marginTop: 2,
                    border: "1.5px solid " + (checked[i] ? S.purple : "rgba(255,255,255,.2)"),
                    background: checked[i] ? S.purple : "transparent",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 10, color: "white", transition: "all .15s"
                  }}>
                    {checked[i] ? "✓" : ""}
                  </div>
                  <div style={{ fontSize: 13, color: checked[i] ? S.dim : S.muted, textDecoration: checked[i] ? "line-through" : "none", lineHeight: 1.55 }}>
                    {item}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* ── Resources ── */}
        {data.resources && (
          <>
            <div style={{ fontSize: 10, letterSpacing: 3, color: S.dim, textTransform: "uppercase", marginBottom: 12, marginTop: 36 }}>Resources</div>
            {data.resources.map((r, i) => (
              <a key={i} href={r.url} style={{ display: "block", padding: "12px 16px", background: S.card, border: "1px solid " + S.border, borderRadius: 8, textDecoration: "none", color: S.purple, fontSize: 13, marginBottom: 8 }}>
                → {r.name}
              </a>
            ))}
          </>
        )}

        {/* ── Quiz divider ── */}
        <div style={{ marginTop: 52, marginBottom: 4, display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ flex: 1, height: 1, background: S.border }} />
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", color: S.purple, padding: "6px 18px", border: "1px solid rgba(167,139,250,.3)", borderRadius: 20 }}>
            50-Question Quiz
          </div>
          <div style={{ flex: 1, height: 1, background: S.border }} />
        </div>

        {data.sections.map((section, si) => (
          <div key={si}>

            {/* Section header */}
            <div style={{ marginTop: 52, marginBottom: 20, display: "flex", alignItems: "center", gap: 14 }}>
              <span style={{ fontSize: 22 }}>{section.icon}</span>
              <span style={{ fontSize: 18, fontWeight: 800, color: S.text }}>{section.title}</span>
              <span style={{ fontSize: 12, color: S.dim, padding: "2px 10px", background: "rgba(255,255,255,.05)", borderRadius: 12 }}>
                {section.range}
              </span>
              <div style={{ flex: 1, height: 1, background: S.border }} />
            </div>

            {section.qs.map((q) => {
              const m         = marks[q.id];
              const rv        = revealed[q.id];
              const coColor   = coColors[q.company] || "#94a3b8";
              const fStyle    = freqStyle[q.freq] || freqStyle.Medium;
              const borderCol = m === "correct" ? "rgba(74,222,128,.4)"
                              : m === "wrong"   ? "rgba(239,68,68,.4)"
                              : S.border;
              return (
                <div key={q.id} style={{
                  background: S.card, border: "1px solid " + borderCol,
                  borderRadius: 14, marginBottom: 14, overflow: "hidden",
                  transition: "border-color .2s"
                }}>

                  {/* Question */}
                  <div style={{ padding: "16px 20px 12px" }}>
                    <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap", marginBottom: 10 }}>
                      <span style={{ fontSize: 11, fontWeight: 700, color: S.dim }}>{q.id.toUpperCase()}</span>
                      <span style={{
                        fontSize: 11, fontWeight: 700, color: coColor,
                        background: coColor + "20", padding: "2px 8px", borderRadius: 8,
                        border: "1px solid " + coColor + "40"
                      }}>{q.company}</span>
                      {q.freq && (
                        <span style={{ fontSize: 11, fontWeight: 700, color: fStyle.color, background: fStyle.bg, padding: "2px 8px", borderRadius: 8 }}>
                          {q.freq} freq
                        </span>
                      )}
                    </div>
                    <p style={{ fontSize: 14, color: S.text, lineHeight: 1.65, margin: 0 }}>{q.q}</p>
                  </div>

                  {/* Action bar */}
                  <div style={{ display: "flex", borderTop: "1px solid " + S.border }}>
                    <button
                      onClick={() => toggle(q.id)}
                      style={{
                        flex: 2, padding: "11px 20px", background: "transparent",
                        border: "none", borderRight: "1px solid " + S.border,
                        color: rv ? S.purple : S.dim, fontSize: 13, fontWeight: 600,
                        cursor: "pointer", textAlign: "left"
                      }}
                    >
                      {rv ? "▼ Hide answer" : "▶ Show answer"}
                    </button>
                    <button
                      onClick={() => mark(q.id, "correct")}
                      style={{
                        flex: 1, padding: "11px", background: m === "correct" ? "rgba(74,222,128,.1)" : "transparent",
                        border: "none", borderRight: "1px solid " + S.border,
                        color: m === "correct" ? "#4ade80" : S.dim,
                        fontSize: 13, fontWeight: 700, cursor: "pointer"
                      }}
                    >
                      ✓ Got it
                    </button>
                    <button
                      onClick={() => mark(q.id, "wrong")}
                      style={{
                        flex: 1, padding: "11px", background: m === "wrong" ? "rgba(239,68,68,.1)" : "transparent",
                        border: "none", color: m === "wrong" ? "#ef4444" : S.dim,
                        fontSize: 13, fontWeight: 700, cursor: "pointer"
                      }}
                    >
                      ✗ Missed
                    </button>
                  </div>

                  {/* Answer */}
                  {rv && (
                    <div style={{
                      borderTop: "1px solid rgba(255,255,255,.06)",
                      padding: "16px 20px",
                      background: "rgba(134,239,172,.03)"
                    }}>
                      <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: "#4ade80", marginBottom: 10 }}>
                        Answer
                      </div>
                      <div
                        className="quiz-answer"
                        dangerouslySetInnerHTML={{ __html: q.answer }}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ))}

        {/* ── Final Summary ── */}
        {(correctCt + wrongCt) > 0 && (
          <div style={{
            background: "rgba(255,255,255,.03)", border: "1px solid " + S.border,
            borderRadius: 16, padding: "28px 32px", marginTop: 52, textAlign: "center"
          }}>
            <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16 }}>Your Week 1 Score</h3>
            <div style={{
              fontSize: 56, fontWeight: 900, lineHeight: 1,
              color: pct === null ? S.yellow : pct >= 80 ? "#4ade80" : pct >= 60 ? S.yellow : "#ef4444"
            }}>
              {pct !== null ? pct + "%" : correctCt + "/" + (correctCt + wrongCt)}
            </div>
            <p style={{ color: S.dim, marginTop: 10, fontSize: 13 }}>
              {pct !== null
                ? `${correctCt} correct · ${wrongCt} missed · all ${total} answered`
                : `${correctCt + wrongCt} of ${total} questions answered`}
            </p>
            {weakQs.length > 0 && (
              <div style={{ textAlign: "left", marginTop: 24 }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: "#ef4444", marginBottom: 10 }}>⚠️ Questions to revisit:</div>
                {weakQs.map(q => (
                  <div key={q.id} style={{ fontSize: 12, color: "#fca5a5", padding: "7px 0", borderBottom: "1px solid " + S.border }}>
                    <span style={{ fontWeight: 700, marginRight: 8 }}>{q.id.toUpperCase()}</span>
                    {q.q.length > 90 ? q.q.slice(0, 90) + "…" : q.q}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

      </main>
    </div>
  );
}
