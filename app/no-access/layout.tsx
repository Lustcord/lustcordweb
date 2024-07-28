import type { Metadata } from "next";
import { ReactNode } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import BootstrapClient from "../components/BootstrapClient";

export const metadata: Metadata = {
  title: "No access!",
  description: "You have no access to the site!",
};

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body>
          {children}
          <BootstrapClient />
      </body>
    </html>
  );
};

export default RootLayout;
