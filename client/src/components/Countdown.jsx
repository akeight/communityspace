import { useEffect, useMemo, useState } from "react";

function getRemaining(targetMs) {
  const diff = Math.max(0, targetMs - Date.now());
  const s = Math.floor(diff / 1000);
  const days = Math.floor(s / 86400);
  const hours = Math.floor((s % 86400) / 3600);
  const minutes = Math.floor((s % 3600) / 60);
  const seconds = s % 60;
  return { diff, days, hours, minutes, seconds };
}

export default function Countdown({ isoUtc, onFinish, doneText = "Time reached" }) {
  const targetMs = useMemo(() => new Date(isoUtc).getTime(), [isoUtc]);
  const [rem, setRem] = useState(() => getRemaining(targetMs));
  const [finished, setFinished] = useState(() => rem.diff === 0);

  useEffect(() => {
    if (finished) return;
    const id = setInterval(() => {
      const next = getRemaining(targetMs);
      setRem(next);
      if (next.diff === 0) {
        setFinished(true);
        onFinish?.();
        clearInterval(id);
      }
    }, 1000);
    return () => clearInterval(id);
  }, [targetMs, finished, onFinish]);

  const pad = (n) => String(n).padStart(2, "0");
  const localTarget = new Date(targetMs);

  const running = `${pad(rem.days)}d : ${pad(rem.hours)}h : ${pad(rem.minutes)}m : ${pad(rem.seconds)}s`;
  const zeroed  = `00d : 00h : 00m : 00s`;

  return (
    <div aria-live={finished ? "off" : "polite"}>
      <strong className={`digits ${finished ? "finished" : ""}`}>
        {finished ? zeroed : running}
      </strong>
      <div className="until">
        {finished
          ? doneText
          : <></>}
      </div>
      <br/>
    </div>
  );
}

