/** @type {import('tailwindcss').Config} */
export default {
content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
theme: {
extend: {
fontFamily: {
sans: ['DM Sans', 'sans-serif'],
display: ['Playfair Display', 'serif'],
},
colors: {
  peach: {
    bg:     '#fff5f8',
    border: '#ffd6e4',
    accent: '#f9516c',
    muted:  '#c47d96',
    dark:   '#3d1020',
    search: '#fff0f5',
    sb:     '#ffb3cc',
    light:  '#ffeef4',
  },
},
animation: {
'spin-slow': 'spin 1.2s linear infinite',
'fade-in': 'fadeIn 0.4s ease forwards',
'scale-in': 'scaleIn 0.3s ease forwards',
},
keyframes: {
fadeIn: { from: { opacity: '0', transform: 'translateY(12px)' },
to: { opacity: '1', transform: 'translateY(0)' } },
scaleIn: { from: { transform: 'scale(0.85)', opacity: '0' },
to: { transform: 'scale(1)', opacity: '1' } },
},
},
},
plugins: [],
}