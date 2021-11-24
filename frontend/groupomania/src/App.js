import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'



function App() {
  return (
    <div className="App">
      <h1>Login Form</h1>
			<form action="auth" method="POST">
				<input type="text" name="username" placeholder="Username" required></input>
				<input type="password" name="password" placeholder="Password" required></input>
				<input type="submit"></input>
			</form>
    </div>
  );
}

export default App;
