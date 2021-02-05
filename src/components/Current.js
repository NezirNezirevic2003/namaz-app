import React, { useState, useEffect } from "react";
import "../components/Current.css";
import "../components/Namaz.css";

export default function Current() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  if (date) {
    return (
      <main>
        <div className="current">
          <p className="current__time">
            {" "}
            Vrijeme : {date.toLocaleTimeString()}
          </p>
        </div>
      </main>
    );
  }

  return (
    <div>
      <h1>hello</h1>
    </div>
  );
}
