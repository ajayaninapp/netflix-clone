import LandingPage from './Pages/LandingPage';
import './App.css';
import { UserContextProvider } from './Context/UserContext';
import RouterContainer from './Route/RouterContainer';

function App() {
  return (
    <div className="App">
      <UserContextProvider>
      <RouterContainer/>
      </UserContextProvider>
     
    </div>
  );
}

export default App;
