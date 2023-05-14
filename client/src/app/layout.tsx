'use client';

import { SessionProvider } from 'next-auth/react';
import '../styles/global.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="max-w-[480px] bg-slate-300 h-full my-0 mx-auto py-5">
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
