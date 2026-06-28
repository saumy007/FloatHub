//content.js

console.log("CONTENT SCRIPT STARTED");

if (window.__floatingBrowserInjected) {
  console.log("Ball already injected");
} else {
  window.__floatingBrowserInjected = true;

  const appendBall = () => {
    const container = document.body || document.documentElement;
    if (!container) {
      return;
    }

    const ball = document.createElement("div");
        ball.addEventListener("click", () => {
    chrome.runtime.sendMessage({
        action: "openIncognito"
    });
});


    ball.id = "floating-ball";
    ball.textContent = "😀";
    ball.setAttribute("aria-label", "Floating browser button");
    
    ball.style.position = "fixed";
    ball.style.bottom = "24px";
    ball.style.right = "24px";
    ball.style.width = "56px";
    ball.style.height = "56px";
    ball.style.background = "#ff4d4f";
    ball.style.color = "white";
    ball.style.border = "2px solid white";
    ball.style.borderRadius = "50%";
    ball.style.zIndex = "2147483647";
    ball.style.display = "flex";
    ball.style.alignItems = "center";
    ball.style.justifyContent = "center";
    ball.style.cursor = "pointer";
    ball.style.fontSize = "28px";
    ball.style.boxShadow = "0 8px 20px rgba(0,0,0,0.25)";
    ball.style.userSelect = "none";
    ball.style.pointerEvents = "auto";

    container.appendChild(ball);
    console.log("Ball appended");
  };
  

  if (document.readyState === "loading") {
    
    document.addEventListener("DOMContentLoaded", appendBall, { once: true });

    window.addEventListener("load", appendBall, { once: true });
  } else {
    appendBall();
  }
}