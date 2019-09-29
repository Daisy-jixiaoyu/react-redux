import React, { Fragment } from 'react';
// import store from './store'

import { connect } from 'react-redux'

const App = (props) => {
  let { value, list, inputChange, btClick } = props
  return (
    <Fragment>
      <div>hello</div>
      <input placeholder={value} onChange={inputChange} />
      <div>{value}</div>
      <button onClick={btClick}>按钮</button>
      {
        list.map((item, index) => {
          return <div key={index}>{item}</div>
        })
      }
    </Fragment>

  );
}

const stateToprops = (state) => {
  return {
    value: state.value,
    list: state.list
  }
}

const dispatchToProps = (dispatch) => {
  return {
    inputChange(e) {
      let action = {
        type: 'change_type',
        value: e.target.value
      }
      dispatch(action)
      console.log(e.target.value)
    },
    btClick() {
      let action = { type: 'add_item' }
      dispatch(action)
      console.log(333)
    }
  }
}
export default connect(stateToprops, dispatchToProps)(App);


