import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import {BsPlusSquare, BsDashSquare} from 'react-icons/bs'
import Loader from 'react-loader-spinner'
import Cookie from 'js-cookie'
import Header from '../Header'
import SimilarProductItem from '../SimilarProductItem'
import './index.css'

const apiactiveStatus = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  loader: 'LOADER',
}

class ProductItemDetails extends Component {
  state = {apiStatus: apiactiveStatus.initial, eachDetails: {}, productCount: 1}

  componentDidMount() {
    this.renderProductdetails()
  }

  changeData = similardata => ({
    productId: similardata.id,
    productimageUrl: similardata.image_url,
    productTitle: similardata.title,
    productStyle: similardata.style,
    productPrice: similardata.price,
    productDescription: similardata.description,
    productBrand: similardata.brand,
    productTotalReviews: similardata.total_reviews,
    productRating: similardata.rating,
    productAvailability: similardata.availability,
  })

  renderProductdetails = async () => {
    this.setState({apiStatus: apiactiveStatus.loader})
    const jwtToken = Cookie.get('jwt_token')
    const {match} = this.props
    const {params} = match
    const {id} = params
    const apiUrl = `https://apis.ccbp.in/products/${id}`
    const options = {
      headers: {Authorization: `Bearer ${jwtToken}`},
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    console.log(response)
    if (response.ok === true) {
      const data = await response.json()

      const updatedData = {
        id: data.id,
        imageUrl: data.image_url,
        title: data.title,
        price: data.price,
        description: data.description,
        brand: data.brand,
        totalReview: data.total_reviews,
        rating: data.rating,
        availability: data.availability,
        similarProducts: data.similar_products.map(similardata => ({
          productId: similardata.id,
          productimageUrl: similardata.image_url,
          productTitle: similardata.title,
          productStyle: similardata.style,
          productPrice: similardata.price,
          productDescription: similardata.description,
          productBrand: similardata.brand,
          productTotalReviews: similardata.total_reviews,
          productRating: similardata.rating,
          productAvailability: similardata.availability,
        })),
      }

      this.setState({
        eachDetails: updatedData,
        apiStatus: apiactiveStatus.success,
      })
    }
    if (response.status === 404) {
      this.setState({apiStatus: apiactiveStatus.failure})
    }
  }

  addItem = () => {
    this.setState(prevState => ({productCount: prevState.productCount + 1}))
  }

  subItem = () => {
    const {productCount} = this.state
    if (productCount > 1) {
      this.setState(prevState => ({productCount: prevState.productCount - 1}))
    } else {
      this.setState({productCount: 1})
    }
  }

  renderProductView = () => {
    const {eachDetails, productCount} = this.state
    const {
      imageUrl,
      brand,
      price,
      description,
      availability,
      totalReview,
      title,
      rating,
      similarProducts,
    } = eachDetails

    return (
      <div>
        <Header />
        <div className="product-container">
          <img src={imageUrl} alt="product" className="product-image" />
          <div className="product-details">
            <h1 className="heading">{title}</h1>
            <p className="price">Rs {price}/-</p>
            <div className="reviews-container">
              <div className="star-rating-container">
                <p className="rating">{rating}</p>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/star-img.png"
                  alt="star"
                  className="star-image"
                />
              </div>
              <p className="reviews">{totalReview} Reviews</p>
            </div>
            <p className="desc">{description}</p>
            <div className="availablity-card">
              <p className="available">Available:</p>
              <p className="highlight">{availability}</p>
            </div>
            <div className="brand-card">
              <p className="brand">Brand:</p>
              <p className="highlight"> {brand}</p>
            </div>
            <hr />
            <div className="button-container">
              <button
                className="button"
                data-testid="minus"
                onClick={this.subItem}
                type="button"
              >
                <BsDashSquare />
              </button>
              <p>{productCount}</p>
              <button
                className="button"
                data-testid="plus"
                onClick={this.addItem}
                type="button"
              >
                <BsPlusSquare />
              </button>
            </div>
            <button type="button" className="cart-button">
              ADD TO CART
            </button>
          </div>
        </div>
        <div className="details-container">
          <h1 className="similar-prdt-heading">Similar Products</h1>
          <ul className="similar-list-container">
            {similarProducts.map(eachitem => (
              <SimilarProductItem
                key={eachitem.productId}
                eachItem={eachitem}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }

  renderloader = () => (
    <div data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height={80} width={80} />
    </div>
  )

  rendertoProducts = () => {
    const {history} = this.props
    history.replace('/products')
  }

  renderproductNotFound = () => (
    <div className="error-view-image">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-error-view-img.png"
        alt="failure view"
        className="error-found-image"
      />
      <h1>Product Not Found</h1>
      <button
        className="continue-button"
        type="button"
        onClick={this.rendertoProducts}
      >
        Continue Shopping
      </button>
    </div>
  )

  renderallViews = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiactiveStatus.success:
        return this.renderProductView()
      case apiactiveStatus.failure:
        return this.renderproductNotFound()
      case apiactiveStatus.loader:
        return this.renderloader()
      default:
        return null
    }
  }

  render() {
    return <>{this.renderallViews()}</>
  }
}

export default ProductItemDetails
