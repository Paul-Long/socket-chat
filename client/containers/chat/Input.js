import React from 'react';
import PropTypes from 'prop-types';

class ChatInput extends React.PureComponent {
  render() {
    const {prefixCls, saveRef} = this.context;
    return (
      <div className={`${prefixCls}-input`}
           ref={saveRef('input')}
           contentEditable
      />
    )
  }
}

export default ChatInput;
ChatInput.contextTypes = {
  prefixCls: PropTypes.string,
  saveRef: PropTypes.func
};
