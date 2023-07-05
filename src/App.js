import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Banner from './components/banner';
import About from './components/About';
import Services from './components/services';
import Projects from './components/projects';
import Form from './components/Form';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';

function App() {
  return (

    <div>
  
     <div className="bg-[url('components/assets/bg3.jpg')] bg-cover bg-no-repeat h-screen w-full  overflow-y-hidden"> 
      
      <Navbar/>
      <Banner/>
      </div>
    <About/>
    <Services/>
    <Projects/>
    <Form/>
    <Footer/>
   
    </div>
    
  );
}


export default App;
