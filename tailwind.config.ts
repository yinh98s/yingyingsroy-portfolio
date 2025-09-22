import type { Config } from "tailwindcss";
import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";

const config: Config = {
    darkMode: "class", // ✅ string, not tuple
    content: [
        "./app/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./lib/**/*.{ts,tsx}",
    ],
    theme: {
        container: {
            center: true,
            padding: "1rem",
            screens: { sm: "640px", md: "768px", lg: "1024px", xl: "1200px" },
        },
        extend: {
            colors: {
                brand: {
                    50: "#eff6ff",
                    100: "#dbeafe",
                    200: "#bfdbfe",
                    300: "#93c5fd",
                    400: "#60a5fa",
                    500: "#3b82f6",
                    600: "#2563eb",
                    700: "#1d4ed8",
                    800: "#1e40af",
                    900: "#1e3a8a",
                },
            },
            boxShadow: { soft: "0 8px 30px rgba(0,0,0,0.08)" },
            borderRadius: { "2xl": "1rem" },
        },
    },
    plugins: [typography, forms],
};
export default config;
