import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Drivers from './pages/drivers';

import Home from './pages/home';
import Layout from './components/ui/layout';
import Vendors from './pages/vendors';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <>
      <ScrollToTop />

      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/vendors" element={<Vendors />} />

          <Route path="/drivers" element={<Drivers />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
