/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { connect } from 'react-redux';
import { compose, lifecycle, withProps } from 'recompose'
/* ------------------------- Internal Dependencies -------------------------- */
import { ProviderCard } from 'foundry'
import { fromEthers } from 'assimilation/symbiosis/selectors'
import { ethersBlockchainGetGasPriceRequest } from 'assimilation/symbiosis/actions'
/* ---------------------------- Module Package ------------------------------ */
const defaultProps = withProps(props=>({
  providerName: 'Infura'
}))
const queryLifecycle = lifecycle(
{
  componentDidMount()
  {
    this.props.ethersBlockchainGetGasPriceRequest({
      payload: {
        network: 'ropsten',
      },
      metadata: {
        delta: 'BlockchainGasPrice'
      }
    })
  }
})
const mapStateToProps = (state, props) => ({
    data: fromEthers.getDeltaData(state, 'BlockchainGasPrice')
  }
)

const mapDispatchToProps = (dispatch, props) => ({
  ethersBlockchainGetGasPriceRequest: (settings)=>dispatch(ethersBlockchainGetGasPriceRequest(settings)),
})

const Blocknumber = props => <span>{props.data}</span>

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  queryLifecycle,
  defaultProps
)(Blocknumber);