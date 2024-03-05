import '@/assets/globals.css';

export const metadata = {
  title: 'Gabriel Borges',
  description: 'Informações gerais e portfólio de Gabriel Borges.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang='en'>
      <body className='h-screen'>{children}</body>
    </html>
  );
}
