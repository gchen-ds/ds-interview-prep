import { useState, useEffect } from "react";
import SchedulePage from "./pages/SchedulePage.jsx";
import DayPage from "./pages/DayPage.jsx";
import QuizPage from "./pages/QuizPage.jsx";

// ── Add one import per day as you build them ──────────────────────────────────
import day1Data from "./data/days/day1.js";
import day2Data from "./data/days/day2.js";
import day3Data from "./data/days/day3.js";
import day4Data from "./data/days/day4.js";
import day5Data from "./data/days/day5.js";
import day6Data from "./data/days/day6.js";
import day7Data from "./data/days/day7.js";
import day8Data from "./data/days/day8.js";
import day9Data from "./data/days/day9.js";
import day10Data from "./data/days/day10.js";
import day11Data from "./data/days/day11.js";
import day12Data from "./data/days/day12.js";
import day13Data from "./data/days/day13.js";
import day14Data from "./data/days/day14.js";
import day15Data from "./data/days/day15.js";
import day16Data from "./data/days/day16.js";
import day17Data from "./data/days/day17.js";
import day18Data from "./data/days/day18.js";
import day19Data from "./data/days/day19.js";
import day20Data from "./data/days/day20.js";
import day21Data from "./data/days/day21.js";
import day22Data from "./data/days/day22.js";
import day23Data from "./data/days/day23.js";
import day24Data from "./data/days/day24.js";
import day25Data from "./data/days/day25.js";
import day26Data from "./data/days/day26.js";
import day27Data from "./data/days/day27.js";
import day28Data from "./data/days/day28.js";
import day29Data from "./data/days/day29.js";
import day30Data from "./data/days/day30.js";

const dayData = {
  1: day1Data,
  2: day2Data,
  3: day3Data,
  4: day4Data,
  5: day5Data,
  6: day6Data,
  7: day7Data,
  8: day8Data,
  9: day9Data,
  10: day10Data,
  11: day11Data,
  12: day12Data,
  13: day13Data,
  14: day14Data,
  15: day15Data,
  16: day16Data,
  17: day17Data,
  18: day18Data,
  19: day19Data,
  20: day20Data,
  21: day21Data,
  22: day22Data,
  23: day23Data,
  24: day24Data,
  25: day25Data,
  26: day26Data,
  27: day27Data,
  28: day28Data,
  29: day29Data,
  30: day30Data,
};

// ── Router ────────────────────────────────────────────────────────────────────
function getRoute() {
  const path = window.location.pathname.replace(/\/$/, "");
  const m = path.match(/\/day\/(\d+)/);
  if (m) return { type: "day", day: parseInt(m[1]) };
  return { type: "schedule" };
}

export default function App() {
  const [route, setRoute] = useState(getRoute());

  useEffect(() => {
    const onPop = () => setRoute(getRoute());
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  useEffect(() => {
    const onClick = (e) => {
      const a = e.target.closest("a");
      if (!a) return;
      const href = a.getAttribute("href");
      if (!href || href.startsWith("http") || href.startsWith("#") || a.target === "_blank") return;
      e.preventDefault();
      window.history.pushState({}, "", href);
      setRoute(getRoute());
      window.scrollTo(0, 0);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  if (route.type === "day") {
    const d = dayData[route.day] || null;
    if (d?.type === "quiz") return <QuizPage data={d} />;
    return <DayPage data={d} />;
  }
  return <SchedulePage />;
}
