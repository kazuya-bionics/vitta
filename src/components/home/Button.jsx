"use client";

export const Button = ({ children, styles, soyPublico }) => {
  const sendMessage = () => {
    const phoneNumber = "5215611100347";

    // Detectar si el usuario está en móvil
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    // Mensaje según dispositivo y condición soyPublico
    let message = "";

    if (isMobile) {
      // Móvil → con emojis
      message = soyPublico
        ? "👋 ¡Hola! Soy servidor público y me gustaría recibir más información sobre las opciones que ofrecen para nosotros. 🙌💼✨"
        : "👋 ¡Hola! No soy servidor público, pero me encantaría conocer las opciones que tienen disponibles. 🌟📩";
    } else {
      // Escritorio → texto seguro sin emojis
      message = soyPublico
        ? "Hola! Soy servidor público y me gustaría recibir más información sobre las opciones que ofrecen para nosotros."
        : "Hola! No soy servidor público, pero me encantaría conocer las opciones que tienen disponibles.";
    }

    // Construcción de la URL
    const urlApiWhats = "https://api.whatsapp.com/send/?phone=" + phoneNumber + "&text=" + encodeURIComponent(message);

    // Abrir WhatsApp
    window.open(urlApiWhats, "_blank");
  };

  return (
    <button onClick={sendMessage} className={styles}>
      {children}
    </button>
  );
};
