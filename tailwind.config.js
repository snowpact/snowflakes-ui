module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  safelist: [
    'w-64',
    'w-1/2',
    'rounded-l-lg',
    'rounded-r-lg',
    'bg-gray-200',
    'grid-cols-4',
    'grid-cols-7',
    'h-6',
    'leading-6',
    'h-9',
    'leading-9',
    'shadow-lg'
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: "#686DE4",
        secondary: "#E2525C",
        success: "#4CE2A7",
        error: "#E24C4C",
        alert: "#F1A153",
        dark: "#12193D",
      },
      // primary: {
      //   50: '#f2f2fc',
      //   100: '#ececfe',
      //   200: '#e3e3fd',
      //   300: '#cacafb',
      //   400: '#8585f6',
      //   500: '#6a6af4',
      //   600: '#1212ff',
      //   700: '#000091',
      //   800: '#313178',
      //   900: '#1b1b35'
      // },
      // sidebar mobile fix
      maxWidth: {
        '2xs': '16rem',
        '8xl': '90rem'
      },
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
        'body': ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
        'mono': ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace']
      },
      fontSize: {
        '2xs': '0.625rem'
      },

    }
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
    },
  },
  plugins: [
    require('./tailwind.plugin'),
  ],
};
