import { Footer } from './components/common/Footer';
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
