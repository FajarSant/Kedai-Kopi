import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import GithubProvider from 'next-auth/providers/github';
import InstagramProvider from 'next-auth/providers/instagram';

const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
    email: {
      label: "Email",
      type: "email",
      placeholder: "your-email@example.com",
    },
        password: {
          label: "Password:",
          type: "password",
          placeholder: "your-awesome-password",
        },
      },
      async authorize(credentials) {
        try {
          // Simulating a user with id, email, and password
          const user = { id: "42", email: "admin@example.com", password: "admin" };
          if (
            credentials?.email === user.email &&
            credentials.password === user.password
          ) {
            return Promise.resolve(user);
          } else {
            return Promise.resolve(null); // Invalid credentials
          }
        } catch (error) {
          console.error("Error during authorization:", error);
          return Promise.resolve(null);
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    InstagramProvider({
      clientId: process.env.INSTAGRAM_CLIENT_ID,
      clientSecret: process.env.INSTAGRAM_CLIENT_SECRET,
    }),
    // Tambahkan provider lain jika dibutuhkan
    // Misalnya: FacebookProvider({ clientId: '...', clientSecret: '...' }),
  ],
  pages: {
    signIn: '/auth/signin', // Specify the path to your custom sign-in page
  },
  callbacks: {
    async jwt({ token, user }) {
      try {
        if (user) {
          token.id = user.id;
          token.email = user.email;
        }
        return Promise.resolve(token);
      } catch (error) {
        return Promise.resolve(token);
      }
    },
    async session({ session, token }) {
      try {
        session.user = token;
        return Promise.resolve(session);
      } catch (error) {
        return Promise.resolve(session);
      }
    },
    async redirect({ url, baseUrl }) {
      return Promise.resolve(baseUrl);
    },
  },
};

export default authOptions;
