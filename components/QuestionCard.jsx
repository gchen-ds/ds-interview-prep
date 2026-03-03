import { useState } from "react";
import { S, coColors } from "../config.js";

export default function QuestionCard({ q, qKey, accentColor }) {
  const [revealed, setRevealed] = useState(false);
  const [feedback, setFeedback] = useState(null); // "got" | "struggled"
  const [timerRunning, setTimerRunning] = useState(false);
  const [timerSecs, setTimerSecs] = useState(90);

  const cc  = coColors[q.co] || "#666";
  const hi  = q.freq === "High";
  const med = q.freq === "Medium";

  const startTimer = () => {
    if (timerRunning) {
      setTimerRunning(false);
      setTimerSecs(90);
      return;
    }
    setTimerRunning(true);
    let secs = 90;
    const iv = setInterval(() => {
      secs--;
      setTimerSecs(secs);
      if (secs <= 0) { clearInterval(iv); setTimerRunning(false); setTimerSecs(90); }
    }, 1000);
  };

  return (
    <div style={{ marginBottom: 10, border: "1px solid " + (hi ? "#10b981" : "rgba(255,255,255,.07)"), borderLeft: "3px solid " + (hi ? "#10b981" : med ? S.yellow : "rgba(255,255,255,.15)"), borderRadius: 8, background: "rgba(0,0,0,.25)" }}>
      <div style={{ padding: "10px 12px" }}>

        {/* Tags */}
        <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 6, flexWrap: "wrap" }}>
          <span style={{ fontSize: 9, fontWeight: 700, color: cc, background: cc + "22", padding: "2px 7px", borderRadius: 10 }}>{q.co}</span>
          {hi  && <span style={{ fontSize: 9, fontWeight: 700, color: "#10b981", background: "#10b98122", padding: "2px 7px", borderRadius: 10 }}>★ High</span>}
          {med && <span style={{ fontSize: 9, fontWeight: 700, color: S.yellow,  background: S.yellow  + "22", padding: "2px 7px", borderRadius: 10 }}>◆ Med</span>}
        </div>

        {/* Question text */}
        <div style={{ fontSize: 12, color: S.text, lineHeight: 1.55 }}>{q.q}</div>

        {/* Action row */}
        <div style={{ display: "flex", gap: 6, marginTop: 8, flexWrap: "wrap", alignItems: "center" }}>
          {!revealed && (
            <button onClick={startTimer} style={{ fontSize: 10, color: timerRunning ? S.red : S.dim, background: "transparent", border: "1px solid " + (timerRunning ? S.red : "rgba(255,255,255,.1)"), borderRadius: 6, padding: "3px 10px", cursor: "pointer" }}>
              {timerRunning ? "⏱ " + timerSecs + "s" : "⏱ 90s"}
            </button>
          )}
          {q.a && (
            <button onClick={() => setRevealed(r => !r)} style={{ fontSize: 10, color: revealed ? (accentColor || S.purple) : S.dim, background: "transparent", border: "1px solid " + (revealed ? (accentColor || S.purple) : "rgba(255,255,255,.12)"), borderRadius: 6, padding: "3px 10px", cursor: "pointer" }}>
              {revealed ? "Hide ▲" : "Show answer ▼"}
            </button>
          )}
          {revealed && <>
            <button onClick={() => setFeedback("got")} style={{ fontSize: 10, fontWeight: 700, color: feedback === "got" ? S.green : S.dim, background: feedback === "got" ? "rgba(16,185,129,.15)" : "transparent", border: "1px solid " + (feedback === "got" ? S.green : "rgba(255,255,255,.1)"), borderRadius: 6, padding: "3px 10px", cursor: "pointer" }}>✓ Got it</button>
            <button onClick={() => setFeedback("struggled")} style={{ fontSize: 10, fontWeight: 700, color: feedback === "struggled" ? S.red : S.dim, background: feedback === "struggled" ? "rgba(239,68,68,.15)" : "transparent", border: "1px solid " + (feedback === "struggled" ? S.red : "rgba(255,255,255,.1)"), borderRadius: 6, padding: "3px 10px", cursor: "pointer" }}>✗ Struggled</button>
          </>}
        </div>

        {/* Answer */}
        {revealed && q.a && (
          <div style={{ marginTop: 8, padding: "8px 10px", background: (accentColor || S.purple) + "12", border: "1px solid " + (accentColor || S.purple) + "30", borderRadius: 6, fontSize: 11, color: "#86efac", lineHeight: 1.55, fontStyle: "italic" }}>
            {q.a}
          </div>
        )}
      </div>
    </div>
  );
}
