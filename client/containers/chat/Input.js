import React from 'react';
import PropTypes from 'prop-types';

class ChatInput extends React.PureComponent {
  render() {
    const {prefixCls} = this.context;
    return (
      <div className={`${prefixCls}-input`} contentEditable>

      </div>
    )
  }
}

export default ChatInput;
ChatInput.contextTypes = {
  prefixCls: PropTypes.string
};
