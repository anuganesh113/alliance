import { Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Products from './pages/Products';
import Industries from './pages/Industries';
import WhyChooseUs from './pages/WhyChooseUs';
import CaseStudies from './pages/CaseStudies';
import Certifications from './pages/Certifications';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import GetQuote from './pages/GetQuote';
import ServiceDetail from './pages/ServiceDetail';

const NotFound = () => <div className="py-32 text-center text-primary text-2xl font-bold">404 - Page Not Found</div>;

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="services/:serviceId" element={<ServiceDetail />} />
        <Route path="products" element={<Products />} />
        <Route path="industries" element={<Industries />} />
        <Route path="why-us" element={<WhyChooseUs />} />
        <Route path="case-studies" element={<CaseStudies />} />
        <Route path="certifications" element={<Certifications />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
        <Route path="get-quote" element={<GetQuote />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
