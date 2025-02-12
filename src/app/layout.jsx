import { Geist } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/main-layout/Header";
import { ClerkProvider } from "@clerk/nextjs";
import { auth, currentUser } from "@clerk/nextjs/server";
import { LoadToken } from "@/components/LoadToken";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Questify",
  description: "Ceate and Play Quests Online!",
};

export default async function RootLayout({ children }) {
  const user = await currentUser();
  let shouldRender = false
  let token
  let myUser
  if (user) {
    const{getToken} = await auth()
    token = await getToken()
    myUser = {
      email: user.primaryEmailAddress.emailAddress,
      firstName: user.firstName,
      lastName: user.lastName,
      imageURL: user.imageUrl,
      token,
      clerkId: user.id,
    }
    shouldRender = true
  }
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${geistSans.variable} antialiased`}>
          <Header />
          <main>{children}</main>
          {shouldRender ? <LoadToken user={myUser} token={token} createdAt={user.createdAt} lastSignInAt={user.lastSignInAt}/> : <></>}
        </body>
      </html>
    </ClerkProvider>
  );
}
