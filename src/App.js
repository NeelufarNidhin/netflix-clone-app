
import './App.css'
import { top_rated,popular,originals,action, crime,comedy } from './Urls';
import Banner from './components/Banner/Banner';
import Navbar from './components/Navbar/Navbar';
import Poster from './components/Poster/Poster';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className='app'>
      <Navbar/>
      <Banner/>
      <Poster url={top_rated} title="Top-rated"/>
      <Poster url={popular} title="Popular on Netflix"/>
      <Poster url={originals} title="Netflix Originals"/>
      <Poster url={action} title="Action"/>
      <Poster url={comedy} title="Comedy"/>
      <Poster url={crime} title="Crime"/>
     <Footer/>

    </div>
  );
}

export default App;
