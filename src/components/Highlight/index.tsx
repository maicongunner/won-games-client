import Button from 'components/Button'
import * as S from './styles'

export type highLightProps = {
  title: string
  subTitle: string
  backgroundImage: string
  floatImage?: string
  buttonLabel: string
  buttonLink: string
}

const Highlight = ({
  title,
  subTitle,
  backgroundImage,
  floatImage,
  buttonLabel,
  buttonLink
}: highLightProps) => (
  <S.Wrapper backgroundImage={backgroundImage}>
    {!!floatImage && <S.FloatImage src={floatImage} alt={title} />}
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
