// wa.me expects the number without the '+' sign
export const whatsAppPhoneNumber = "971565204977";
export const whatsappUrl = (message = "Hello! I'd like to get more information.") =>
  `https://wa.me/${whatsAppPhoneNumber}?text=${encodeURIComponent(message)}`;

export const phoneNumberDisplay = "+971 56 520 4977";
export const phoneLink = "tel:+971565204977";
