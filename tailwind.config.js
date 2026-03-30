/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#aca3ff",
          foreground: "#27009a",
          dim: "#6f5cf4",
          container: "#9e93ff",
          fixed: "#9e93ff",
          "fixed-dim": "#9083ff",
        },
        secondary: {
          DEFAULT: "#b290fe",
          foreground: "#300073",
          dim: "#ac8bf8",
          container: "#523099",
          fixed: "#dbc9ff",
          "fixed-dim": "#cfb8ff",
        },
        tertiary: {
          DEFAULT: "#ff9eca",
          foreground: "#6d0f47",
          dim: "#ed7ab3",
          container: "#fd87c0",
          fixed: "#ff8bc3",
          "fixed-dim": "#f17db5",
        },
        surface: {
          DEFAULT: "#0e0e0e",
          dim: "#131313",
          bright: "#2c2c2c",
          variant: "#262626",
          tint: "#aca3ff",
          container: {
            DEFAULT: "#1a1919",
            low: "#131313",
            "lowest": "#000000",
            high: "#201f1f",
            highest: "#262626",
          },
        },
        error: {
          DEFAULT: "#ff6e84",
          dim: "#d73357",
          container: "#a70138",
          foreground: "#490013",
        },
        outline: {
          DEFAULT: "#777575",
          variant: "#494847",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      fontFamily: {
        headline: ['Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        label: ['Space Grotesk', 'system-ui', 'sans-serif'],
        data: ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xs: "calc(var(--radius) - 6px)",
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        'ambient': '0 20px 40px rgba(0, 0, 0, 0.4)',
        'ambient-lg': '0 -10px 40px rgba(0, 0, 0, 0.5)',
        'glow-primary': '0 0 20px rgba(172, 163, 255, 0.3)',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(172, 163, 255, 0.3)" },
          "50%": { boxShadow: "0 0 30px rgba(172, 163, 255, 0.5)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
