import { Link } from 'react-router-dom'
import './style.sass'

const Navbar : React.FC = () => {
  return(
    <ul className='nav'>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/products">Products</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contact">Contact Us</Link>
      </li>
    </ul>
  )
}

export default Navbar