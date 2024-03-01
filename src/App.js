import './App.css';
import Header from '../src/Component/Header/header'
import Card from './Component/Profile/profile'
import About from '../src/Component/About/about'
import Info from '../src/Component/Info/info'
import Education from '../src/Component/Education/education'
import Skill from '../src/Component/Skill/skill'
// import CreateProfile from '../src/Component/CreateProfile/createProfile'
import { BrowserRouter as Router  , Route, Routes } from 'react-router-dom';
import CreateProfile from '../src/Component/CreateProfile/createProfile'
import { Provider } from 'react-redux';
import store from './Redux/Store/store'

function App() {
  return (
    <Provider store={store}>
      <Router>
        {/* <CreateProfile/> */}
        <Header/>
        <Card/>
        <Info/>
        <About/>
        <Education/>
        <Skill/>
        <Routes>
            <Route path='createProfile' element={<CreateProfile/>} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
