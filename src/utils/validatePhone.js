/**
 * Validate phone string
 *
 * @param {String} phone
 * @returns {Boolean}
 */
function validatePhone(phone) {
  if (phone && phone !== "" && phone.length > 15 && phone[15] !== "" && phone[15] !== "_") {
    return true;
  }
  return false;
}

export { validatePhone };
