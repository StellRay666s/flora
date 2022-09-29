function scrollWithOffset(el, px) {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -px;
  window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
}

export { scrollWithOffset };
