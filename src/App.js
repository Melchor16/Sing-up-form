import Title from "./components/Title";
import MainForm from "./components/MainForm";
import Thanks from "./components/Thanks";
import { useState } from "react";

export default function App() {
  const [proceed, setProceed] = useState(false);

  return (
    <div className="main-app">
      {proceed ? (
        <Thanks setProceed={setProceed} />
      ) : (
        <>
          <Title />
          <MainForm proceed={proceed} setProceed={setProceed} />
        </>
      )}
    </div>
  );
}
