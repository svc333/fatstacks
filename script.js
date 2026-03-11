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
  const reservePresets = [
    {
      image: "https://images.pexels.com/photos/5831522/pexels-photo-5831522.jpeg?auto=compress&cs=tinysrgb&w=900",
      alt: "Trader monitoring stock charts on multiple screens",
      label: "Bloomberg Goblin",
      title: "Gamma Squeeze Command Center",
      description: "Three glowing monitors, zero humility, and the firm belief that every candle is a personal prophecy."
    },
    {
      image: "https://images.pexels.com/photos/6266770/pexels-photo-6266770.jpeg?auto=compress&cs=tinysrgb&w=900",
      alt: "Open briefcase filled with bundled cash",
      label: "Travel Desk",
      title: "Briefcase Event Horizon",
      description: "Portable abundance package prepared for a highly unnecessary but visually effective capital arrival."
    },
    {
      image: "https://images.pexels.com/photos/13112009/pexels-photo-13112009.jpeg?auto=compress&cs=tinysrgb&w=900",
      alt: "Man posing with stacks of cash in front of a wall of money",
      label: "Founder Portrait",
      title: "Chairman of Visible Liquidity",
      description: "A commemorative wall of cash assembled for morale, optics, and total desk intimidation."
    },
    {
      image: "https://images.pexels.com/photos/14655997/pexels-photo-14655997.jpeg?auto=compress&cs=tinysrgb&w=900",
      alt: "Massive pile of stacked bundles of money",
      label: "Reserve Complex",
      title: "Tier-One Stack Avalanche",
      description: "Additional bundles surfaced from the lower vault after the committee requested a less subtle reserve display."
    }
  ];

  let batchNumber = 0;
  let totalCards = 0;
  let isAppending = false;

  const appendMoneyCards = (count = 6) => {
    const fragment = document.createDocumentFragment();

    for (let index = 0; index < count; index += 1) {
      const itemNumber = totalCards + index + 1;
      const preset = reservePresets[(batchNumber + index) % reservePresets.length];

      const card = document.createElement("article");
      card.className = "money-card";
      card.innerHTML = `
        <div class="money-card-media">
          <img src="${preset.image}" alt="${preset.alt}">
        </div>
        <div class="money-card-body">
          <span>${preset.label} ${itemNumber}</span>
          <strong>${preset.title}</strong>
          <p>${preset.description}</p>
        </div>
      `;

      fragment.appendChild(card);
    }

    moneyFeed.appendChild(fragment);
    batchNumber += 1;
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
