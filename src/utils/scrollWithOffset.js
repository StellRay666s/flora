function scrollWithOffset(el) {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -75;
  window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
}

export { scrollWithOffset };
