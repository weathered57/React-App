import React from 'react'
import Navi from '../navi/Navi'
import { Container } from 'reactstrap'
import Dashboard from './Dashboard';
import CartDetail from '../cart/cartDetail'
import {Route,Switch} from 'react-router-dom'

function App() {
  return (
    <Container>
       <Navi/>
       <Switch>
        <Route path="/" exact component={Dashboard}/>
        <Route path="/product" exact component={Dashboard}/>
        <Route path="/cart" exact component={CartDetail}/>
       </Switch>
    </Container>
  );
}

export default App;