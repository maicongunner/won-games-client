import Button from 'components/Button'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'

import * as S from './styles'
import Heading from 'components/Heading'
import Ribbon from 'components/Ribbon'

export type GameInfoProps = {
  title: string
  description: string
  price: string
}

const GameInfo = ({ title, description, price }: GameInfoProps) => (
  <S.Wrapper>
    <Heading color="black" lineBottom>
      {title}
    </Heading>

    <Ribbon>{`$${price}`}</Ribbon>

    <S.Description>{description}</S.Description>

    <S.ButtonWrapper>
      <Button icon={<AddShoppingCart />} size="large">
        Add to cart
      </Button>
      <Button icon={<AddShoppingCart />} size="large" minimal>
        Add to whishlist
      </Button>
    </S.ButtonWrapper>
  </S.Wrapper>
)

export default GameInfo
