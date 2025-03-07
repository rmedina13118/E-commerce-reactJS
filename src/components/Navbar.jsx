import { Link, NavLink } from 'react-router-dom'
import Logo from '../assets/logo.png'
import iconCart from '../assets/cartIcon.svg'

function Navbar () {
  return (
    <nav className='flex justify-between px-20 items-center max-w-[100vw] bg-[#ffb700] text-black font-bold text-2xl '>
      <img src={Logo} width={100} height={100} className='w-20' />
      <ul className='flex flex-row gap-8'>
        <li>
          <NavLink to={'/'}>Home</NavLink>
        </li>
        <li>
          <NavLink to={'/products'}>Productos</NavLink>
        </li>
        <li>
          <NavLink to={'/contacto'}>Contacto</NavLink>
        </li>
        <li>
          <NavLink to={'/carrito'}>
            <img src={iconCart} />
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
