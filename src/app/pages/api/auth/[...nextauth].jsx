import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default NextAuth({
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // Add other providers as needed
  ],
  // Optional: Configure additional NextAuth options here
  session: {
    jwt: true,
  },
  pages: {
    signIn: '/login',  // Redirect to your custom login page
  },
});
