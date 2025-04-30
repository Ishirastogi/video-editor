'use client';

import { Provider } from 'react-redux';
import { store } from '@/store/store';
import './globals.css';
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Place any other necessary head meta tags, links, title, etc. */}
      </head>
      <body>
        <Provider store={store}>
          {children}
        </Provider>
      </body>
    </html>
  );
}
