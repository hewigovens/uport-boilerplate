/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { connect } from 'react-redux';
import { compose, lifecycle, withProps } from 'recompose'
/* ------------------------- Internal Dependencies -------------------------- */
import { ProviderCard } from 'foundry'
import WalletGeneratedDisplay from 'assimilation/display/ethers/EthersWalletGeneratedDisplay'
import { fromEthers } from 'assimilation/symbiosis/selectors'
import { ethersWalletCreateRandomRequest } from 'assimilation/symbiosis/actions'
/* ---------------------------- Module Package ------------------------------ */
const defaultProps = withProps(props=>({
  providerName: 'Infura'
}))
const queryLifecycle = lifecycle(
{
  componentDidMount()
  {
    this.props.ethersWalletCreateRandomRequest({
      metadata: {
        delta: 'WalletRandomRequest'
      }
    })
  }
})
const mapStateToProps = (state, props) => ({
    data: fromEthers.getDeltaData(state, 'WalletRandomRequest')
  }
)

const mapDispatchToProps = (dispatch, props) => ({
  ethersWalletCreateRandomRequest: ()=>dispatch(ethersWalletCreateRandomRequest({
      metadata: {
        delta: 'WalletRandomRequest'
      }
    })),
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  queryLifecycle,
  defaultProps
)(WalletGeneratedDisplay);