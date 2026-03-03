import { useState } from "react";
import { S } from "../config.js";

// ── Markdown renderer: handles **bold** and line structure ────────────────────
function MD({ text, baseColor }) {
  if (!text) return null;
  const color = baseColor || S.muted;

  const renderInline = (str) => {
    const parts = str.split(/\*\*(.*?)\*\*/g);
    return parts.map((p, i) =>
      i % 2 === 1
        ? <strong key={i} style={{ color: S.text, fontWeight: 700 }}>{p}</strong>
        : p
    );
  };

  return (
    <div style={{ lineHeight: 1.8 }}>
      {text.split('\n').map((line, i) => {
        if (!line.trim()) return <div key={i} style={{ height: 8 }} />;
        const indent = (line.match(/^(\s+)/) || ['',''])[1].length;
        const trimmed = line.trim();
        const isMono = /^[A-Z].*[:\(]/.test(trimmed) && trimmed.length < 60;
        return (
          <div key={i} style={{
            paddingLeft: Math.min(indent * 8, 40),
            marginBottom: 2,
            fontSize: isMono ? 13 : 14,
            color: indent > 0 ? S.muted : color,
            fontFamily: isMono ? "'IBM Plex Mono', monospace" : "inherit",
          }}>
            {renderInline(trimmed)}
          </div>
        );
      })}
    </div>
  );
}

// ── Flashcard ─────────────────────────────────────────────────────────────────
function Flashcard({ card }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div onClick={() => setFlipped(f => !f)}
      style={{ background: flipped ? "rgba(167,139,250,.1)" : S.card, border: "1px solid " + (flipped ? S.purple : S.border), borderRadius: 10, padding: "14px 16px", cursor: "pointer", marginBottom: 8, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, minHeight: 56, transition: "all .2s" }}>
      <div>
        <div style={{ fontSize: 10, color: flipped ? S.purple : S.dim, marginBottom: 3, textTransform: "uppercase", letterSpacing: 1 }}>{flipped ? "Answer" : "Question — click to flip"}</div>
        <div style={{ fontSize: 13, color: flipped ? S.text : S.muted, lineHeight: 1.5 }}>{flipped ? card.a : card.q}</div>
      </div>
      <div style={{ fontSize: 20, flexShrink: 0, color: S.dim }}>{flipped ? "✓" : "→"}</div>
    </div>
  );
}

