const rain = document.querySelector(".money-rain");
const moneyFeed = document.querySelector("[data-money-feed]");
const moneyFeedStatus = document.querySelector("[data-money-feed-status]");

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

if (moneyFeed) {
  const stackImages = [
    "https://images.pexels.com/photos/14655997/pexels-photo-14655997.jpeg?auto=compress&cs=tinysrgb&w=900",
    "https://images.pexels.com/photos/6266770/pexels-photo-6266770.jpeg?auto=compress&cs=tinysrgb&w=900",
    "https://images.pexels.com/photos/13112009/pexels-photo-13112009.jpeg?auto=compress&cs=tinysrgb&w=900",
    "https://images.pexels.com/photos/6694859/pexels-photo-6694859.jpeg?auto=compress&cs=tinysrgb&w=900"
  ];

  const stackTitles = [
    "Tier-One Reserve Cascade",
    "Briefcase Event Horizon",
    "Founder Liquidity Portrait",
    "Desk-Side Stack Expansion",
    "Cross-Desk Cash Formation",
    "Prime Stack Overflow"
  ];

  const stackDescriptions = [
    "Additional bundles surfaced from the lower vault after the committee requested a more convincing show of force.",
    "Portable abundance package prepared for a highly unnecessary but visually effective capital arrival.",
    "A commemorative wall of liquidity assembled for morale, optics, and total desk intimidation.",
    "High-conviction cash formation observed adjacent to screens, forecasts, and expensive posture."
  ];

  let stackBatch = 0;
  let totalCards = 0;
  let isAppending = false;

  const appendMoneyCards = (count = 6) => {
    const fragment = document.createDocumentFragment();

    for (let index = 0; index < count; index += 1) {
      const itemNumber = totalCards + index + 1;
      const image = stackImages[(stackBatch + index) % stackImages.length];
      const title = stackTitles[(stackBatch + index) % stackTitles.length];
      const description = stackDescriptions[(stackBatch + index) % stackDescriptions.length];

      const card = document.createElement("article");
      card.className = "money-card";
      card.innerHTML = `
        <div class="money-card-media">
          <img src="${image}" alt="Over-the-top stack of money asset ${itemNumber}">
        </div>
        <div class="money-card-body">
          <span>Reserve ${itemNumber}</span>
          <strong>${title}</strong>
          <p>${description}</p>
        </div>
      `;

      fragment.appendChild(card);
    }

    moneyFeed.appendChild(fragment);
    stackBatch += 1;
    totalCards += count;

    if (moneyFeedStatus) {
      moneyFeedStatus.textContent = `Reserve ledger expanded to ${totalCards} visible stack formations.`;
    }
  };

  const onScroll = () => {
    if (isAppending) {
      return;
    }

    const remaining = document.documentElement.scrollHeight - window.innerHeight - window.scrollY;

    if (remaining < 900) {
      isAppending = true;
      appendMoneyCards();
      isAppending = false;
    }
  };

  appendMoneyCards(9);
  window.addEventListener("scroll", onScroll, { passive: true });
}
