const rain = document.querySelector(".money-rain");

if (rain) {
  const billCount = window.innerWidth < 700 ? 20 : 38;

  for (let index = 0; index < billCount; index += 1) {
    const bill = document.createElement("div");
    const billCenter = document.createElement("div");

    bill.className = "bill";
    billCenter.className = "bill-center";
    bill.appendChild(billCenter);

    const left = Math.random() * 100;
    const delay = Math.random() * -14;
    const duration = 7 + Math.random() * 7;
    const drift = `${Math.random() * 220 - 110}px`;
    const spin = `${Math.random() * 320 - 160}deg`;
    const scale = 0.68 + Math.random() * 0.58;
    const opacity = 0.58 + Math.random() * 0.32;
    const blur = Math.random() < 0.18 ? 1.2 : 0;

    bill.style.left = `${left}%`;
    bill.style.animationDelay = `${delay}s`;
    bill.style.animationDuration = `${duration}s`;
    bill.style.setProperty("--drift", drift);
    bill.style.setProperty("--spin", spin);
    bill.style.setProperty("--scale", scale);
    bill.style.opacity = opacity;
    bill.style.filter = `blur(${blur}px)`;

    rain.appendChild(bill);
  }
}
