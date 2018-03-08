import React from 'react';
import PropTypes from 'prop-types';
import SendBtn from './SendBtn';

class Control extends React.PureComponent {
  render() {
    const {prefixCls} = this.context;
    return (
      <div className={`${prefixCls}-control`}>
        <SendBtn />
      </div>
    )
  }
}

export default Control;
Control.contextTypes = {
  prefixCls: PropTypes.string
};
