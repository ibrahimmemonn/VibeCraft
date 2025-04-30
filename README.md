# VibeCraft - Brand Identity Generator

VibeCraft is an modern web application that helps you generate beautiful and cohesive brand identities in seconds. This project is built with Next.js and uses Tailwind CSS for styling.

## Features

- Interactive brand generator with style, category, and audience selection
- Real-time color palette generation
- Font and icon recommendations based on brand style
- Preview of brand elements including typography, buttons, and colors
- Copy and export functionality
- Responsive design for all devices

## Getting Started

### Prerequisites

- Node.js 18.0.0 or newer
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone [repository-url]
cd vibecraft
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
vibecraft/
├── app/                    # Next.js App Router
│   ├── layout.js           # Root layout
│   ├── page.js             # Home page
│   └── globals.css         # Global styles
├── components/             # React components
│   ├── sections/           # Page sections
│   │   ├── Header.js       # Header component
│   │   ├── Hero.js         # Hero section
│   │   ├── BrandGenerator.js # Brand generator component
│   │   ├── FeaturesSection.js # Features section
│   │   ├── FAQSection.js   # FAQ section
│   │   └── Footer.js       # Footer component
│   └── ui/                 # UI components
│       ├── button.js       # Button component
│       └── select.js       # Select component
├── lib/                    # Utility functions and constants
│   ├── constants.js        # Application constants
│   └── utils.js            # Utility functions
├── public/                 # Static assets
├── styles/                 # Additional styles (if needed)
├── package.json            # Project dependencies
├── tailwind.config.js      # Tailwind CSS configuration
└── next.config.js          # Next.js configuration
```

## Customization

### Adding New Color Themes

To add new color themes, update the `COLOR_THEMES` object in `lib/constants.js`.

### Adding New Font Options

To add new font options, update the `FONT_MAP` object in `lib/constants.js`.

### Adding New Icon Sets

To add new icon sets, update the `ICON_MAP` object in `lib/constants.js`.

## Deployment

This Next.js application can be deployed to platforms like Vercel, Netlify, or any other hosting service that supports Next.js.

```bash
# Build for production
npm run build
# or
yarn build

# Start production server
npm start
# or
yarn start
```

## License

This project is licensed under the MIT License.

## Acknowledgements

- [Next.js](https://nextjs.org/) - The React framework used
- [Tailwind CSS](https://tailwindcss.com/) - For styling
- [Lucide React](https://lucide.dev/) - For icons
- [Framer Motion](https://www.framer.com/motion/) - For animations
