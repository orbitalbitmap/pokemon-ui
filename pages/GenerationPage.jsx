import React from 'react'
import Page from '../components/Page'
import Generation from '../components/Generation'
import Title from '../components/Title'

export default () => {
  const generationList = [1, 2, 3, 4, 5, 6, 7, 8]
  return (
    <Page>
      <Title />
      {
        generationList
          ? generationList.map(generation => (
            <Generation key={generation} id={generation} />
          ))
          : (<div>Nothing here</div>)
      }
    </Page>
  )
}
