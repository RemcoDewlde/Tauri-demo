import { useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";

function App() {
  const [qr, setQr] = useState("");

  async function generateQr() {
    setQr(await invoke("qr", { name: qr }));
  }

  return (
    <div className="container">
      <h1>Welcome to Tauri!</h1>
      <form
        className="row"
        onSubmit={(e) => {
          e.preventDefault();
          generateQr();
        }}
      >
        <input
          id="greet-input"
          onChange={(e) => {
            setQr(e.currentTarget.value);
          }}
          placeholder="Enter a name..."
        />
        <button type="submit">submit</button>
      </form>
      <pre>
        {qr}
      </pre>
    </div>
  );
}

export default App;