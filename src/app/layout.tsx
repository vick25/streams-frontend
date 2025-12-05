import "./globals.css";


export const metadata = {
  title: 'STREAMS - Web Mapping',
  description: 'A modern web-mapping application for monitoring water resources and community features in Central Africa.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Tailwind CSS */}
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body className="min-h-screen bg-gray-50 text-gray-900 font-sans">
        {children}
      </body>
    </html>
  );
}