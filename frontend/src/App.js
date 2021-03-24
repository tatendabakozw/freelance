import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './Pages/Home';
import About from './Pages/About';
import Howitworks from './Pages/Howitworks';
import ExploreSellers from './Pages/ExploreSellers';
import Contact from './Pages/Contact';
import Register from './Pages/Register';
import Login from './Pages/Login';
import ServiceDescription from './Pages/ServiceDescription';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path='/register' component={Register}/>
          <Route path='/description' component={ServiceDescription}/>
          <Route path='/login' component={Login}/>
          <Route path='/explore' component={ExploreSellers}/>
          <Route path='/conract' component={Contact}/>
          <Route path='/howitworks' component={Howitworks}/>
          <Route path='/about' component={About}/>
          <Route exact path='/' component={Home}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
