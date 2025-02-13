import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Greet } from "@bindings/App";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>
      <Home></Home>
    </div>
  );
}

function Home() {
  const [resultText, setResultText] = useState("Please enter your name below 👇");
  const [name, setName] = useState("");
  const updateResultText = (result: string) => {
    setResultText(result);
  };

  function greet() {
    void Greet(name).then(updateResultText);
  }

  return (
    <div>
      <div id="result" className="result">
        {resultText}
      </div>
      <div id="input" className="input-box">
        <Input
          onChange={(e) => {
            setName(e.target.value);
          }}
          autoComplete="off"
          name="input"
          type="text"
        ></Input>
        <Button onClick={greet}>Greet</Button>
      </div>
    </div>
  );
}
