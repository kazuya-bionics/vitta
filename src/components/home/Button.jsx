"use client";

export const Button = ({children, styles, soyPublico}) => {
  const sendMessage = () => {
    const phoneNumber = "5217205274302"; // Tu número
    const message = `Hola, me interesa más información. ${soyPublico}` ;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };

  return (
    <button
      onClick={sendMessage}
      className={styles}
    >
      {children}
    </button>
  );
}
