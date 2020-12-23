import Button from 'components/Button'
import * as S from './styles'

export type highLightProps = {
  title: string
  subTitle: string
  backgroundImage: string
  buttonLabel: string
  buttonLink: string
}

const Highlight = ({
  title,
  subTitle,
  backgroundImage,
  buttonLabel,
  buttonLink
}: highLightProps) => (
  <S.Wrapper backgroundImage={backgroundImage}>
    <S.WrapperContent>
      <S.Title>{title}</S.Title>
      <S.subTitle>{subTitle}</S.subTitle>
      <Button as="a" href={buttonLink}>
        {buttonLabel}
      </Button>
    </S.WrapperContent>
  </S.Wrapper>
)

export default Highlight
