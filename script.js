const rain = document.querySelector(".money-rain");

if (rain) {
  const billCount = window.innerWidth < 700 ? 14 : 24;

  for (let index = 0; index < billCount; index += 1) {
    const bill = document.createElement("div");
    bill.className = "bill";

    const left = Math.random() * 100;
    const delay = Math.random() * -12;
    const duration = 9 + Math.random() * 8;
    const drift = `${Math.random() * 180 - 90}px`;
    const spin = `${Math.random() * 220 - 110}deg`;
    const scale = 0.72 + Math.random() * 0.45;

    bill.style.left = `${left}%`;
    bill.style.animationDelay = `${delay}s`;
    bill.style.animationDuration = `${duration}s`;
    bill.style.setProperty("--drift", drift);
    bill.style.setProperty("--spin", spin);
    bill.style.setProperty("--scale", scale);

    rain.appendChild(bill);
  }
}