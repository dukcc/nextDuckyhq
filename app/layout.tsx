// These styles apply to every route in the application
import './globals.css';

export default function RootLayout({ children }: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <nav className="bg-neutral-900 pt-8 px-8 flex place-content-between align-middle text-white">
          <img className="w-16" src="/logo.svg" alt="DuckyHQ Logo" />
          <a className="text-3xl font-bold pt-3 hover:text-[#37c3f0] transition-all duration-200" href="#">About</a>
        </nav>
        {children}
      </body>
    </html>
  );
}