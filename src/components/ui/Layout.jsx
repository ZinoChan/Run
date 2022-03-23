import { Outlet } from 'react-router';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  return (
    <main className="position-absolute">
      <div className="circle circle-1"></div>
      <div className="circle circle-2"></div>
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
    </main>
  );
};

export default Layout;
