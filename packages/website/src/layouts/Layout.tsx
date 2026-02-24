import { Outlet } from 'react-router-dom';
import Navigation from '../components/Navigation';

function Layout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main>
        <Outlet />
      </main>
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; 2026 Buddhist Temple Community. All rights reserved.</p>
          <p className="mt-2 text-gray-400">
            May all beings be happy and free from suffering.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
