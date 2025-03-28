import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import './App.css';
import ReviewList from './components/ReviewList';
import FeedbackForm from './components/FeedbackForm';

function App() {
  return (
      <Router>
        <div>
          <nav>
            <Link to="/feedback">Give feedback/</Link>
            <Link to="/reviews">view reviews</Link>
          </nav>
          <Routes>
          <Route path="/" element={<Navigate to="/feedback"/>}/>
            <Route path="/feedback" element={<FeedbackForm/>}/>
            <Route path="/reviews" element={<ReviewList/>}/>
          </Routes>
        </div>
      </Router>
  );
}

export default App;

