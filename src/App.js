import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Banner from './components/banner';
import About from './components/About';
import Services from './components/services';
import Projects from './components/projects';
import Form from './components/Form';
import Footer from './components/Footer';

function App() {
  return (

    <div>
  
      {/* <div className="bg-[url('components/assets/bg1')] bg-cover bg-no-repeat h-screen w-full"> */}
      
      <Navbar/>
      <Banner/>
    <About/>
    <Services/>
    <Projects/>
    <Form/>
    <Footer/>

    </div>
    
  );
}


export default App;
