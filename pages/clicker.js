import React, { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";

export default function Clicker() {
  const [click, setClick] = useState(null);

  const handleClick = () => {
    setClick(click + 1);
    fetch("http://localhost:3000/api/clicks", {
      method: "post",
      headers: { "Content-Type": "application/json;charset=utf-8" },
      body: JSON.stringify({ data: "I like cookies" }),
    })
      .then((res) => res.json())
      .then(({ clicks }) => setClick(clicks));
  };

  useEffect(() => {
    fetch("http://localhost:3000/api/clicks")
      .then((response) => response.json())
      .then(({ clicks }) => setClick(clicks));
  }, []);

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>{"Let's start clicking!"}</h1>

      <p className={styles.description}>
        Click is {click}
        <button onClick={handleClick}>Click</button>
      </p>
    </main>
  );
}
