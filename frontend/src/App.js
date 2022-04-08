import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'
import './App.css';
import { Routes, Route } from 'react-router-dom';
import SignupForm from './pages/Signup/Signup';
import LoginForm from './pages/Login/Login'
import { Profile } from './pages/Profile/Profile';

function App() {
  return (
  <>     
        <Header />
          <Routes>
            <Route path="/signup" element={<SignupForm />}></Route>
            <Route path="/login" element={<LoginForm />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
          </Routes>
        <Footer />
      

  </>
  );
}

export default App;
