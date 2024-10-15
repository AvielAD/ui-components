import "./globals.css";
import 'bootstrap-icons/font/bootstrap-icons.css'

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {

  return (
    <html lang="en">
      <title>Dashboard</title>
      <body>
            {children}
      </body>
    </html>
  );
}