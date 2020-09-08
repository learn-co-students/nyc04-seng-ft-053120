import React from 'react'
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'

const LoadingScreen = () => {
  return (
    <Segment>
      <Dimmer active inverted>
        <Loader>Loading...</Loader>
      </Dimmer>
      <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
    </Segment>
  )
}

export default LoadingScreen