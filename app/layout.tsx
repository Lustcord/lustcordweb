import type { Metadata } from "next";
import { ReactNode } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import "./globals.css";
import { Inter } from "next/font/google";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import BootstrapClient from './components/BootstrapClient';
import Navbar from './components/NavBar'
import Script from 'next/script';


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lustcord",
  description: "Let your sins overflow.",
};

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body>
          <Navbar  />
          {children}
          <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
          strategy="beforeInteractive"
        />
          <BootstrapClient />
      </body>
    </html>
  );
};

export default RootLayout;
