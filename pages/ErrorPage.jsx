import React from 'react'
import NotFound from '../components/NotFound'
import Page from '../components/Page'
import TitleBar from '../components/TitleBar'
import GoBack from '../components/GoBack'

export default () => (
  <Page>
    <TitleBar />
    <GoBack />
    <NotFound message="Sorry, looks like the page you are looking for does not exist." />
  </Page>
)
