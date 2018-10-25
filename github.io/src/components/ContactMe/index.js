import React from 'react'
import Wrapper from './Wrapper'
import Github from './my-socials/Github'
import Gist from './my-socials/Gist'
import GMail from './my-socials/GMail'
import Linkedin from './my-socials/Linkedin'

const ContactMe = () => (
  <Wrapper>
    <Github />
    <Linkedin />
    <GMail />
    <Gist />
  </Wrapper>
)

export default ContactMe
