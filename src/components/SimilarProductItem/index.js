import './index.css'

const SimilarProductItem = props => {
  const {eachItem} = props
  //   similarProductList = similarProductsDetails
  //   console.log(eachItem)
  const {
    productId,
    productimageUrl,
    productTitle,
    productPrice,
    productBrand,
    productRating,
  } = eachItem
  return (
    <li className="items" key={productId}>
      <img
        src={productimageUrl}
        alt={`similar product ${productTitle}`}
        className="similaritem-image"
      />
      <h1 className="similaritem-heading">{productTitle}</h1>
      <p>by {productBrand}</p>
      <div className="similar-product-price">
        <p>Rs {productPrice}/-</p>
        <div className="rating-details">
          <p className="desc-rating">{productRating}</p>
          <img
            src="https://assets.ccbp.in/frontend/react-js/star-img.png"
            alt="star"
            className="star"
          />
        </div>
      </div>
    </li>
  )
}

export default SimilarProductItem
