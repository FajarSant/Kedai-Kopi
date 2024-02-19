import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import GithubProvider from 'next-auth/providers/github';
import InstagramProvider from 'next-auth/providers/instagram';

const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "username",
          type: "text",
          placeholder: "your-cool-username",
        },
        password: {
          label: "Password:",
          type: "password",
          placeholder: "your-awesome-password",
        },
      },
      async authorize(credentials) {
        try {
          const user = { id: "42", name: "Admin", password: "admin" };
          if (credentials?.username === user.name && credentials.password === user.password) {
            return Promise.resolve(user);
          } else {
            return Promise.resolve(null);
          }
        } catch (error) {
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
