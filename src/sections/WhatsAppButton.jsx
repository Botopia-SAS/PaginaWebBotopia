import React from "react";

const WhatsAppButton = () => {
  const whatsappLink = "https://wa.me/573228726267"; // Tu número de WhatsApp en formato internacional

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition duration-300 animate-bounce z-50"
      aria-label="Chat on WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-7 h-7"
      >
        <path d="M12 2C6.477 2 2 6.477 2 12c0 2.116.666 4.075 1.8 5.695L2 22l4.468-1.784A9.953 9.953 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm5.534 14.065c-.228.643-1.331 1.24-1.84 1.318-.471.073-1.06.104-1.7-.175a12.303 12.303 0 01-2.763-1.65 11.975 11.975 0 01-2.253-2.07c-.559-.678-1.006-1.433-1.302-2.145-.296-.71-.025-1.09.09-1.223.228-.268.468-.54.696-.81.223-.265.456-.324.686-.324.169 0 .336.001.482.01.155.01.365-.06.564.433.214.524.726 1.794.794 1.926.07.132.07.287.006.419a2.352 2.352 0 01-.375.5c-.191.208-.372.367-.562.572-.1.11-.206.228-.3.342-.097.119-.197.248-.06.49.133.235.597.975 1.277 1.581.883.768 1.631 1.007 1.866 1.118.235.111.372.1.502-.056.133-.157.572-.66.727-.884.152-.222.305-.179.514-.107.208.072 1.312.624 1.54.735.227.112.38.168.438.26.057.092.057.54-.171 1.183z" />
      </svg>
    </a>
  );
};

export default WhatsAppButton;
