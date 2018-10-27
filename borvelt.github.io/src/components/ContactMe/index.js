import React from 'react'
import Wrapper from './Wrapper'
import Github from './my-socials/Github'
import Gist from './my-socials/Gist'
import Medium from './my-socials/Medium'
import GMail from './my-socials/GMail'
import Linkedin from './my-socials/Linkedin'

const ContactMe = () => (
  <Wrapper>
    <Github />
    <Linkedin />
    <Medium />
    <GMail />
    <Gist />
  </Wrapper>
)

export default ContactMe
