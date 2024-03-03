import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Vacancies App",
  description: "Vacancies App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className}>
      <div className="App bg-gray-900 h-screen w-screen relative overflow-hidden">
    <div className="h-40-r w-40-r bg-gradient-to-r from-green-400 to-blue-500 rounded-full absolute left-2/3 -top-56 transform rotate-160 animate-pulse"></div>
    <div className="h-35-r w-35-r bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-full absolute top-96 -left-20 transform rotate-180 animate-pulse"></div>
    <div className="h-12 w-full bg-white bg-opacity-10 shadow-5xl relative z-20 backdrop-filter backdrop-blur-sm flex items-center justify-between px-2 text-white">
      <div>LOGO <span>Кор</span></div>
      <div>
        <nav>
          <ul className="flex space-x-2">
            <li>
              Чустучуи кор
            </li>
            <li>
              Руйхати корхо
            </li>
            <li>
            Музди кор
            </li>
          </ul>
        </nav>
      </div>
  </div>
  <div className="relative z-20 ">
        {children}
  </div>
  </div>
        </body>
    </html>
  );
}
