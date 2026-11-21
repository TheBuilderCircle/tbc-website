"use client";

import { useSyncExternalStore } from "react";
import { daysUntil, FLAGSHIP_EVENT_DATE } from "@/lib/countdown";

function subscribe(callback: () => void) {
  const id = setInterval(callback, 60 * 60 * 1000);
  return () => clearInterval(id);
}

function getSnapshot() {
  return daysUntil(FLAGSHIP_EVENT_DATE);
}

// Server and the pre-hydration client render both return null (nothing
// rendered) so there is never a text mismatch  the real number is filled in
// only once the client has mounted and can subscribe to live updates.
function getServerSnapshot() {
  return null;
}

type CountdownProps = {
  variant: "banner" | "big";
};

export default function Countdown({ variant }: CountdownProps) {
  const days = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  if (days === null) return null;

  if (variant === "big") {
    return (
      <div className="num" style={{ fontSize: "clamp(72px, 9vw, 128px)", color: "var(--green)" }}>
        {days}
      </div>
    );
  }

  return (
    <span style={{ fontWeight: 700, fontVariantNumeric: "tabular-nums" }}>
      {days} days to go
    </span>
  );
}
