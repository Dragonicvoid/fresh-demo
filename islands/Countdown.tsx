/** @jsx h */
import { h } from "preact";
import { useEffect, useState } from "preact/hooks";

const timeFmt = new Intl.RelativeTimeFormat("en-US");

// The target date is passed as a string instead of as a `Date`, because the
// props to island components need to be JSON (de)serializable.
export default function Countdown() {
  const [now, setNow] = useState(60);

  // Set up an interval to update the `now` date every second with the current
  // date as long as the component is mounted.
  useEffect(() => {
    const timer = setInterval(() => {
      setNow((now) => {
        if (now > 0) {
          clearInterval(timer);
        }
        return now - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  });

  // If the target date has passed, we stop counting down.
  if (now < 0) {
    return <span>🎉</span>;
  }

  // Otherwise, we format the remaining time using `Intl.RelativeTimeFormat` and
  // render it.
  return <span>{timeFmt.format(now, "seconds")}</span>;
}