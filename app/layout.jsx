import NavBar from '../components/NavBar';
import {orbitron, exo} from './fonts'
import './global.css';

export const metadata = {
  title: {
    default: 'Indie Gamer',
    template: '%s | Indie Gamer'
  },};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${orbitron.variable} ${exo.variable}`}>
      <body className="bg-orange-50 flex flex-col min-h-screen px-4 py-2">
        <header>
          <NavBar />
        </header>
        <main className="py-3 grow">{children}</main>
        <footer className="border-t py-3 text-slate-500 text-center text-xs">
          Game data and images of{' '}
          <a href="https://rawg.io/" target="_blank"
          className='text-orange-800 hover:underline'>
            RAWG
          </a>
        </footer>
      </body>
    </html>
  );
}
