import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Layout() {
  return (
    <div
      style={{
        background: '#fdf8ef',
        color: '#2a2620',
        fontFamily: '"Be Vietnam Pro", system-ui, sans-serif',
        fontWeight: 400,
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
