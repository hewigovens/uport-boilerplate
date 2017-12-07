/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { connect } from 'react-redux';
import { compose, lifecycle, withProps } from 'recompose'
/* ------------------------- Internal Dependencies -------------------------- */
import { ProviderCard } from 'foundry'
import { fromEthers } from 'assimilation/symbiosis/selectors'
import { ethersBlockchainGetBlockNumberRequest } from 'assimilation/symbiosis/actions'
/* ---------------------------- Module Package ------------------------------ */
const defaultProps = withProps(props=>({
  providerName: 'Infura'
}))
const queryLifecycle = lifecycle(
{
  componentDidMount()
  {
    this.props.ethersBlockchainGetBlockNumberRequest({
      payload: {
        network: 'ropsten',
      },
      metadata: {
        delta: 'BlockchainBlockNumber'
      }
    })
  }
})
const mapStateToProps = (state, props) => ({
    data: fromEthers.getDeltaData(state, 'BlockchainBlockNumber')
  }
)

const mapDispatchToProps = (dispatch, props) => ({
  ethersBlockchainGetBlockNumberRequest: (settings)=>dispatch(ethersBlockchainGetBlockNumberRequest(settings)),
})

const Blocknumber = props => <span>{props.data}</span>

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  queryLifecycle,
  defaultProps
)(Blocknumber);