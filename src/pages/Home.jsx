import { useState } from "react";
import { Stack } from "@mantine/core";
import { useDocumentTitle } from "@mantine/hooks";

import reactLogo from "../assets/react.svg";
import viteLogo from "../assets/vite.svg";

function Home() {
  useDocumentTitle("Vite + React | p.s");
  const [count, setCount] = useState(0);
  return (
    <Stack gap={0} mt={"calc(50dvh - 240px)"} ta={"center"} w={"100vw"}>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </Stack>
  );
}

export default Home;
