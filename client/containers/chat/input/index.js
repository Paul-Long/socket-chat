import React from 'react';
import PropTypes from 'prop-types';
import {Button, Input} from 'antd';

class ChatInput extends React.PureComponent {
  state = {
    value: ''
  };
  handleClick = () => {
    const {join} = this.context;
    if (typeof join === 'function') {
      join(this.state.value);
    }
  };

  render() {
    const {value} = this.state;
    const {prefixCls, saveRef} = this.context;
    const className = `${prefixCls}-input`;
    return (
      <div className={className}>
        <div className={`${className}-edit`}
             ref={saveRef('input')}
             contentEditable
        />
        <div className={`${className}-mask`}
             ref={saveRef('inputMask')}
        >
          <Input style={{width: 200, marginRight: 10}}
                 value={value}
                 onChange={e => this.setState({value: e.target.value})}
          />
          <Button onClick={this.handleClick}>Join</Button>
        </div>
      </div>
    )
  }
}

export default ChatInput;
ChatInput.contextTypes = {
  prefixCls: PropTypes.string,
  saveRef: PropTypes.func,
  join: PropTypes.func
};
