//   heart click counter
  
  let hearts = 0;
  const counter = document.getElementById("heart-counter");

  document.querySelectorAll(".heart-click").forEach(btn => {
    btn.onclick = () => {
      hearts++;
      counter.textContent = hearts;
    };
  });
    


    
// Call Button

let coins = 100;

// Coin counter element
const coinSpan = document.querySelector(".coin-main");

// All call buttons (from multiple cards)
const callButtons = document.querySelectorAll(".call-button");

// Call history container
const historyContainer = document.querySelector(".call-history-body .space-y-2");

// Update coins initially
coinSpan.textContent = coins;

callButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Find THIS card’s info
    const card = btn.closest(".card-body");
    const serviceName = card.querySelector(".helpline-name").textContent;
    const serviceNumber = card.querySelector(".helpline-number").textContent;

    // Check coins
    if (coins < 20) {
      alert("Not enough coins! You need at least 20 coins to make a call.");
      return;
    }

    // Deduct coins
    coins -= 20;
    coinSpan.textContent = coins;

    // Show alert
    alert(`Calling ${serviceName} at ${serviceNumber}`);

    // Add to call history
    const now = new Date();
    const timeString = now.toLocaleTimeString();

    const historyItem = document.createElement("div");
    historyItem.className =
      "flex justify-between items-center bg-gray-50 rounded-lg p-3 shadow-sm ";

    historyItem.innerHTML = `
      <div>
        <p class="font-medium">${serviceName}</p>
        <p class="text-sm text-gray-500">${serviceNumber}</p>
      </div>
      <div><p class="text-sm text-gray-500">${timeString}</p></div>
    `;

    historyContainer.prepend(historyItem);
  });
});

// Clear history button
const clearBtn = document.querySelector(".clear-history");

clearBtn.addEventListener("click", () => {
  historyContainer.innerHTML = "";
  alert("Call history cleared!");
});
