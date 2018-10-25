import React from 'react'
import Helmet from 'react-helmet'
import Wrapper from './Wrapper'
import ContactMe from 'components/ContactMe'
import MyImage from 'components/MyImage'
import BannerName from 'components/BannerName'

const Home = () => (
  <React.Fragment>
    <Helmet>
      <title>Welcome borvelt.github.io</title>
    </Helmet>
    <Wrapper>
      <MyImage />
      <BannerName />
      <ContactMe />
    </Wrapper>
  </React.Fragment>
)

export default Home
