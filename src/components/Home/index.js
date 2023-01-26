import {Component} from 'react'
import './index.css'

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <div className="text-container">
          <h1>Clothes That Get YOU Noticed</h1>
          <p>
            Fashion is part of the daily air and it does not quite help that it
            changes all the time. Fashion is part of the daily air and it does
            not quite help that it changes all the time. Fashion is part of the
            daily air and it does not quite help that it changes all the time.
            Fashion is part of the daily air and it does not quite help that it
            changes all the time. Fashion is part of the daily air and it does
            not quite help that it changes all the time. Fashion is part of the
            daily air and it does not quite help that it changes all the time.
          </p>
          <button className="button" type="button">
            Shop Now
          </button>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          alt="clothes that get you noticed"
          className="home-image"
        />
      </div>
    )
  }
}

export default Home
