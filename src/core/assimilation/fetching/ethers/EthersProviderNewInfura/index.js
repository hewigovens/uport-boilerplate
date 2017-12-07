/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { connect } from 'react-redux';
import { compose, lifecycle, withProps } from 'recompose'
/* ------------------------- Internal Dependencies -------------------------- */
import { ProviderCard } from 'foundry'
import { fromEthers } from 'assimilation/symbiosis/selectors'
import { ethersNewProviderInfuraRequest } from 'assimilation/symbiosis/actions'
/* ---------------------------- Module Package ------------------------------ */
const defaultProps = withProps(props=>({
  providerName: 'Infura'
}))
const queryLifecycle = lifecycle(
{
  componentDidMount()
  {
    this.props.ethersNewProviderInfuraRequest({
      payload: {
        network: 'ropsten',
      },
      metadata: {
        delta: 'ProviderInfura'
      }
    })
  }
})
const mapStateToProps = (state, props) => ({
    data: fromEthers.getDeltaData(state, 'ProviderInfura')
  }
)

const mapDispatchToProps = (dispatch, props) => ({
  ethersNewProviderInfuraRequest: (settings)=>dispatch(ethersNewProviderInfuraRequest(settings)),
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  queryLifecycle,
  defaultProps
)(ProviderCard);
