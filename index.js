  let count = 0;
  const counter = document.getElementById("heart-counter");

  document.querySelectorAll(".heart-click").forEach(btn => {
    btn.onclick = () => {
      count++;
      counter.textContent = count;
    };
  });
    
    