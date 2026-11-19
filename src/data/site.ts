// Datos del negocio compartidos por toda la página.
// Los valores marcados con TODO deben confirmarse antes de publicar.

export const business = {
  name: "Divertido San Sebastián",
  tagline: "Enseñando desde el corazón",
  phone: "+523346803423",
  phoneLabel: "+52 33 4680 3423",
  // TODO: confirmar que el WhatsApp es el mismo número que el teléfono
  whatsapp: "523346803423",
  address: {
    street: "Francisco Villa 189, Centro",
    postalCode: "45650",
    locality: "San Sebastián el Grande",
    region: "Jal.",
    country: "MX",
  },
  geo: { lat: 20.5295297, lng: -103.4307805 },
  mapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3736.431228015443!2d-103.4307805!3d20.529529699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842f53c69411788d%3A0xff14f82f9f63600e!2sDivertido%20San%20Sebasti%C3%A1n!5e0!3m2!1ses-419!2smx!4v1789100651128!5m2!1ses-419!2smx",
  // Ficha de Google Maps (reseñas)
  mapsUrl: "https://www.google.com/maps?cid=18380588862627078158",
  // TODO: reemplazar con las URLs reales de las redes sociales
  socials: {
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
  },
  // TODO: completar para el aviso de privacidad
  privacyEmail: "contacto@ejemplo.com",
};

export const fullAddress = `${business.address.street}, ${business.address.postalCode} ${business.address.locality}, ${business.address.region}`;

export const schedule = [
  { day: "Lunes", hours: "8:30 a.m.–6:30 p.m.", opens: "08:30", closes: "18:30" },
  { day: "Martes", hours: "8:30 a.m.–6 p.m.", opens: "08:30", closes: "18:00" },
  { day: "Miércoles", hours: "8:30 a.m.–6 p.m.", opens: "08:30", closes: "18:00" },
  { day: "Jueves", hours: "8:30 a.m.–6 p.m.", opens: "08:30", closes: "18:00" },
  { day: "Viernes", hours: "8:30 a.m.–6 p.m.", opens: "08:30", closes: "18:00" },
  { day: "Sábado", hours: "Cerrado" },
  { day: "Domingo", hours: "Cerrado" },
];

export function whatsappLink(message = "¡Hola! Me gustaría recibir información sobre Divertido San Sebastián.") {
  return `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`;
}
