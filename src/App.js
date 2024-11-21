import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Home } from './pages/home/Home';
import { About } from './pages/about/About';
import { Contact } from './pages/contact/Contact';
import { Documents } from './pages/documents/Documents';
import { SinglePost } from './pages/single_post/SinglePost';
import { Navbar } from './components/navbar/Navbar';
import { Footer } from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/documents' element={<Documents />} />
          <Route path='/single-post' element={<SinglePost />} />
          <Route path='*' element={<h1>PAGE NOT FOUND</h1>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
