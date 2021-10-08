import './App.css';
import Details from './components/Details';
import MainView from './components/MainView';
import { Route, Switch, Redirect } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path={'/'} exact component = {MainView} />
        <Route path={'/Details/:id'} exact component = {Details}/>
        <Redirect to={'/'} />
      </Switch>  
    </div>
  );
}

export default App;
