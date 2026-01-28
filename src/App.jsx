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

const NotFound = () => <div className="py-32 text-center text-primary text-2xl font-bold">404 - Page Not Found</div>;

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />}>
          {/* If we had nested service pages, they would go here. 
               For now, individual service links can route to the overview or anchors if implemented.
               Since we only have 'Overview' requested as a page, we keep it simple.
            */}
        </Route>
        <Route path="services/:serviceId" element={<Services />} /> {/* Placeholder to handle service detail links returning to overview for now */}
        <Route path="products" element={<Products />} />
        <Route path="industries" element={<Industries />} />
        <Route path="why-us" element={<WhyChooseUs />} />
        <Route path="projects" element={<CaseStudies />} />
        <Route path="certifications" element={<Certifications />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
