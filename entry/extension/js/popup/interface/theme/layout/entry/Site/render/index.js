// @flow
/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { Absolute, Box } from 'particles'
/* ------------------------- Internal Dependencies -------------------------- */
import { SiteMainRoutes, SiteHeaderRoutes } from 'store/routes'
import { SiteHeader, SiteMain, SiteFooter } from 'layout/zones'
import { BlockBranding, BlockTop }  from 'workshop/blocks'
import { FooterContext }  from 'workshop/sections'

/* ------------------------ Initialize Dependencies ------------------------- */
/* --------------------------- Styled Components ---------------------------- */

/* ---------------------------- Module Package ------------------------------ */
const EntrySite = props=> (
<Absolute left right top bottom> 
  <Box><BlockBranding/></Box>
  {/* Header Zone */}
  {!props.zones.header ? null: (
    <SiteHeader {...props.header.layout} >
      <SiteHeaderRoutes/>
    </SiteHeader>
  )}


  {/* Main Zone */}
  {!props.zones.main ? null: (
    <SiteMain {...props.main.layout}>
      <SiteMainRoutes/>
    </SiteMain>
  )}

  {/* Footer Zone */}
  {/*{!props.zones.footer ? null :(
    <SiteFooter {...props.footer.layout}>
      <FooterContext/>
    </SiteFooter>
  )}*/}
</Absolute>)

export default EntrySite;
