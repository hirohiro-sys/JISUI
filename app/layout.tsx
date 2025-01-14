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
      <body>
        {/* <Header /> */}
        {children}
        <Footer/>
        </body>
    </html>
  );
}
