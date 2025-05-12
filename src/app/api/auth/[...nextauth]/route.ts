// app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({
  providers: [
    // 🔹 Connexion via Google
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),

    // 🔸 Connexion classique (email + mot de passe)
    CredentialsProvider({
      name: "Identifiants classiques",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Mot de passe", type: "password" },
      },
      async authorize(credentials, req) {
        // Remplace cette partie par ta logique de vérification en base de données
        const user = {
          id: "1",
          name: "Jean Dupont",
          email: "jean@example.com",
        }

        if (
          credentials?.email === "jean@example.com" &&
          credentials?.password === "123456"
        ) {
          return user
        }

        return null
      },
    }),
  ],

  session: {
    strategy: "jwt", // recommandé pour Credentials
  },

  pages: {
    signIn: "/auth/signin", // page personnalisée si tu veux
  },

  secret: process.env.NEXTAUTH_SECRET,
})

export { handler as GET, handler as POST }
