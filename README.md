# Cloud Engineer Portfolio

A modern, responsive portfolio website for an aspiring Cloud Engineer built with Next.js, TypeScript, Tailwind CSS, Framer Motion, and Lucide React.

## Features

- **Responsive Design**: Mobile-first design that works on all devices
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **Clean UI**: Minimalist design with professional styling
- **SEO Optimized**: Proper metadata and semantic HTML
- **Fast Performance**: Optimized with Next.js App Router
- **TypeScript**: Full type safety throughout the application

## Sections

- **Hero**: Introduction with call-to-action buttons
- **Projects**: Showcase of cloud projects with technologies used
- **Skills**: Categorized skills in Cloud, DevOps, Networking, OS, and Programming
- **Certifications**: Current certifications (AWS Certified Cloud Practitioner in progress)
- **Resume**: Download link and preview section
- **Contact**: Contact form and social links
- **Footer**: Copyright information

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd cloud-engineer-portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Customization

### Personal Information

Update the following placeholders in the components:

- **Name**: Replace "Your Name" in `components/Hero.tsx`, `components/Navbar.tsx`, `components/Footer.tsx`
- **Email**: Update email links in `components/Contact.tsx`
- **Social Links**: Update GitHub and LinkedIn URLs in `components/Contact.tsx`
- **Project Links**: Update project GitHub and demo links in `components/Projects.tsx`

### Resume

Add your resume PDF to the `public/` directory as `resume.pdf`. The download link in `components/Resume.tsx` will automatically work.

### Projects

Modify the `projects` array in `components/Projects.tsx` to add your own projects. Each project should have:

- `title`: Project name
- `description`: Brief description
- `technologies`: Array of technologies used
- `githubLink`: GitHub repository URL
- `demoLink`: Live demo URL
- `image` (optional): Architecture diagram or screenshot

### Skills

Update the `skillCategories` object in `components/Skills.tsx` with your actual skills.

### Certifications

Modify `components/Certifications.tsx` to reflect your current certifications.

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically on every push

### Deploy to AWS

#### Option 1: AWS Amplify

1. Push code to GitHub
2. Go to AWS Amplify Console
3. Create new app from GitHub repository
4. Configure build settings (default Next.js settings work)
5. Deploy

#### Option 2: AWS S3 + CloudFront

1. Build the project: `npm run build`
2. Export static files: `npm run export` (if using static export)
3. Upload `out/` directory to S3 bucket
4. Configure CloudFront distribution for the S3 bucket
5. Set up Route 53 for custom domain (optional)

#### Option 3: AWS Elastic Beanstalk

1. Build the project
2. Create a production build
3. Deploy to Elastic Beanstalk with Node.js platform

## Project Structure

```
cloud-engineer-portfolio/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── favicon.ico
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── ProjectCard.tsx
│   ├── Projects.tsx
│   ├── Skills.tsx
│   ├── Certifications.tsx
│   ├── Resume.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── public/
│   └── resume.pdf (add your resume here)
├── package.json
├── tailwind.config.ts
├── next.config.ts
└── README.md
```

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is open source and available under the [MIT License](LICENSE).
