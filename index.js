//   heart click counter

let hearts = 0;
const counter = document.getElementById("heart-counter");

document.querySelectorAll(".heart-click").forEach((btn) => {
  btn.onclick = () => {
    hearts++;
    counter.textContent = hearts;
  };
});

// Call Button

let coins = 100;

const coinSpan = document.querySelector(".coin-main");

const callButtons = document.querySelectorAll(".call-button");

const historyContainer = document.querySelector(
  ".call-history-body .space-y-2"
);

coinSpan.textContent = coins;

callButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".card-body");
    const serviceName = card.querySelector(".helpline-name").textContent;
    const serviceNumber = card.querySelector(".helpline-number").textContent;

    if (coins < 20) {
      alert("Not enough coins! You need at least 20 coins to make a call.");
      return;
    }

    coins -= 20;
    coinSpan.textContent = coins;

    alert(`Calling ${serviceName} at ${serviceNumber}`);

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
      <div><p class="text-sm text-gray-500 whitespace-nowrap">${timeString}</p></div>
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

// copy button

const copyButtons = document.querySelectorAll(".btn-outline");

const copyCount = document.querySelector("button.bg-green-600");
let count = parseInt(copyCount.textContent);

copyButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const card = button.closest(".card-body");
    const number = card.querySelector(".helpline-number").textContent;
    navigator.clipboard
      .writeText(number)
      .then(() => {
        alert(`Number ${number} copied to clipboard!`);
        count++;
        copyCount.textContent = `${count} Copy`;
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  });
});
