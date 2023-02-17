import {Route, Redirect, Switch} from 'react-router-dom'
import Home from './components/Home'
import Header from './components/Header'
import LoginForm from './components/LoginForm'
import ProtectedRoute  from './components/ProtectedRoute'
import Products from './components/Products'
import Cart from './components/Cart'
import NotFound from './components/NotFound'

const App = () => (
  <>
    <Header />
    <Switch>
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute exact path="/login" component={LoginForm} />
      <ProtectedRoute exact path='/cart' component={Cart} />
      <ProtectedRoute exact path='/products' component={Products} />
      <Route exact path='/not-found' component={NotFound} />
      <Redirect to='/not-found' />
    </Switch>
  </>
)

export default App
