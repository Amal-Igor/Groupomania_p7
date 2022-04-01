import Header from './components/Header/Header';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import SignupForm from './pages/Signup/Signup';

function App() {
  return (
    <div className="App">
      
      <Header />
      <Routes>
        <Route path="/signup" element={<SignupForm />}></Route>
      </Routes>

    </div>
  );
}

export default App;
