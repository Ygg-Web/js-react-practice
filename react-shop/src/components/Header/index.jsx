import classes from './Header.module.scss'

export default function Header (props) {
  return (
    <header>
      <div className={classes.headerLogo}>
        <img width={40} height={40} src="/img/logo.png" alt="Logo" />
        <div className={classes.headerInfo}>
          <h3>React Shop</h3>
          <p>Магазин обуви</p>
        </div>
      </div>
      <ul className={classes.headerBasket}>
        <li onClick={props.onOpenCart}>
          <img width={18} height={18} src="/img/cart.svg" alt="Cart" />
          <span>  1205 руб.</span>
        </li>
        <li>
          <img width={18} height={18} src="/img/user.svg" alt=" " />
        </li>
      </ul>
    </header>
  )
}