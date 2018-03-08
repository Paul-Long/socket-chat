import React from 'react';
import PropTypes from 'prop-types';

class Tool extends React.PureComponent {
  render() {
    const {prefixCls} = this.context;
    return (
      <div className={`${prefixCls}-tool`}>

      </div>
    )
  }
}

export default Tool;
Tool.contextTypes = {
  prefixCls: PropTypes.string
};
