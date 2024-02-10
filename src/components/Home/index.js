// Write your code here
import Header from '../Header'

import './index.css'

const Home = () => (
  <div className="page">
    <Header />
    <hr className="hr-line" />
    <div className="home-card">
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
        alt="home"
        className="home-img"
      />
    </div>
  </div>
)

export default Home
