function formatPrice(price) {
  return new Intl.NumberFormat("ru-RU").format(price);
}

export { formatPrice };
