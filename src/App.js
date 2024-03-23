import {BrowserRouter,Outlet,Routes,Route} from 'react-router-dom';
import Login from './Login'
import ProfilePage from './ProfilePage';
import AuthProfilePage from './AuthProfilePage'
import './app.css'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path ='' element={<AuthProfilePage/>}>
          <Route path='/profilePage' element={<ProfilePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
