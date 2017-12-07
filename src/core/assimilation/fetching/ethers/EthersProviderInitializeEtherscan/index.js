/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { connect } from 'react-redux';
import { compose, lifecycle, withProps } from 'recompose'
/* ------------------------- Internal Dependencies -------------------------- */
import { ProviderCard } from 'foundry'
import { fromEthers } from 'assimilation/symbiosis/selectors'
import { ethersNewProviderEtherscanRequest } from 'assimilation/symbiosis/actions'
/* ---------------------------- Module Package ------------------------------ */

const defaultProps = withProps(props=>({
  providerName: 'Etherscan'
}))
const queryLifecycle = lifecycle(
{
  componentDidMount()
  {
    this.props.ethersNewProviderEtherscanRequest({
      payload: {
        network: 'ropsten',
      },
      metadata: {
        delta: 'ProviderEtherscan'
      }
    })
  }
})
const mapStateToProps = (state, props) => ({
    data: fromEthers.getDeltaData(state, 'ProviderEtherscan')
  }
)

const mapDispatchToProps = (dispatch, props) => ({
  ethersNewProviderEtherscanRequest: (settings)=>dispatch(ethersNewProviderEtherscanRequest(settings)),
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  queryLifecycle,
  defaultProps,
)(ProviderCard);
