import './App.css';
import About from './components/About';
import CaseStudies from './components/CaseStudies';
import Footer from './components/Footer';
import Form from './components/Form';
import Landing from './components/Landing';
import Navbar from './components/Navbar';
import News from './components/News';
import Partners from './components/Partners';
import Platform from './components/Platform';
import Solutions from './components/Solutions';
import ScrollToTop from 'react-scroll-to-top';
function App() {



  return (
    <div className="bg-black w-screen">
      <Navbar />
      <Landing />

      <Solutions />
      <Platform />
      <Partners />

      <CaseStudies />
      <News />


      <About />
      <Form />

      <Footer />

      <ScrollToTop smooth color='#F2C744' />

      {/* <button className='bg-fjorange p-2 fixed bottom-10  right-10 z-50' onclick={topFunction()} id="myBtn" title="Go to top">Top</button> */}
    </div>
  );
}

export default App;
