import type { Metadata } from 'next';
import Head from 'next/head';
import React from 'react';
import Providers from 'theme/Providers';
import '@fortawesome/fontawesome-svg-core/styles.css'; // Import the CSS
import { config } from '@fortawesome/fontawesome-svg-core';
import { DarkModeProvider } from 'theme/DarkModeContext';
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

export const metadata: Metadata = {
  title: 'Mikael Mantis | Software Engineer | Tricker',
  description: 'The home page of the US Tricking community',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title as string}</title>
        <meta name="viewport" content="minimum-scale=1, width=device-width, initial-scale=1" />
        <meta name="description" content={metadata.description ?? ''} />
        <meta name="author" content="Mikael Mantis" />
        <meta httpEquiv="Content-Type" content="text/html" charSet="utf-8" />
        <meta charSet="utf-8" />
        <link href="https://fonts.googleapis.com/css?family=Open+Sans|Roboto&display=swap" rel="stylesheet"></link>
        <link rel="canonical" href="https://mikaelmantis.com" />
      </Head>
      <body>
        <DarkModeProvider>
          <Providers>{children}</Providers>
        </DarkModeProvider>
      </body>
    </html>
  );
}
