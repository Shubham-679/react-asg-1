import './App.css';
import Navigation from './components/navigation';
import { Switch , Route } from 'react-router-dom';
import Home from './components/home';
import Album from './components/album';
import Photo from './components/photo';
import Count from './components/count';
import Timer from './components/timer';
import UserAlbum from './components/userAlbum';

function App() {

  return (
    <div className="App">
      <Navigation/>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/useralbums/:id" component={UserAlbum} />
        <Route path="/albums" component={Album} />
        <Route path="/photos" component={Photo} /> 
        <Route path="/count" component={Count} /> 
        <Route path="/timer" component={Timer} />        
      </Switch>         
    </div>
  );
}

export default App;
