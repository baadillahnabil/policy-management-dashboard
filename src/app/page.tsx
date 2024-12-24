"use client";

import { Button } from "antd";

const Home = () => (
  <div className="App">
    <Button
      type="primary"
      className="text-5xl bg-red-800"
      onClick={() => {
        console.log("test");
      }}
    >
      Button
    </Button>
  </div>
);

export default Home;
