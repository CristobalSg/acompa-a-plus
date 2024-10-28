import './globals.css';
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body>
        <header>
          <nav>
            <ul>
              <li><a href="/">Inicio</a></li>
              <li><a href="/home">Home</a></li>
              {/* <li><a href="/servicios">Servicios</a></li> */}
            </ul>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
