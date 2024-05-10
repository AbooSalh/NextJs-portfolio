import { Inter } from "next/font/google";
import "./globals.css";
import TransitionProvider from "../components/transitionProvider";
import { landPage } from "../static infos/statics";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ahmed Saleh Website",
  description: landPage.biography,
  keywords:"web developer , freelancer , HTML , CSS , JavaScript , Reactjs , Nextjs , web designer",
  author:"Ahmed Saleh"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} >
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
