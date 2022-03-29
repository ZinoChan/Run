import { Outlet } from 'react-router';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  return (
    <main className="position-relative">
      <div className="circle circle-1"></div>
      <div className="circle circle-2"></div>
      <Header />
      <div className="position-relative min-vh-100" style={{ zIndex: 3 }}>
        <Outlet />
      </div>
      <Footer />
    </main>
  );
};

export default Layout;
