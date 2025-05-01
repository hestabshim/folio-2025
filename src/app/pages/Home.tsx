"use client";

import Card from "../components/card";
import Roulette from "../components/roulette";
import Header from "../components/header";
import Chicken from "../components/chicken";
import Fish from "../components/fish";
import Egg from "../components/egg";
import Mug from "../components/mug";
import Cone from "../components/cone";
import "../styles/whiteboard.css";
import "../styles/models.css";
export function Home() {
  return (
    <>
     <Header />
      <Card>
        <Roulette />
      </Card>
      <div className="layout">
      <Chicken />
      <Cone />
      <Fish />
      <Egg />
      <Mug />
      </div>
      <div className="overlay"></div>
      <canvas className="whiteboard"></canvas>
    </>
  );
}
export default Home;