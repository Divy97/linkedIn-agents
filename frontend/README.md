# Next.js + Supabase + Tailwind CSS + shadcn/ui Starter

A modern, full-stack web application starter built with:

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Supabase** - Backend-as-a-Service with authentication and database
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful and accessible UI components
- **Bun** - Fast JavaScript runtime and package manager

## Features

✅ **Authentication** - Sign up, sign in, and sign out with Supabase Auth
✅ **Responsive Design** - Mobile-first design with Tailwind CSS
✅ **Type Safety** - Full TypeScript support
✅ **Modern UI** - Pre-built components with shadcn/ui
✅ **Fast Development** - Hot reload with Next.js and Bun

## Quick Start

1. **Clone and install dependencies:**
   ```bash
   git clone <your-repo-url>
   cd frontend
   bun install
   ```

2. **Set up Supabase:**
   - Create a new project at [supabase.com](https://supabase.com)
   - Get your project URL and anon key from Project Settings > API
   - Update `.env.local` with your Supabase credentials:
     ```env
     NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
     NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
     ```

3. **Run the development server:**
   ```bash
   bun dev
   ```

4. **Open [http://localhost:3000](http://localhost:3000)** to see your app!

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx          # Home page
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   └── Auth.tsx          # Authentication component
├── contexts/             # React contexts
│   └── AuthContext.tsx   # Authentication context
└── lib/                  # Utility functions
    ├── supabase.ts       # Supabase client
    └── utils.ts          # Utility functions
```

## Adding More Components

Add more shadcn/ui components:

```bash
bunx shadcn@latest add dialog
bunx shadcn@latest add dropdown-menu
bunx shadcn@latest add form
```

See all available components: [shadcn/ui components](https://ui.shadcn.com/docs/components)

## Supabase Setup

1. **Enable Authentication:**
   - Go to Authentication > Settings in your Supabase dashboard
   - Configure your site URL: `http://localhost:3000`
   - Enable email authentication or other providers

2. **Create Database Tables:**
   ```sql
   -- Example: Create a profiles table
   create table profiles (
     id uuid references auth.users on delete cascade,
     email text,
     created_at timestamp with time zone default timezone('utc'::text, now()),
     primary key (id)
   );
   ```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repo to [Vercel](https://vercel.com)
3. Add your environment variables in Vercel dashboard
4. Deploy!

### Other Platforms

This app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Bun Documentation](https://bun.sh/docs)
