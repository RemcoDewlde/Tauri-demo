import { useEffect, useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import { listen } from "@tauri-apps/api/event";
import "./App.css";

function App() {
  const [timeLeft, setTimeLeft] = useState<number | null>(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const unlistenTick = listen<number>("timer-tick", (event) => {
      console.log("Timer tick:", event.payload);
      setTimeLeft(event.payload);
    });

    // Listen for 'timer-finished' event
    const unlistenFinished = listen<string>("timer-finished", (event) => {
      console.log("Timer finished:", event.payload);
      setMessage(event.payload);
      setTimeLeft(null);
    });

    return () => {
      unlistenTick.then((unlisten) => unlisten());
      unlistenFinished.then((unlisten) => unlisten());
    };
  }, []);

  async function initiateTimer() {
    try {
      await invoke("initiate_timer_event");
      console.log("Timer initiation command sent to backend.");
      setMessage("");
    } catch (error) {
      console.error("Failed to invoke backend command:", error);
    }
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Tauri Timer Demo</h1>
      <button onClick={initiateTimer}>Start Timer</button>
      {timeLeft !== null && <p>Time Left: {timeLeft} seconds</p>}
      {message && <p>{message}</p>}
    </div>
  );
}

export default App;