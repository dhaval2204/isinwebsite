/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
	  "./src/**/*.{js,ts,jsx,tsx,mdx}",
	  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
	  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
	  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
	  container: {
		center: "true",
		padding: "1rem",
		screens: {
		  "2xl": "1100px",
		},
	  },
	  extend: {
		colors: {},
		boxShadow: {
		  full: "0 0 5px 0",
		},
		borderRadius: {
		  lg: "var(--radius)",
		  md: "calc(var(--radius) - 2px)",
		  sm: "calc(var(--radius) - 4px)",
		},
		keyframes: {
		  "accordion-down": {
			from: {
			  height: "0",
			},
			to: {
			  height: "var(--radix-accordion-content-height)",
			},
		  },
		  "accordion-up": {
			from: {
			  height: "var(--radix-accordion-content-height)",
			},
			to: {
			  height: "0",
			},
		  },
		},
		animation: {
		  "accordion-down": "accordion-down 0.2s ease-out",
		  "accordion-up": "accordion-up 0.2s ease-out",
		},
	  },
	},
	plugins: [require("tailwindcss-animate")],
  };
  