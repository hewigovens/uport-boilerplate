/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
/*-* Atoms *-*/
import Flex from 'atoms/Flex'
import Box from 'atoms/Box'
import Heading from 'atoms/Heading'
import Paragraph from 'atoms/Paragraph'
import Button from 'atoms/Button'
import Link from 'atoms/Link'
import Span from 'atoms/Span'
/* ------------------------------- Component -------------------------------- */
export default props => 
<Flex
direction={'row'} align={"center"} justify="space-evenly" bs={3} 
gradient={'blue'} gradientDir='145deg' color={['white']}
py={15}
>
  <Link to="/dashboard/projects" color={['blueLight']}>
    <Heading f={[3]} ts={'light'} level={[5]} display='inline' px={10}>
      Projects
    </Heading>
  </Link>
  <Link to="/dashboard/people" color={['blueLight']}>
    <Heading f={[3]} ts={'light'} level={[5]} display='inline' px={10}>
      People
    </Heading>
  </Link>
  <Link to="/dashboard/organizations" color={['blueLight']}>
    <Heading f={[3]} ts={'light'} level={[5]} display='inline' px={10}>
      Organizations
    </Heading>
  </Link>
</Flex>
