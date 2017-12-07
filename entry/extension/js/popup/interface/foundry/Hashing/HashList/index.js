/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import query from 'apollo/query/HashLatest.gql'
import { GraphRequest, GraphList } from 'containers'
/* ------------------------------- Component -------------------------------- */
export default props => <GraphList
  query="hashesLatest"
  gql={query}
  variables={{
    type: 'activity',
    boundaries:{limitToLast: 10},
    order: {reverse: true}}
    }
  itemStyled={{
    w: [1]
  }}
  foundry={'HashCard'}
/>