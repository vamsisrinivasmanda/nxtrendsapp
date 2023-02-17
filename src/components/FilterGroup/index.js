import './index.css'
import {BsSearch} from 'react-icons/bs'

const FiltersGroup = props => {
  const {
    categoryOptions,
    categoryClick,
    changeInput,
    ratingClick,
    ratingsList,
    resetFilterData,
  } = props
  const onclickCategory = categoryId => {
    categoryClick(categoryId)
  }
  const onclickRating = ratingId => {
    ratingClick(ratingId)
  }
  const searchchangeInput = event => {
    changeInput(event)
  }
  const clearFilterData = () => {
    resetFilterData()
  }
  return (
    <div className="filters-group-container">
      {/* Replace this element with your code */}
      <div className="input-container">
        <input
          type="search"
          placeholder="search"
          className="input"
          onKeyDown={searchchangeInput}
        />
        <BsSearch />
      </div>
      <h1 className="heading">Category</h1>
      <ul className="category-container">
        {categoryOptions.map(eachCategory => (
          <li className="category-list" id={eachCategory.categoryId}>
            <button
              type="button"
              className="category-btn"
              onClick={() => onclickCategory(eachCategory.categoryId)}
            >
              <p className="category-desc">{eachCategory.name}</p>
            </button>
          </li>
        ))}
      </ul>
      <h1 className="heading">Ratings</h1>
      <ul className="rating-card">
        {ratingsList.map(eachrating => (
          <li className="rating-list" id={eachrating.ratingId}>
            <button
              type="button"
              className="rating-button"
              onClick={() => onclickRating(eachrating.ratingId)}
            >
              <img
                src={eachrating.imageUrl}
                alt={`rating ${eachrating.ratingId}`}
                className="rating-image"
              />
            </button>
            <p className="desc">&up</p>
          </li>
        ))}
      </ul>
      <button
        className="clear-filter-button"
        type="button"
        onClick={clearFilterData}
      >
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
