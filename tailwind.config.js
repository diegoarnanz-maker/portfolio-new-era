/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        background: {
          base: "#1C1C1E", // Negro técnico profundo
          card: "#2B2B2E", // Paneles y contenedores
          input: "#323238", // Campos de formulario
          overlay: "#000000cc", // Fondos semitransparentes
        },
        text: {
          base: "#F1F1F1", // Texto principal (blanco roto)
          muted: "#A1A1AA", // Texto secundario (suave pero legible)
          error: "#FF5F5F", // Mensajes de error (rojo claro)
          neon: "#00FFF7", // Acento especial (modo consola)
        },
        action: {
          default: "#00B3B3", // Botón y enlaces principales (cian brillante)
          hover: "#00DCDC", // Hover más claro
          disabled: "#55575E", // Estado desactivado
          focus: "#00FFF7", // Borde o foco (igual que neon)
        },
        border: {
          base: "#3F3F46", // Bordes suaves
          focus: "#00FFF7", // Borde en focus
        },
      },
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
      },
      fontSize: {
        base: [
          "1rem",
          {
            lineHeight: "1.5rem",
            letterSpacing: "0.002rem",
            fontWeight: "500",
          },
        ],
        bodyS: [
          "0.875rem",
          {
            lineHeight: "1.25rem",
            letterSpacing: "0.00175rem",
            fontWeight: "500",
          },
        ],
        bodyXS: [
          "0.75rem",
          {
            lineHeight: "1rem",
            letterSpacing: "0.00375rem",
            fontWeight: "500",
          },
        ],
        actionBase: [
          "1rem",
          {
            lineHeight: "1.5rem",
            letterSpacing: "0.002rem",
            fontWeight: "600",
          },
        ],
        actionS: [
          "0.875rem",
          {
            lineHeight: "1.25rem",
            letterSpacing: "0.00175rem",
            fontWeight: "600",
          },
        ],
        actionXS: [
          "0.75rem",
          {
            lineHeight: "1rem",
            letterSpacing: "0.00375rem",
            fontWeight: "600",
          },
        ],
        h2: [
          "1.75rem",
          {
            lineHeight: "1.5rem",
            fontWeight: "600",
            fontFamily: "Manrope",
          },
        ],
        h3: [
          "1.625rem",
          {
            lineHeight: "3.0625rem",
            fontWeight: "600",
          },
        ],
        h4: [
          "1.375rem",
          {
            lineHeight: "2.5625rem",
            fontWeight: "600",
          },
        ],
        h5: [
          "1.25rem",
          {
            lineHeight: "2.125rem",
            fontWeight: "600",
          },
        ],
        h6: [
          "1.125rem",
          {
            lineHeight: "1.75rem",
            fontWeight: "600",
          },
        ],
      },
      backgroundImage: {
        "main-bg": "url(/assets/img/main-bg.svg)",
      },
    },
  },
  plugins: [],
};
