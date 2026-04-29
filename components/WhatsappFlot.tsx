"use client";

export default function WhatsappFloat() {
  const phone = "919650982322";
  const message = "Hi, I want to know more about your services";
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  const youtubeUrl = "https://youtu.be/C5LIJXSBdIs"; // replace with your user guide video link

  return (
    <div className="fixed bottom-6 left-4 z-50 flex flex-col gap-3">
      {/* YouTube User Guide Button */}
      <a
        href={youtubeUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open user guide on YouTube"
        className="flex items-center gap-2 rounded-full bg-red-600 px-4 py-3 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-red-700"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-5 w-5"
        >
          <path d="M23.5 6.2s-.2-1.7-.9-2.4c-.9-.9-1.9-.9-2.4-1C16.8 2.5 12 2.5 12 2.5h0s-4.8 0-8.2.3c-.5.1-1.5.1-2.4 1C.7 4.5.5 6.2.5 6.2S.2 8.2.2 10.2v1.9c0 2 .3 4 .3 4s.2 1.7.9 2.4c.9.9 2.1.9 2.6 1 1.9.2 8 .3 8 .3s4.8 0 8.2-.3c.5-.1 1.5-.1 2.4-1 .7-.7.9-2.4.9-2.4s.3-2 .3-4v-1.9c0-2-.3-4-.3-4ZM9.7 14.8V7.9l6.3 3.5-6.3 3.4Z" />
        </svg>

        <span className="hidden text-sm font-semibold sm:block">
          User Guide
        </span>
      </a>

      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="flex items-center gap-2 rounded-full bg-green-500 px-4 py-3 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-green-600"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="h-5 w-5 fill-white"
        >
          <path d="M16 .4C7.3.4.4 7.3.4 16c0 2.8.7 5.4 2 7.7L.3 31.7l8.2-2.1c2.2 1.2 4.7 1.9 7.5 1.9 8.7 0 15.6-6.9 15.6-15.6S24.7.4 16 .4zm0 28.4c-2.4 0-4.7-.6-6.8-1.7l-.5-.3-4.9 1.3 1.3-4.8-.3-.5C3.6 20.7 3 18.4 3 16 3 9.4 9.4 3 16 3s13 6.4 13 13-6.4 12.8-13 12.8zm7.1-9.6c-.4-.2-2.4-1.2-2.7-1.3-.4-.2-.6-.2-.9.2-.3.4-1 1.3-1.2 1.5-.2.2-.4.3-.8.1-.4-.2-1.6-.6-3.1-2-1.1-1-2-2.3-2.2-2.7-.2-.4 0-.6.1-.8.1-.1.4-.4.6-.6.2-.2.2-.4.3-.6.1-.2 0-.4 0-.6s-.9-2.2-1.2-3c-.3-.8-.6-.7-.9-.7h-.8c-.2 0-.6.1-.9.4s-1.2 1.1-1.2 2.7 1.2 3.1 1.4 3.3c.2.2 2.3 3.6 5.6 5 3.3 1.4 3.3.9 3.9.8.6-.1 2-1 2.3-1.9.3-.9.3-1.6.2-1.8-.1-.2-.3-.3-.7-.5z" />
        </svg>

        <span className="hidden text-sm font-semibold sm:block">
          Chat with us
        </span>
      </a>
    </div>
  );
}