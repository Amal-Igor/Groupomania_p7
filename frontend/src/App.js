import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'
import './App.css';
import { Routes, Route } from 'react-router-dom';
import SignupForm from './pages/Signup/Signup';

function App() {
  return (
  <>     
        <Header />
          <Routes>
            <Route path="/signup" element={<SignupForm />}></Route>
          </Routes>
        <Footer />
      

  </>
  );
}

export default App;
