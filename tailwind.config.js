/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  darkMode: "class", // Habilita el modo oscuro con clase
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        tablet: "1.5rem",
        laptop: "2rem",
        desktop: "2rem",
      },
    },
    screens: {
      mobile: "480px",
      tablet: "768px",
      laptop: "1024px",
      desktop: "1440px",
    },
    extend: {
      colors: {
        // Colores de fondo - modo oscuro
        "background-base": "#0A0A0B", // Negro más profundo y elegante
        "background-card": "#1A1A1D", // Paneles con mejor contraste
        "background-input": "#2A2A2F", // Campos de formulario más elegantes
        "background-overlay": "#000000E6", // Overlay más sutil
        "background-blur": "#0A0A0BCC", // Para efectos de blur en navbar

        // Colores de fondo - modo claro - Paleta "Future Dawn" 2025
        "background-light": "#EEF4FA", // Azul muy claro en lugar de blanco
        "background-light-card": "#F9FBFD", // Azul grisáceo muy tenue para contraste
        "background-light-input": "#E3EBF3", // Azul gris claro para inputs
        "background-light-overlay": "#EEF4FA95", // Overlay sutil con tinte azul
        "background-light-blur": "#EEF4FA99", // Blur elegante y azulado
        "background-light-secondary": "#DCE5EF", // Fondo secundario más fresco
        "background-light-accent": "#C8D8E8", // Acento sutil azul grisáceo

        // Colores de texto - modo oscuro
        "text-base": "#F8F8F8", // Texto principal más brillante
        "text-muted": "#9CA3AF", // Texto secundario más legible
        "text-error": "#EF4444", // Rojo más moderno
        "text-neon": "#06FFA5", // Verde neón más vibrante
        "text-accent": "#3B82F6", // Azul para acentos

        // Colores de texto - modo claro - Inspirados en "Future Dusk"
        "text-light": "#0A0A0B", // Negro elegante ya presente como fondo en modo oscuro
        "text-light-muted": "#1A1A1D", // Contraste suave y legible
        "text-light-subtle": "#2A2A2F",
        "text-light-error": "#DC2626", // Rojo clásico para errores
        "text-light-neon": "#059669", // Verde esmeralda tecnológico
        "text-light-accent": "#3B82F6", // Azul vibrante para acentos

        // Colores de acción - modo oscuro
        "action-default": "#06B6D4", // Cian más moderno
        "action-hover": "#0891B2", // Hover más elegante
        "action-disabled": "#4B5563", // Estado desactivado mejorado
        "action-focus": "#06FFA5", // Verde neón para focus
        "action-gradient-from": "#06B6D4",
        "action-gradient-to": "#3B82F6",

        // Colores de acción - modo claro - Inspirados en "Retro Blue" y "Celestial Yellow"
        "action-light-default": "#71ADBA", // Retro Blue - nostálgico pero fresco
        "action-light-hover": "#5A9AAA", // Retro Blue más profundo
        "action-light-disabled": "#9CA3AF", // Gris neutro elegante
        "action-light-focus": "#EDEAB1", // Celestial Yellow para focus - optimista
        "action-light-gradient-from": "#71ADBA",
        "action-light-gradient-to": "#EDEAB1",

        // Colores de borde - modo oscuro
        "border-base": "#374151", // Bordes más suaves
        "border-focus": "#06FFA5", // Borde en focus
        "border-card": "#2D2D30", // Bordes para cards

        // Colores de borde - modo claro - Sutiles y modernos
        "border-light-base": "#E5E7EB", // Gris muy sutil
        "border-light-focus": "#71ADBA", // Retro Blue para focus
        "border-light-card": "#F3F4F6", // Casi imperceptible
        "border-light-strong": "#D1D5DB", // Más visible cuando se necesite

        // Colores de acento
        "accent-yellow": "#FCD34D", // Amarillo suave para highlights
        "accent-blue": "#60A5FA", // Azul suave
        "accent-purple": "#A78BFA", // Púrpura elegante

        // Acentos para modo claro - Paleta "Future Dawn" 2025
        "accent-light-yellow": "#EDEAB1", // Celestial Yellow - optimista y cálido
        "accent-light-blue": "#71ADBA", // Retro Blue - nostálgico y versátil
        "accent-light-purple": "#4C5578", // Future Dusk - sofisticado y profundo

        // Colores espaciales adicionales
        "accent-cosmic": "#6366F1", // Índigo cósmico
        "accent-nebula": "#EC4899", // Rosa nebulosa
        "accent-stellar": "#F97316", // Naranja estelar
        "accent-quantum": "#06B6D4", // Cian cuántico

        // Colores inspirados en el espacio
        "space-deep-void": "#0C0C0D", // Vacío profundo
        "space-star-field": "#1E293B", // Campo estelar
        "space-nebula-pink": "#EC4899", // Rosa nebulosa
        "space-nebula-blue": "#3B82F6", // Azul nebulosa
        "space-cosmic-purple": "#8B5CF6", // Púrpura cósmico
        "space-solar-orange": "#F97316", // Naranja solar
        "space-quantum-cyan": "#06B6D4", // Cian cuántico
        "space-plasma-green": "#10B981", // Verde plasma

        // Colores tecnológicos
        "tech-circuit-green": "#22C55E", // Verde circuito
        "tech-hologram-blue": "#3B82F6", // Azul holograma
        "tech-laser-red": "#EF4444", // Rojo láser
        "tech-energy-yellow": "#EAB308", // Amarillo energía
        "tech-matrix-cyan": "#06B6D4", // Cian matrix
        "tech-neon-purple": "#A855F7", // Púrpura neón
      },
      fontFamily: {
        sans: ["Inter", "Manrope", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },
      fontSize: {
        base: [
          "1rem",
          {
            lineHeight: "1.6",
            letterSpacing: "0.01em",
            fontWeight: "400",
          },
        ],
        bodyS: [
          "0.875rem",
          {
            lineHeight: "1.5",
            letterSpacing: "0.01em",
            fontWeight: "400",
          },
        ],
        bodyXS: [
          "0.75rem",
          {
            lineHeight: "1.4",
            letterSpacing: "0.02em",
            fontWeight: "400",
          },
        ],
        actionBase: [
          "1rem",
          {
            lineHeight: "1.5",
            letterSpacing: "0.01em",
            fontWeight: "600",
          },
        ],
        actionS: [
          "0.875rem",
          {
            lineHeight: "1.4",
            letterSpacing: "0.01em",
            fontWeight: "600",
          },
        ],
        actionXS: [
          "0.75rem",
          {
            lineHeight: "1.3",
            letterSpacing: "0.02em",
            fontWeight: "600",
          },
        ],
        h1: [
          "3.5rem",
          {
            lineHeight: "1.1",
            fontWeight: "800",
            letterSpacing: "-0.02em",
          },
        ],
        h2: [
          "2.5rem",
          {
            lineHeight: "1.2",
            fontWeight: "700",
            letterSpacing: "-0.01em",
          },
        ],
        h3: [
          "2rem",
          {
            lineHeight: "1.3",
            fontWeight: "600",
            letterSpacing: "-0.01em",
          },
        ],
        h4: [
          "1.5rem",
          {
            lineHeight: "1.4",
            fontWeight: "600",
            letterSpacing: "0",
          },
        ],
        h5: [
          "1.25rem",
          {
            lineHeight: "1.5",
            fontWeight: "600",
            letterSpacing: "0",
          },
        ],
        h6: [
          "1.125rem",
          {
            lineHeight: "1.5",
            fontWeight: "600",
            letterSpacing: "0",
          },
        ],
      },
      spacing: {
        18: "4.5rem",
        88: "22rem",
        128: "32rem",
      },
      backdropBlur: {
        xs: "2px",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        gradient: "gradient 3s ease infinite",
        "spin-orbital": "spin-orbital 20s linear infinite",
        "spin-orbital-reverse": "spin-orbital-reverse 15s linear infinite",
        "spin-orbital-slow": "spin-orbital-slow 25s linear infinite",
        "scan-line": "scan-line 3s ease-in-out infinite",
        "glitch-1": "glitch-1 2s ease-in-out infinite",
        "glitch-2": "glitch-2 2.5s ease-in-out infinite",
        "glitch-3": "glitch-3 1.8s ease-in-out infinite",
        "orbit-1": "orbit-1 8s linear infinite",
        "orbit-2": "orbit-2 12s linear infinite reverse",
        "orbit-3": "orbit-3 10s linear infinite",
        "orbit-4": "orbit-4 14s linear infinite reverse",
        "energy-pulse-1": "energy-pulse-1 2s ease-out infinite",
        "energy-pulse-2": "energy-pulse-2 2.5s ease-out infinite",
        "energy-pulse-3": "energy-pulse-3 3s ease-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "spin-orbital": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "spin-orbital-reverse": {
          "0%": { transform: "rotate(360deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        "spin-orbital-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "scan-line": {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "50%": { opacity: "1" },
          "100%": { transform: "translateY(100%)", opacity: "0" },
        },
        "glitch-1": {
          "0%, 100%": { transform: "translateX(0)", opacity: "0.7" },
          "10%": { transform: "translateX(-2px)", opacity: "1" },
          "20%": { transform: "translateX(2px)", opacity: "0.8" },
          "30%": { transform: "translateX(0)", opacity: "0.7" },
        },
        "glitch-2": {
          "0%, 100%": { transform: "translateX(0)", opacity: "0.5" },
          "15%": { transform: "translateX(3px)", opacity: "1" },
          "25%": { transform: "translateX(-1px)", opacity: "0.9" },
          "35%": { transform: "translateX(0)", opacity: "0.5" },
        },
        "glitch-3": {
          "0%, 100%": { transform: "translateX(0)", opacity: "0.6" },
          "12%": { transform: "translateX(-1px)", opacity: "1" },
          "22%": { transform: "translateX(1px)", opacity: "0.8" },
          "32%": { transform: "translateX(0)", opacity: "0.6" },
        },
        "orbit-1": {
          "0%": { transform: "rotate(0deg) translateX(100px) rotate(0deg)" },
          "100%": {
            transform: "rotate(360deg) translateX(100px) rotate(-360deg)",
          },
        },
        "orbit-2": {
          "0%": { transform: "rotate(0deg) translateX(120px) rotate(0deg)" },
          "100%": {
            transform: "rotate(360deg) translateX(120px) rotate(-360deg)",
          },
        },
        "orbit-3": {
          "0%": { transform: "rotate(0deg) translateX(80px) rotate(0deg)" },
          "100%": {
            transform: "rotate(360deg) translateX(80px) rotate(-360deg)",
          },
        },
        "orbit-4": {
          "0%": { transform: "rotate(0deg) translateX(140px) rotate(0deg)" },
          "100%": {
            transform: "rotate(360deg) translateX(140px) rotate(-360deg)",
          },
        },
        "energy-pulse-1": {
          "0%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.1)", opacity: "0.7" },
          "100%": { transform: "scale(1.2)", opacity: "0" },
        },
        "energy-pulse-2": {
          "0%": { transform: "scale(1)", opacity: "0.8" },
          "50%": { transform: "scale(1.15)", opacity: "0.5" },
          "100%": { transform: "scale(1.3)", opacity: "0" },
        },
        "energy-pulse-3": {
          "0%": { transform: "scale(1)", opacity: "0.6" },
          "50%": { transform: "scale(1.2)", opacity: "0.3" },
          "100%": { transform: "scale(1.4)", opacity: "0" },
        },
      },
      backgroundImage: {
        "main-bg": "url(/assets/img/main-bg.svg)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-pattern":
          "linear-gradient(135deg, rgba(6, 182, 212, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)",
      },
      boxShadow: {
        glow: "0 0 20px rgba(6, 255, 165, 0.3)",
        "glow-lg": "0 0 40px rgba(6, 255, 165, 0.4)",
        card: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        "card-hover":
          "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        "inner-glow": "inset 0 2px 4px 0 rgba(6, 255, 165, 0.1)",
      },
    },
  },
  plugins: [],
};
