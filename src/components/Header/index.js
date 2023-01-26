import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav>
    <div className="container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        className="nav-image"
        alt="website logo"
      />
      <ul className="unorder-list">
        <Link className="nav-link" to="/">
          <li className="list-items">Home</li>
        </Link>
        <Link className="nav-link" to="/products">
          <li className="list-items">Products</li>
        </Link>
        <Link className="nav-link" to="/cart">
          <li className="list-items">Cart</li>
        </Link>
        <Link className="logout-button" to="/logout">
          <li className="logout-items">Logout</li>
        </Link>
      </ul>
    </div>
  </nav>
)

export default Header
