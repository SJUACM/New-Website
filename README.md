# SJU ACM Website V2
Built with:
- React 
- Next JS 14
- Tailwind CSS
- TypeScript
- Aceternity UI
- Turbopack

# Getting Started

1. Clone the repository and install dependencies:
```bash
git clone https://github.com/SJUACM/New-Website
```

2. Navigate to the project directory:
```bash
cd New-Website/sjuacm-website
```

3. Install dependencies:
```bash
npm install
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Code Formatting

Format your code automatically by running 
```bash
npm run format
```

## Tasks / Roadmap 
- [ ] Add all necessary info on home page
- [ ] Add all necessary info on about page
- [ ] Add all necessary info on resources page
- [ ] Migrate all pictures, meeting info, and blogs into [Contentful](https://www.contentful.com/).
      By using a content management system like contentful, it makes it easier and faster to add more meetings instead of handling it in our codebase. 
- [ ] Display information for all meetings by fetching the corresponding data from Contentful, read more how to [here](https://www.contentful.com/developers/docs/concepts/apis/).
- [ ] Display blogs by fetching the data from Contentful
- [ ] Make all pages & components mobile responsive
- [ ] Add authentication through [Clerk]([https://clerk.com/docs/quickstarts/nextjs](https://clerk.com/docs/qui))
- [ ] Add a backend Postgres database through [Supabase](https://supabase.com/docs/guides/database/overview). Learn more [here](https://supabase.com/docs/guides/getting-started/quickstarts/nextjs)
- [ ] Allow only ACM E-board members to have access to an admin dashboard
- [ ] Display ACM member statistics in admin dashboard  
- [ ] Deploy website through Vercel
   


## Learn More

To learn more about Next JS, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Learn Tailwind CSS](https://tailwindcss.com/docs/installation)
- [Getting Started with Supabase](https://www.youtube.com/watch?v=WdA6b0jPNv4)
