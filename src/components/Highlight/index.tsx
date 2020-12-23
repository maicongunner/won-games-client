import Button from 'components/Button'
import * as S from './styles'

export type highLightProps = {
  title: string
  subTitle: string
  buttonLabel: string
  buttonLink: string
}

const Highlight = ({
  title,
  subTitle,
  buttonLabel,
  buttonLink
}: highLightProps) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
    <S.subTitle>{subTitle}</S.subTitle>
    <Button as="a" href={buttonLink}>
      {buttonLabel}
    </Button>
  </S.Wrapper>
)

export default Highlight
