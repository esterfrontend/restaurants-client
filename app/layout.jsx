import { Inter } from "next/font/google";
import "./globals.css";
import AuthContextProvider from "./context/AuthContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="text-[18px] lg:text-[20px] 2xl:text-[24px]">
      <body className={`${inter.className} flex flex-col h-dvh justify-between`}>
        <AuthContextProvider>
          {children}
        </AuthContextProvider>
        <footer className="px-5 lg:px-10 py-4">
          <span className="text-xs">Prueba técnica @Tailor hub 2019 - 2024</span>
        </footer>
      </body>
    </html>
  );
}
