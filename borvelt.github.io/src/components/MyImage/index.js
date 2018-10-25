import React from 'react'
import Image from 'components/Image'
import Wrapper from './Wrapper'
import me from 'images/me.png'

const MyImage = () => (
  <Wrapper>
    <Image src={me} />
  </Wrapper>
)

export default MyImage
