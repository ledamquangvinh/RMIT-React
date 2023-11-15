import { Outlet, Link } from "react-router-dom"

export default () => {
  return(
    <>
      <nav>
        <ul>
          <Link to="/">Home</Link>
          <Link to='/booking'>Booking</Link>
        </ul>
      </nav>
      <Outlet />
    </>
  )
}