/* ------------------------- External Dependencies -------------------------- */
import _ from 'lodash'
import React from 'react';
import { compose, lifecycle, withProps, withState, withHandlers, renderComponent } from 'recompose'
import { connect } from 'react-redux'

import { 
  databaseWriteRequest,
  databaseReadRequest,
  howlHashDomRequest,
} from 'store/departments/actions'

/*---*--- Recompose ---*---*/
const defaultState = withState('hash', 'setHash', 123123)
const defaultProps = withProps({
  pointerEnhanced: 'test'
})

/*---*--- Lifecylce Methods ---*---*/
const queryLifecycle = lifecycle({
  /*--- Component Mount ---*/
  componentDidMount() {
    this.props.databaseReadRequest()
    this.props.howlHashDomRequest()
    console.log(this.props)
    
  },

  /*--- Component Update ---*/
  componentDidUpdate(prevProps) {
    
  }
})

/*---*--- Redux ---*---*/
const mapStateToProps = (state, props)=> {
  return {

  };
}
const mapDispatchToProps = (dispatch, props) => {
  return {
  databaseReadRequest: ()=>dispatch(databaseReadRequest({
    payload:{},
    metadata: {
      entity: 'mutate',
      branch: ['request']
    } 
  })),
  howlHashDomRequest: ()=>dispatch(howlHashDomRequest({payload:{}, metadata: {delta:'test'}}))
}}


const ComponentRender = (props,{hash}) => { 
return (<div onClick={()=>props.setHash('tesdfsdfsdf')} >Testing<br/>{props.hash}</div>)

}


/*-- Export Form ---*/
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  defaultState,
  defaultProps,
  queryLifecycle,
)(ComponentRender);


// export default connect(mapStateToProps, mapDispatchToProps)(reduxForm(config)(FormRender))