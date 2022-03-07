import { useCart } from '../../hooks/useCart'
import classes from './Header.module.scss'
import {Link} from "react-router-dom"


export default function Header (props) {
  const {totalPrice} = useCart()

  return (
    <header>
      <Link to="/">
        <div className={classes.headerLogo}>
            <img width={40} height={40} src="/img/logo.png" alt="Logo" />
            <div className={classes.headerInfo}>
              <h3>React Shop</h3>
              <p>Магазин обуви</p>
            </div>
        </div>
      </Link>
      <ul className={classes.headerBasket}>
        <li onClick={props.onOpenCart}>
          <img width={18} height={18} src="/img/cart.svg" alt="Cart" />
          <span> {totalPrice} руб.</span>
        </li>
        <li>
          <Link to="/favorites">
            <img width={18} height={18} src="/img/heart.svg" alt="Favorite" />
          </Link>
        </li>
        <li>
          <Link to="/orders">
            <img width={18} height={18} src="/img/user.svg" alt="User" />
          </Link>
        </li>
      </ul>
    </header>
  )
}