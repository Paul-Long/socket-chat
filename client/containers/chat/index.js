import React from 'react';
import PropTypes from 'prop-types';
import io from 'socket.io-client';
import Content from './Content';
import Tool from './tool';
import Input from './Input';
import Control from './Control';
import './style';

class Chat extends React.PureComponent {
  state = {
    message: [],
    value: ''
  };

  getChildContext() {
    return {
      prefixCls: this.props.prefixCls
    }
  }

  componentDidMount() {
    const socket = io();
    socket.on('receive chat', (msg) => {
      let message = this.state.message;
      this.setState({message: message.concat([msg])});
    });
    this.socket = socket;
  }

  handleClick = () => {
    this.socket.emit('send chat', this.state.value);
    this.setState({value: ''});
  };

  render() {
    const {message = []} = this.state;
    return (
      <div className='pl-chat'>
        <Content message={message} />
        <Tool />
        <Input />
        <Control />
      </div>
    )
  }
}

export default Chat;
Chat.propTypes = {
  prefixCls: PropTypes.string
};
Chat.defaultProps = {
  prefixCls: 'pl-chat'
};
Chat.childContextTypes = {
  prefixCls: PropTypes.string
};
