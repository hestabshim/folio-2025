"use client";

import Card from "./components/card";
import Roulette from "./components/roulette";
import Header from "./components/header";
import "./styles/whiteboard.css";


export default function Home() {
  return (
    <>
     <Header />
      <Card>
        <Roulette />
      </Card>
      <div className="overlay"></div>
      <canvas className="whiteboard"></canvas>
    </>
  );
}
