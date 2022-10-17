import React from 'react';
import ReactDOM from 'react-dom/client';
import Info from './components/Info';
import About from './components/About';
import Interest from './components/Interest';
import Footer from './components/Footer';
import './style.css';

function App() {
  return (
    <article className="article">
      <Info />
      <About />
      <Interest />
      <Footer />
    </article>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
