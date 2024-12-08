import { Footer } from './components/common/Footer';
import { Header } from './components/common/Header';
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="flex flex-col min-h-screen">
        <Header />
        {children}
        <Footer/>
        </body>
    </html>
  );
}
