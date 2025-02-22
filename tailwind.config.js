/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: ["./src/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	theme: {
	  borderRadius: {
		lg: '14px',
		md: '10px',
		sm: '6px',
	  },
	  colors: {
		background: 'hsl(var(--background))',
		foreground: 'hsl(var(--foreground))',
		card: {
		  DEFAULT: 'hsl(var(--card))',
		  foreground: 'hsl(var(--card-foreground))',
		},
		popover: {
		  DEFAULT: 'hsl(var(--popover))',
		  foreground: 'hsl(var(--popover-foreground))',
		},
		muted: {
		  DEFAULT: 'hsl(var(--muted))',
		  foreground: 'hsl(var(--muted-foreground))',
		},
		accent: {
		  DEFAULT: 'hsl(var(--accent))',
		  foreground: 'hsl(var(--accent-foreground))',
		},
		destructive: {
		  DEFAULT: 'hsl(var(--destructive))',
		  foreground: 'hsl(var(--destructive-foreground))',
		},
		border: 'hsl(var(--border))',
		input: 'hsl(var(--input))',
		ring: 'hsl(var(--ring))',
		chart: {
		  '1': 'hsl(var(--chart-1))',
		  '2': 'hsl(var(--chart-2))',
		  '3': 'hsl(var(--chart-3))',
		  '4': 'hsl(var(--chart-4))',
		  '5': 'hsl(var(--chart-5))',
		},
		gray: {
		  '1': '#65636E',
		  '2': '#94939B',
		  '3': '#D9D7E0',
		  '4': '#F5F5F7',
		},
		authGreen: '#00943E',
		authRed: '#E70000',
		primary: {
		  '1': '#310EE0',
		  '2': '#AEA0F8',
		},
	  },
	  extend: {
		borderRadius: {
		  lg: 'var(--radius)',
		  md: 'calc(var(--radius) - 2px)',
		  sm: 'calc(var(--radius) - 4px)',
		},
		colors: {
		  background: 'hsl(var(--background))',
		  foreground: 'hsl(var(--foreground))',
		  card: {
			DEFAULT: 'hsl(var(--card))',
			foreground: 'hsl(var(--card-foreground))',
		  },
		  popover: {
			DEFAULT: 'hsl(var(--popover))',
			foreground: 'hsl(var(--popover-foreground))',
		  },
		  primary: {
			DEFAULT: 'hsl(var(--primary))',
			foreground: 'hsl(var(--primary-foreground))',
		  },
		  secondary: {
			DEFAULT: 'hsl(var(--secondary))',
			foreground: 'hsl(var(--secondary-foreground))',
		  },
		  muted: {
			DEFAULT: 'hsl(var(--muted))',
			foreground: 'hsl(var(--muted-foreground))',
		  },
		  accent: {
			DEFAULT: 'hsl(var(--accent))',
			foreground: 'hsl(var(--accent-foreground))',
		  },
		  destructive: {
			DEFAULT: 'hsl(var(--destructive))',
			foreground: 'hsl(var(--destructive-foreground))',
		  },
		  border: 'hsl(var(--border))',
		  input: 'hsl(var(--input))',
		  ring: 'hsl(var(--ring))',
		  chart: {
			'1': 'hsl(var(--chart-1))',
			'2': 'hsl(var(--chart-2))',
			'3': 'hsl(var(--chart-3))',
			'4': 'hsl(var(--chart-4))',
			'5': 'hsl(var(--chart-5))',
		  },
		},
		screens: {
		  'max-420': { max: '420px' }, // 사용자 정의 최대 너비
		},
	  },
	},
	plugins: [],
  };