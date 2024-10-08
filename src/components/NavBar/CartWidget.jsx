import carrito from "../../assets/carrito.png"

const CartWidget = () => {
  return (
    <div>
      <img className="carrito" src={carrito} alt="" />
      <p className="numero">1</p>
    </div>
  )
}

export default CartWidget