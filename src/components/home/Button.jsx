"use client";

export const Button = ({ children, styles, soyPublico, mensaje }) => {
  const sendMessage = () => {
    const phoneNumber = "5215611100347";

    // Mensaje final combinando soyPublico + mensaje personalizado
    const finalMessage = `Hola! ${
      soyPublico
        ? "Soy servidor público y me gustaría recibir más información sobre sus opciones."
        : "No soy servidor público, pero me gustaría conocer las opciones disponibles."
    } ${mensaje}`;

    const urlApiWhats =
      "https://api.whatsapp.com/send/?phone=" +
      phoneNumber +
      "&text=" +
      encodeURIComponent(finalMessage);

    window.open(urlApiWhats, "_blank");
  };

  return (
    <button onClick={sendMessage} className={styles}>
      {children}
    </button>
  );
};
