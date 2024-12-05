import { Link } from "react-router"

function NavBar({ cartCount }) {

  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.1/css/all.min.css" />
      <nav className="bg-blue-500 p-4 text-white flex justify-between">

        <Link to="/" className="text-lg font-bold">Home</Link>
        <Link to="/cart" className="relative text-lg flex items-center">
          <i className="fa fa-shopping-cart text-white text-2xl"></i>
          {/* Cart item count */}
          {cartCount > 0 && (
            <span className="absolute -top-4 left-2 right-0 bg-red-500 text-white text-xs rounded-full px-2 py-1">
              {cartCount}
            </span>
          )}
        </Link>
      </nav>

    </>

  )
}
export default NavBar