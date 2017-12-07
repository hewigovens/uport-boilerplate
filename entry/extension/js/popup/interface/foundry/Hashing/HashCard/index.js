/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import {Heading, Image, Paragraph, Container, Section} from 'atomic'
export default props => {
console.log(props)

return <div>
  <Heading level={[3]} f={[2]}>{props.hashes.hash}</Heading>
</div>
}