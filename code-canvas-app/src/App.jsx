
import Navbar from './components/Navbar';
// import Footer from './components/FooterSection';
import Home from "./pages/HomePage";
import Courses from "./pages/CoursesPage";
import Ideas from "./pages/IdeasPage";
import CourseDetails from "./pages/CourseDetails";

import {
  Routes,
  Route,
} from "react-router-dom";


const App = () => {
  return (
    <main>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/ideas" element={<Ideas />} />
        <Route path="/courses/:courseId" element={<CourseDetails />} />
      </Routes>
    </main>
  );
};

export default App;
