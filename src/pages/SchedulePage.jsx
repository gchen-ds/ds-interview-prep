import { useState } from "react";
import { catCfg, weekLabels, S } from "../config.js";
import schedule from "../data/schedule.js";
import weekReviews from "../data/weekReviews.js";
import DayCard from "../components/DayCard.jsx";
import QuestionCard from "../components/QuestionCard.jsx";

const weeks = [...new Set(schedule.map(d => d.week))];

export default function SchedulePage() {
  const [filter,      setFilter]      = useState("all");
  const [tab,         setTab]         = useState("schedule");
  const [reviewWeek,  setReviewWeek]  = useState(1);
  const [checked,     setChecked]     = useState({});
  const [revealedQ,   setRevealedQ]   = useState({});
  const [doneCount,   setDoneCount]   = useState(0); // for header display

  const filtered = filter === "all" ? schedule : schedule.filter(d => d.cat === filter);

  return (
    <div style={{ fontFamily: "Inter,system-ui,sans-serif", background: S.bg, minHeight: "100vh", color: S.text }}>

      {/* Header */}
      <div style={{ background: "rgba(255,255,255,.03)", borderBottom: "1px solid " + S.border, padding: "24px 36px 0", position: "sticky", top: 0, zIndex: 100, backdropFilter: "blur(20px)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 12, paddingBottom: 4 }}>
            <div>
              <div style={{ fontSize: 10, letterSpacing: 4, color: S.purple, textTransform: "uppercase", marginBottom: 6 }}>DS Interview Prep · 158 Curated Questions · 6 Companies</div>
              <h1 style={{ margin: 0, fontSize: 28, fontWeight: 700 }}>30-Day <span style={{ color: S.purple }}>Study Schedule</span></h1>
            </div>
            <div>
              <a href="/day/3" style={{ fontSize: 12, color: S.purple, textDecoration: "none", padding: "6px 16px", border: "1px solid rgba(167,139,250,.3)", borderRadius: 20 }}>📖 Today: Day 3</a>
            </div>
          </div>
          <div style={{ display: "flex", gap: 0, marginTop: 18 }}>
            {[["schedule","📅 Schedule"],["legend","📚 Legend"],["review","📝 Weekly Review"]].map(([id,label]) => (
              <button key={id} onClick={() => setTab(id)} style={{ padding: "8px 18px", border: "none", background: "transparent", color: tab===id ? S.purple : S.dim, borderBottom: "2px solid " + (tab===id ? S.purple : "transparent"), cursor: "pointer", fontSize: 13, fontWeight: tab===id ? 700 : 400, transition: "all .2s" }}>
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "28px 36px 48px" }}>

        {/* ── SCHEDULE TAB ── */}
        {tab === "schedule" && (
          <>
            {/* Filter pills */}
            <div style={{ display: "flex", gap: 8, marginBottom: 24, flexWrap: "wrap" }}>
              <button onClick={() => setFilter("all")} style={{ padding: "4px 14px", borderRadius: 20, border: "1px solid rgba(255,255,255,.2)", background: filter==="all" ? "rgba(167,139,250,.3)" : "transparent", color: S.text, cursor: "pointer", fontSize: 12 }}>All</button>
              {Object.entries(catCfg).map(([k,c]) => (
                <button key={k} onClick={() => setFilter(k)} style={{ padding: "4px 14px", borderRadius: 20, border: "1px solid " + c.color + "50", background: filter===k ? c.color+"30" : "transparent", color: filter===k ? c.color : S.muted, cursor: "pointer", fontSize: 12 }}>
                  {c.emoji} {c.label}
                </button>
              ))}
            </div>

            {/* Week sections */}
            {weeks.map(week => {
              const wDays = filtered.filter(d => d.week === week);
              if (!wDays.length) return null;
              return (
                <div key={week} style={{ marginBottom: 40 }}>
                  <div style={{ fontSize: 10, letterSpacing: 3, color: "#475569", textTransform: "uppercase", marginBottom: 14 }}>{weekLabels[week]}</div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))", gap: 12 }}>
                    {wDays.map(day => <DayCard key={day.day} day={day} />)}
                  </div>
                </div>
              );
            })}
          </>
        )}

        {/* ── LEGEND TAB ── */}
        {tab === "legend" && (
          <div>
            <div style={{ background: "rgba(167,139,250,.08)", border: "1px solid rgba(167,139,250,.25)", borderRadius: 14, padding: "18px 24px", marginBottom: 24 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: S.purple, letterSpacing: 2, textTransform: "uppercase", marginBottom: 14 }}>Why This Week Order — Retention Risk</div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))", gap: 12 }}>
                {[
                  ["Week 1","Stats + SQL","Low","#10b981","Procedural. Low decay once fluent."],
                  ["Week 2","SQL Advanced + Python","Low","#10b981","Pattern-based. Mechanical."],
                  ["Week 3","ML Deep Dive","Medium","#f59e0b","Derivations fade but fast to re-review."],
                  ["Week 4","A/B + Causal + Product","High ⚠️","#ef4444","Highest decay — must be fresh at interview time."],
                  ["Week 5","Rec Systems + LeetCode","Medium","#f59e0b","Light reinforcement week."],
                ].map(([w,label,risk,rc,why]) => (
                  <div key={w} style={{ background: "rgba(0,0,0,.2)", borderRadius: 10, padding: "12px 14px", borderLeft: "3px solid " + rc }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                      <div style={{ fontSize: 11, fontWeight: 700, color: S.text }}>{w}</div>
                      <span style={{ fontSize: 9, fontWeight: 700, color: rc, background: rc+"22", padding: "2px 7px", borderRadius: 8 }}>{risk}</span>
                    </div>
                    <div style={{ fontSize: 11, fontWeight: 600, color: S.muted, marginBottom: 4 }}>{label}</div>
                    <div style={{ fontSize: 11, color: S.dim, lineHeight: 1.5 }}>{why}</div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))", gap: 12 }}>
              {Object.entries(catCfg).map(([k,c]) => {
                const n  = schedule.filter(d => d.cat === k).length;
                const qn = schedule.filter(d => d.cat === k).reduce((a,d) => a + d.questions.length, 0);
                return (
                  <div key={k} style={{ background: S.card, border: "1px solid " + c.color + "40", borderRadius: 12, padding: "14px 16px" }}>
                    <div style={{ fontSize: 18 }}>{c.emoji}</div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: c.color, marginTop: 6 }}>{c.label}</div>
                    <div style={{ fontSize: 11, color: S.muted, marginTop: 4 }}>{n} day{n!==1?"s":""} · {qn} questions</div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ── REVIEW TAB ── */}
        {tab === "review" && (
          <div>
            <div style={{ display: "flex", gap: 10, marginBottom: 24, flexWrap: "wrap" }}>
              {weekReviews.map(w => (
                <button key={w.week} onClick={() => setReviewWeek(w.week)} style={{ padding: "8px 20px", borderRadius: 24, border: "2px solid " + (reviewWeek===w.week ? w.color : "rgba(255,255,255,.1)"), background: reviewWeek===w.week ? w.color+"22" : "transparent", color: reviewWeek===w.week ? w.color : S.dim, cursor: "pointer", fontSize: 13, fontWeight: reviewWeek===w.week ? 700 : 400 }}>
                  Week {w.week}
                </button>
              ))}
            </div>

            {weekReviews.filter(w => w.week === reviewWeek).map(w => (
              <div key={w.week}>
                <div style={{ marginBottom: 20 }}>
                  <div style={{ fontSize: 10, letterSpacing: 3, color: w.color, textTransform: "uppercase", marginBottom: 4 }}>{w.days}</div>
                  <div style={{ fontSize: 20, fontWeight: 700 }}>{w.title}</div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                  {/* Checklist */}
                  <div style={{ background: S.card, borderRadius: 14, border: "1px solid " + S.border, padding: "18px 20px" }}>
                    <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, color: w.color, textTransform: "uppercase", marginBottom: 14 }}>✅ Can You Do All of These?</div>
                    {w.checklistSections.map((sec, si) => (
                      <div key={si} style={{ marginBottom: 14 }}>
                        <div style={{ fontSize: 11, fontWeight: 700, color: S.muted, marginBottom: 8, paddingLeft: 4, borderLeft: "2px solid " + w.color }}>&nbsp;{sec.heading}</div>
                        {sec.items.map((item, ii) => {
                          const ck = `${w.week}-${si}-${ii}`;
                          const isChecked = checked[ck];
                          return (
                            <div key={ii} onClick={() => setChecked(p => ({...p,[ck]:!p[ck]}))} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 7, cursor: "pointer", opacity: isChecked ? 0.5 : 1 }}>
                              <div style={{ width: 16, height: 16, borderRadius: 4, border: "1.5px solid " + (isChecked ? w.color : "rgba(255,255,255,.2)"), background: isChecked ? w.color : "transparent", flexShrink: 0, marginTop: 1, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, color: "white" }}>{isChecked ? "✓" : ""}</div>
                              <div style={{ fontSize: 12, color: isChecked ? S.dim : S.muted, lineHeight: 1.5, textDecoration: isChecked ? "line-through" : "none" }}>{item}</div>
                            </div>
                          );
                        })}
                      </div>
                    ))}
                  </div>

                  {/* Derivations + Decay */}
                  <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                    <div style={{ background: S.card, borderRadius: 14, border: "1px solid " + S.border, padding: "18px 20px" }}>
                      <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, color: S.purple, textTransform: "uppercase", marginBottom: 10 }}>✍️ Write from Memory</div>
                      <p style={{ fontSize: 11, color: S.dim, marginBottom: 10, fontStyle: "italic" }}>Close your notes. Write each cold.</p>
                      {w.derivationsToWrite.map((d, i) => (
                        <div key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start", marginBottom: 8 }}>
                          <div style={{ color: S.purple, fontSize: 11, flexShrink: 0 }}>{i+1}.</div>
                          <div style={{ fontSize: 12, color: S.muted, lineHeight: 1.5 }}>{d}</div>
                        </div>
                      ))}
                    </div>
                    <div style={{ background: S.card, borderRadius: 14, border: "1px solid " + S.border, padding: "18px 20px" }}>
                      <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, color: S.red, textTransform: "uppercase", marginBottom: 12 }}>⏰ Memory Decay Reminders</div>
                      {w.decayReminders.map((d, i) => {
                        const rc = d.risk==="High" ? S.red : d.risk==="Medium" ? S.yellow : S.green;
                        return (
                          <div key={i} style={{ marginBottom: 10, padding: "10px 12px", background: "rgba(0,0,0,.2)", borderRadius: 8, borderLeft: "3px solid " + rc }}>
                            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                              <span style={{ fontSize: 11, fontWeight: 700, color: S.text }}>{d.concept}</span>
                              <span style={{ fontSize: 9, fontWeight: 700, color: rc, background: rc+"22", padding: "1px 6px", borderRadius: 6 }}>Decay: {d.risk}</span>
                            </div>
                            <div style={{ fontSize: 11, color: S.dim }}>{d.next}</div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Mock questions */}
                <div style={{ background: S.card, borderRadius: 14, border: "1px solid " + S.border, padding: "18px 20px" }}>
                  <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, color: "#06b6d4", textTransform: "uppercase", marginBottom: 6 }}>🎯 Mock Interview Questions</div>
                  <div style={{ fontSize: 11, color: S.dim, marginBottom: 14 }}>Classic DS interview questions from FAANG, DataLemur, StrataScratch.</div>
                  {w.mockQuestions.map((mq, qi) => {
                    const mk = `mock-${w.week}-${qi}`;
                    const rv = revealedQ[mk];
                    const dc = mq.difficulty==="Easy" ? S.green : mq.difficulty==="Medium" ? S.yellow : S.red;
                    return (
                      <div key={qi} style={{ marginBottom: 12, border: "1px solid rgba(255,255,255,.07)", borderLeft: "3px solid " + dc, borderRadius: 10, background: "rgba(0,0,0,.2)" }}>
                        <div style={{ padding: "12px 14px" }}>
                          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8, flexWrap: "wrap" }}>
                            <span style={{ fontSize: 9, fontWeight: 700, color: dc, background: dc+"22", padding: "2px 7px", borderRadius: 8 }}>{mq.difficulty}</span>
                            <span style={{ fontSize: 10, color: "#475569" }}>{mq.source}</span>
                          </div>
                          <div style={{ fontSize: 13, fontWeight: 500, color: S.text, lineHeight: 1.6, marginBottom: 10 }}>{mq.q}</div>
                          <button onClick={() => setRevealedQ(p => ({...p,[mk]:!p[mk]}))} style={{ fontSize: 10, color: rv ? "#06b6d4" : S.dim, background: "transparent", border: "1px solid " + (rv ? "#06b6d4" : "rgba(255,255,255,.12)"), borderRadius: 6, padding: "3px 10px", cursor: "pointer" }}>
                            {rv ? "Hide answer ▲" : "Show answer ▼"}
                          </button>
                          {rv && <div style={{ marginTop: 10, padding: "10px 12px", background: "rgba(6,182,212,.08)", border: "1px solid rgba(6,182,212,.2)", borderRadius: 8, fontSize: 12, color: "#67e8f9", lineHeight: 1.6, fontStyle: "italic" }}>{mq.a}</div>}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
