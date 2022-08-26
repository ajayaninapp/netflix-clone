import LandingPage from './Pages/LandingPage';
import './App.css';
import { UserContextProvider } from './Context/UserContext';
import RouterContainer from './Route/RouterContainer';
import MainPage from './Pages/MainPage';

function App() {
  return (
    <div className="App">
      <UserContextProvider>
      <MainPage/>
      </UserContextProvider>
     
    </div>
  );
}

export default App;
