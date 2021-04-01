import { ShoppingCart } from '@styled-icons/material-outlined/ShoppingCart'

import * as S from './styles'

export type CartIconProps = {
  quantity?: number
}

const CartIcon = ({ quantity = 0 }: CartIconProps) => (
  <S.Wrapper>
    <ShoppingCart aria-label="Shopping Cart" size={30} />
    {quantity > 0 && <S.Badge aria-label="Cart Items">{quantity}</S.Badge>}
  </S.Wrapper>
)

export default CartIcon
