import { gql } from '@apollo/client'

export const HightlightFragment = gql`
  fragment HightlightFragment on ComponentPageHighlight {
    title
    subtitle
    background {
      url
    }
    floatImage {
      url
    }
    buttonLabel
    buttonLink
    alignment
  }
`
