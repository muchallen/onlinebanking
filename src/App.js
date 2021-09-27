import {BrowserRouter,Route , Switch} from 'react-router-dom'
import Login from './Login';
import './App.css';
import Dashboard from './Dashboard';
import Transfares from './Transfares';
import RTGSTransactions from './RTGSTransactions';
import USDTransactions from './USDTransactions';
import Statements from './Statements';
import SignUp from './SignUp';

function App(props) {
  return (
    <BrowserRouter >
      <Switch>
      <Route exact path="/" >
      <Dashboard />
      </Route>  
      <Route path="/login" >
      <Login />
      </Route>
      <Route path="/signup" >
      <SignUp />
      </Route>
      <Route path="/transfares" >
      <Transfares />
      </Route>
      <Route path="/statements" >
      <Statements />
      </Route>
      <Route path="/rtgstransactions" >
      <RTGSTransactions />
      </Route>
      <Route path="/usdtransactions" >
      <USDTransactions />
      </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
