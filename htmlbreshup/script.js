// script.js

document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;
    const numFlakes = 100; // Number of snowflakes
  
    for (let i = 0; i < numFlakes; i++) {
      const snowflake = document.createElement("div");
      snowflake.className = "snowflake";
      snowflake.style.left = `${Math.random() * 100}vw`; // Random horizontal position
      snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`; // Random fall duration
      snowflake.style.opacity = Math.random();
      snowflake.style.transform = `scale(${Math.random()})`;
      body.appendChild(snowflake);
    }
  });
  