/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import Flex from 'atoms/Flex'
import Heading from 'atoms/Heading'
import Button from 'atoms/Button'
import Link from 'atoms/Link'
import DrawerOpen from 'containers/drawer/DrawerOpen'
import IdentityCredentialsRequest from 'assimilation/fetching/identity/IdentityCredentialsRequest'
/* ------------------------------- Component -------------------------------- */
export default props =>
<Flex
  direction={['column', 'row']} align={"stretch"} justify="center"
  bg={['blue']} gradient={['blue']} gradientDir='45deg'color={['blueLight']}
  bs={[0]} pos='relative'
>
  <Flex align="center" justify="left" w={[1, 1, 0.1]} pl={[15]} py={[7]} direction={['row']} >
    <Link to="/"><Heading color={'white'} level={4} margin={'0'} fontSize={[3,4]} fontWeight={'100'}>dApp</Heading></Link>
  </Flex>
  
  <Flex align="center" w={[1, 1, 0.80]} justify="center" py={[15]} >
    <IdentityCredentialsRequest avatar/>
  </Flex>

  <Flex align="center" justify='center' bg={['blueDark']} py={[10]} color='white' w={[1, 1, 0.1]} textAlign="center">
    <DrawerOpen><Heading f={[2]} level={[4]}><a>Menu</a></Heading></DrawerOpen>
  </Flex>
  
</Flex>
