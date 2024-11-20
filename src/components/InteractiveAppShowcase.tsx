"use client"
import React, { useState } from "react";
import styles from "../../css/InteractiveAppShowcase.module.css";

interface App {
  id: string;
  name: string;
  description: string;
  demo: string;
}

const InteractiveAppShowcase = () => {
  const [activeApp, setActiveApp] = useState<App | null>(null);

  const apps: App[] = [
    {
      id: "weatherApp",
      name: "Weather App",
      description: "Check the latest weather updates.",
      demo: "🌤️ Sunny, 25°C",
    },
    {
      id: "todoApp",
      name: "To-Do App",
      description: "Organize your tasks effectively.",
      demo: "✔️ Task 1: Build portfolio",
    },
    {
      id: "musicApp",
      name: "Music App",
      description: "Stream your favorite tunes.",
      demo: "🎵 Playing: 'Lofi Beats'",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.phone}>
        <div className={styles.screen}>
          {activeApp ? (
            <div className={styles.appDemo}>
              <h3>{activeApp.name}</h3>
              <p>{activeApp.demo}</p>
              <button onClick={() => setActiveApp(null)}>Go Back</button>
            </div>
          ) : (
            <div className={styles.appList}>
              {apps.map((app) => (
                <div
                  key={app.id}
                  className={styles.appIcon}
                  onClick={() => setActiveApp(app)}
                >
                  <div className={styles.icon}>{app.name[0]}</div>
                  <p>{app.name}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InteractiveAppShowcase;