import { Route } from 'react-router-dom';
import './App.scss';
import Home from './components/Home';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <Route exact path={['/', '/home']} render={() => <Home />} />
      <Route path="/main" render={() => <Main />} />
    </div>
  );
}

export default App;