// ── Main DayPage ──────────────────────────────────────────────────────────────
export default function DayPage({ data }) {
  const [checked,   setChecked]   = useState({});
  const [feedback,  setFeedback]  = useState({});
  const [timers,    setTimers]    = useState({});
  const [revealedQ, setRevealedQ] = useState({});

  if (!data) return (
    <div style={{ background: S.bg, minHeight: "100vh", color: S.text, fontFamily: "Inter,system-ui,sans-serif", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 16 }}>
      <div style={{ fontSize: 48 }}>📋</div>
      <h2 style={{ fontSize: 22, fontWeight: 700 }}>Coming soon</h2>
      <p style={{ color: S.muted, fontSize: 14 }}>Work with Claude to build this page</p>
      <a href="/" style={{ color: S.purple, textDecoration: "none", fontSize: 13, padding: "8px 20px", border: "1px solid rgba(167,139,250,.3)", borderRadius: 20 }}>← Back to Schedule</a>
    </div>
  );

  const d = data;

  const startTimer = (key) => {
    if (timers[key]?.running) {
      clearInterval(timers[key].iv);
      setTimers(p => ({ ...p, [key]: { running: false, secs: 90 } }));
      return;
    }
    let secs = 90;
    const iv = setInterval(() => {
      secs--;
      setTimers(p => ({ ...p, [key]: { running: secs > 0, secs, iv } }));
      if (secs <= 0) clearInterval(iv);
    }, 1000);
    setTimers(p => ({ ...p, [key]: { running: true, secs: 90, iv } }));
  };

  return (
    <div style={{ background: S.bg, minHeight: "100vh", color: S.text, fontFamily: "Inter,system-ui,sans-serif" }}>

      <nav style={{ background: "rgba(255,255,255,.03)", borderBottom: "1px solid " + S.border, padding: "14px 36px", display: "flex", alignItems: "center", gap: 16, position: "sticky", top: 0, zIndex: 100, backdropFilter: "blur(20px)" }}>
        <a href="/" style={{ fontWeight: 700, color: S.purple, textDecoration: "none", fontSize: 13 }}>📅 Schedule</a>
        <span style={{ color: "rgba(255,255,255,.15)" }}>/</span>
        <span style={{ fontSize: 13 }}>Day {d.day}</span>
        <div style={{ marginLeft: "auto", display: "flex", gap: 8 }}>
          {d.prev_day && <a href={"/day/" + d.prev_day} style={{ padding: "6px 14px", border: "1px solid rgba(255,255,255,.1)", borderRadius: 20, fontSize: 12, color: S.muted, textDecoration: "none" }}>← Day {d.prev_day}</a>}
          {d.next_day && <a href={"/day/" + d.next_day} style={{ padding: "6px 14px", border: "1px solid rgba(255,255,255,.1)", borderRadius: 20, fontSize: 12, color: S.muted, textDecoration: "none" }}>Day {d.next_day} →</a>}
        </div>
      </nav>

      <div style={{ padding: "40px 36px 16px", maxWidth: 900, margin: "0 auto" }}>
        <div style={{ fontSize: 10, letterSpacing: 4, color: S.purple, textTransform: "uppercase", marginBottom: 8 }}>Day {d.day} · {d.date_note}</div>
        <h1 style={{ fontSize: 30, fontWeight: 700, marginBottom: 8 }}>{d.title}</h1>
        <p style={{ fontSize: 14, color: S.muted }}>{d.week_label}</p>
      </div>

      <div style={{ display: "flex", gap: 3, padding: "0 36px 24px", maxWidth: 900, margin: "0 auto" }}>
        {Array.from({ length: 30 }, (_, i) => (
          <div key={i} style={{ height: 4, flex: 1, borderRadius: 2, background: i < d.day - 1 ? "#a78bfa" : i === d.day - 1 ? S.yellow : "rgba(255,255,255,.1)" }} />
        ))}
      </div>

      <main style={{ maxWidth: 900, margin: "0 auto", padding: "0 36px 80px" }}>

        {d.recap && (
          <div style={{ background: "rgba(167,139,250,.06)", border: "1px solid rgba(167,139,250,.2)", borderRadius: 12, padding: "20px 24px", marginBottom: 32 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: S.purple, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>📋 {d.recap.title}</div>
            {d.recap.points.map((p, i) => (
              <div key={i} style={{ fontSize: 13, color: S.muted, padding: "4px 0 4px 16px", borderLeft: "2px solid rgba(167,139,250,.3)", marginBottom: 6 }}>{p}</div>
            ))}
          </div>
        )}

        <div style={{ fontSize: 10, letterSpacing: 3, color: S.dim, textTransform: "uppercase", marginBottom: 16, marginTop: 40 }}>Today's Content</div>
        {d.topics.map((t, i) => (
          <div key={i} style={{ background: S.card, border: "1px solid " + S.border, borderLeft: "4px solid " + t.color, borderRadius: 14, padding: "24px 28px", marginBottom: 20 }}>
            <h2 style={{ color: t.color, fontSize: 18, fontWeight: 700, marginBottom: 16 }}>{t.title}</h2>
            <MD text={t.content} />
            <div style={{ marginTop: 16, padding: "12px 16px", background: "rgba(167,139,250,.08)", border: "1px solid rgba(167,139,250,.2)", borderRadius: 8 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: S.purple, letterSpacing: 1, textTransform: "uppercase", marginBottom: 6 }}>💡 Say it out loud</div>
              <div style={{ fontSize: 13, color: S.muted, lineHeight: 1.6 }}>{t.interview_tip}</div>
            </div>
          </div>
        ))}

        {d.flashcards && d.flashcards.length > 0 && (
          <>
            <div style={{ fontSize: 10, letterSpacing: 3, color: S.dim, textTransform: "uppercase", marginBottom: 16, marginTop: 40 }}>🃏 Flashcards — Click to Flip</div>
            <div style={{ marginBottom: 32 }}>
              {d.flashcards.map((card, i) => <Flashcard key={i} card={card} />)}
            </div>
          </>
        )}

        <div style={{ fontSize: 10, letterSpacing: 3, color: S.dim, textTransform: "uppercase", marginBottom: 16, marginTop: 40 }}>✍️ Write from Memory</div>
        <div style={{ background: S.card, border: "1px solid " + S.border, borderRadius: 12, padding: "20px 24px", marginBottom: 32 }}>
          <p style={{ fontSize: 12, color: S.dim, marginBottom: 16, fontStyle: "italic" }}>Close your notes. Check each box only when you can write it completely from memory.</p>
          {d.derivations.map((item, i) => (
            <div key={i} onClick={() => setChecked(p => ({ ...p, [i]: !p[i] }))} style={{ display: "flex", gap: 12, alignItems: "flex-start", padding: "12px 0", borderBottom: "1px solid rgba(255,255,255,.06)", cursor: "pointer", opacity: checked[i] ? 0.5 : 1 }}>
              <div style={{ width: 16, height: 16, borderRadius: 4, border: "1.5px solid " + (checked[i] ? S.purple : "rgba(255,255,255,.2)"), background: checked[i] ? S.purple : "transparent", flexShrink: 0, marginTop: 2, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, color: "white" }}>
                {checked[i] ? "✓" : ""}
              </div>
              <div style={{ fontSize: 13, color: checked[i] ? S.dim : S.muted, textDecoration: checked[i] ? "line-through" : "none", lineHeight: 1.5 }}>{item}</div>
            </div>
          ))}
        </div>

        <div style={{ fontSize: 10, letterSpacing: 3, color: S.dim, textTransform: "uppercase", marginBottom: 16, marginTop: 40 }}>Practice Questions ({d.practice_questions.length})</div>
        {d.practice_questions.map((q, qi) => {
          const rv = revealedQ[qi];
          const fb = feedback[qi];
          const timer = timers[qi];
          const dc = q.difficulty === "Easy" ? S.green : q.difficulty === "Medium" ? S.yellow : S.red;
          return (
            <div key={qi} style={{ background: S.card, border: "1px solid " + S.border, borderRadius: 12, marginBottom: 16, overflow: "hidden" }}>
              <div style={{ padding: "12px 16px 8px", display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
                <span style={{ fontSize: 10, fontWeight: 700, color: "#1877F2", background: "rgba(24,119,242,.15)", padding: "2px 8px", borderRadius: 8 }}>{q.company}</span>
                <span style={{ fontSize: 10, fontWeight: 700, color: dc, background: dc + "20", padding: "2px 8px", borderRadius: 8, border: "1px solid " + dc + "40" }}>{q.difficulty}</span>
                <button onClick={() => startTimer(qi)} style={{ fontSize: 11, padding: "3px 10px", borderRadius: 6, border: "1px solid " + (timer?.running ? S.red : "rgba(255,255,255,.12)"), background: "transparent", color: timer?.running ? S.red : S.dim, cursor: "pointer", marginLeft: "auto" }}>
                  {timer?.running ? "⏱ " + timer.secs + "s" : "⏱ 90s"}
                </button>
              </div>
              <p style={{ fontSize: 14, color: S.text, padding: "4px 16px 12px", lineHeight: 1.6 }}>{q.q}</p>
              <div style={{ padding: "0 16px 12px", display: "flex", gap: 8, flexWrap: "wrap" }}>
                <button onClick={() => setRevealedQ(p => ({ ...p, [qi]: !p[qi] }))} style={{ fontSize: 11, padding: "4px 12px", borderRadius: 6, border: "1px solid " + (rv ? S.purple : "rgba(255,255,255,.12)"), background: "transparent", color: rv ? S.purple : S.dim, cursor: "pointer" }}>
                  {rv ? "Hide ▲" : "Show answer ▼"}
                </button>
                {rv && <>
                  <button onClick={() => setFeedback(p => ({ ...p, [qi]: "got" }))} style={{ fontSize: 11, fontWeight: 700, padding: "4px 12px", borderRadius: 6, border: "1px solid " + (fb === "got" ? S.green : "rgba(255,255,255,.12)"), background: fb === "got" ? "rgba(16,185,129,.15)" : "transparent", color: fb === "got" ? S.green : S.dim, cursor: "pointer" }}>✓ Got it</button>
                  <button onClick={() => setFeedback(p => ({ ...p, [qi]: "struggled" }))} style={{ fontSize: 11, fontWeight: 700, padding: "4px 12px", borderRadius: 6, border: "1px solid " + (fb === "struggled" ? S.red : "rgba(255,255,255,.12)"), background: fb === "struggled" ? "rgba(239,68,68,.15)" : "transparent", color: fb === "struggled" ? S.red : S.dim, cursor: "pointer" }}>✗ Struggled</button>
                </>}
              </div>
              {rv && (
                <div style={{ borderTop: "1px solid rgba(255,255,255,.08)", padding: 16, background: "rgba(134,239,172,.04)" }}>
                  <p style={{ fontSize: 13, color: S.muted, lineHeight: 1.6 }}>{q.a}</p>
                  {q.say_aloud && (
                    <div style={{ marginTop: 12, padding: "10px 14px", background: "rgba(167,139,250,.08)", borderRadius: 8 }}>
                      <div style={{ fontSize: 11, fontWeight: 700, color: S.purple, marginBottom: 4, textTransform: "uppercase", letterSpacing: 1 }}>🎤 How to say it</div>
                      <div style={{ fontSize: 12, color: S.muted, lineHeight: 1.6 }}>{q.say_aloud}</div>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}

        <div style={{ fontSize: 10, letterSpacing: 3, color: S.dim, textTransform: "uppercase", marginBottom: 16, marginTop: 40 }}>Resources</div>
        {d.resources.map((r, i) => (
          <a key={i} href={r.url} target="_blank" rel="noreferrer" style={{ display: "block", padding: "12px 16px", background: S.card, border: "1px solid " + S.border, borderRadius: 8, textDecoration: "none", color: S.purple, fontSize: 13, marginBottom: 8 }}>
            → {r.name}
          </a>
        ))}

        {d.tomorrow_preview && (
          <div style={{ background: "rgba(16,185,129,.06)", border: "1px solid rgba(16,185,129,.2)", borderRadius: 12, padding: "20px 24px", marginTop: 40 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: S.green, letterSpacing: 2, textTransform: "uppercase", marginBottom: 10 }}>👀 Tomorrow — Day {d.next_day}</div>
            <p style={{ fontSize: 13, color: S.muted }}>{d.tomorrow_preview}</p>
          </div>
        )}

      </main>
    </div>
  );
}
