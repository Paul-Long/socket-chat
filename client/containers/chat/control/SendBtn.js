import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'antd';

function SendBtn(props, context) {
  const {send} = context;
  return (
    <Button onClick={send} type='primary'>Send</Button>
  )
}

export default SendBtn;
SendBtn.contextTypes = {
  send: PropTypes.func
};
