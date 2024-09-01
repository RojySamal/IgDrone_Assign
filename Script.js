const indicators = document.querySelectorAll(".indicator");
const entries = document.querySelectorAll(".timeline-entry");

indicators.forEach((indicator) => {
  indicator.addEventListener("click", () => {
    const targetYear = indicator.getAttribute("data-target");

    indicators.forEach((ind) => ind.classList.remove("active"));
    entries.forEach((entry) => entry.classList.remove("active"));

    indicator.classList.add("active");
    document
      .querySelector(`.timeline-entry[data-year="${targetYear}"]`)
      .classList.add("active");
  });
});
