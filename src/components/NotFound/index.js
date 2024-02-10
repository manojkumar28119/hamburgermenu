/* eslint-disable react/no-unescaped-entities */
// Write your code here
import Header from '../Header'
import './index.css'

const NotFound = () => (
  <div className="page">
    <Header />
    <hr className="hr-line" />

    <div className="not-found-card">
      <img
        src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
        alt="not found"
        className="img-not-found"
      />
      <h1 className="not-fnd-h1">Lost Your Way?</h1>
      <p className="text-not-fnd">
        Sorry, we cannot find that page. You will find lots to explore on the
        home page
      </p>
    </div>
  </div>
)

export default NotFound
