import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function SinglePage() {
  return (
      <main className={`flex min-h-screen flex-col items-center justify-between p-48 ${inter.className}`}>
        <div className="relative flex place-items-center">
          <Link href="/shop/">Demo: Dynamic pages in Next.js to Page</Link>
        </div>
      </main>
  );
}
