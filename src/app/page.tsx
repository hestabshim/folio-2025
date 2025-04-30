"use client";

import Card from "./components/card";
import Roulette from "./components/roulette";
import Header from "./components/header";
import "./styles/whiteboard.css";
import Chicken from "./components/chicken";

export default function Home() {
  return (
    <>
     <Header />
      <Card>
        <Roulette />
      </Card>
      <Chicken />
      <div className="overlay"></div>
      <canvas className="whiteboard"></canvas>
    </>
  );
}
