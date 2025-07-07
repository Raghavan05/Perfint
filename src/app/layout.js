import './globals.css';
import { metaPro, metaProBold, metaProItalic, metaProThin } from './fonts'; // import whatever needed

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${metaPro.variable} ${metaProBold.variable} ${metaProItalic.variable} ${metaProThin.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
