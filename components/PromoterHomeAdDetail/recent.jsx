import React from 'react'
import DetailedAd from './DetailedAd'
import LinkAd from './LinkAd'
import { Container } from './styles'
import VisualAd from './VisualAd'

const recent = () => {
  return (
    <Container>
      <LinkAd />
      <VisualAd />
      <DetailedAd />
      <LinkAd />
      <VisualAd />
      <DetailedAd />
    </Container>
  )
}

export default recent