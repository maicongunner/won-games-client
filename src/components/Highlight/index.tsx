import Button from 'components/Button'
import * as S from './styles'

export type HighlightProps = {
  title: string
  subTitle: string
  backgroundImage: string
  floatImage?: string
  buttonLabel: string
  buttonLink: string
  alignment?: 'right' | 'left'
}

const Highlight = ({
  title,
  subTitle,
  backgroundImage,
  floatImage,
  buttonLabel,
  buttonLink,
  alignment = 'right'
}: HighlightProps) => (
  <S.Wrapper backgroundImage={backgroundImage} alignment={alignment}>
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
