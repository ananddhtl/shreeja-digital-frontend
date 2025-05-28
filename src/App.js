import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePages';
import ContactForm from './pages/ContactForm';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact" element={<ContactForm />} />
    </Routes>
  );
};

export default App;
