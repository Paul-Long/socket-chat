import React from 'react';
import PropTypes from 'prop-types';

class Control extends React.PureComponent {
  render() {
    const {prefixCls} = this.context;
    return (
      <div className={`${prefixCls}-control`}>

      </div>
    )
  }
}

export default Control;
Control.contextTypes = {
  prefixCls: PropTypes.string
};
