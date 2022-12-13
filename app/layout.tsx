
import './globals.css';
import Link from 'next/link';

export default function RootLayout({ children }: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="bg-black">
        <nav className="bg-black/[35%] p-7 rounded-b-2xl flex fixed w-screen place-content-between align-middle text-white backdrop-blur-xl">
          <Link href="/"><img className="h-16" src="/logo.svg" alt="DuckyHQ Logo" /></Link>
          <div className="pt-[1.05rem]">
            <Link href="/" className="text-2xl pl-7 pt-3 font-default hover:text-logo-2 transition-allduration-200">Home</Link>
            <Link href="/posts" className="text-2xl pl-7 pt-3 font-default hover:text-logo-2 transition-all duration-200">Posts</Link>
            <Link href="/about" className="text-2xl pl-7 pt-3 font-default hover:text-logo-2 transition-all duration-200">About</Link>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
