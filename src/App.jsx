import { useState, useEffect } from "react";
import SchedulePage from "./pages/SchedulePage.jsx";
import DayPage from "./pages/DayPage.jsx";

// ── Add one import per day as you build them ──────────────────────────────────
import day1Data from "./data/days/day1.js";
import day2Data from "./data/days/day2.js";
import day3Data from "./data/days/day3.js";
import day4Data from "./data/days/day4.js";
import day5Data from "./data/days/day5.js";
import day6Data from "./data/days/day6.js";

const dayData = {
  1: day1Data,
  2: day2Data,
  3: day3Data,
  4: day4Data,
  5: day5Data,
  6: day6Data,
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

  if (route.type === "day") return <DayPage data={dayData[route.day] || null} />;
  return <SchedulePage />;
}
