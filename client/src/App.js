import logo from './logo.svg';
import './App.css';
import Home from './components/shared/Home/Home';
import {Routes, Route} from 'react-router-dom';
import MainNavbar from './components/shared/MainNavbar';
import Footer from './components/shared/Footer';
import Nomatch from './components/shared/Nomatch';
import Courses from './components/courses/Courses';
import CourseShow from './components/courses/CourseShow';

function App() {
  return (
    <div>
    <MainNavbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/courses' element={<Courses />} />
      <Route path='/courses/:id' element={<CourseShow />} />
      <Route path='/*' element={<Nomatch />} />
    </Routes>
    <Footer />
    
    
    </div>
  );
}

export default App;
