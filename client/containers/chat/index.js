import React from 'react';
import PropTypes from 'prop-types';
import io from 'socket.io-client';
import Content from './content';
import Tool from './tool';
import Input from './Input';
import Control from './control';
import './style';

class Chat extends React.PureComponent {
  state = {
    message: [],
    value: '',
    socketID: ''
  };

  getChildContext() {
    return {
      prefixCls: this.props.prefixCls,
      socketID: this.state.socketID,
      send: this.handleSend,
      saveRef: this.saveRef
    }
  }

  componentDidMount() {
    const socket = io();
    socket.on('receive chat', (msg) => {
      let message = this.state.message;
      this.setState({message: message.concat([msg])});
    });
    socket.on('connect', () => {
      this.setState({socketID: socket.id});
    });
    this.socket = socket;
  }

  handleSend = () => {
    const html = this['input'].innerHTML || '';
    if (!html) {
      return false;
    }
    this.socket.emit('send chat', {
      socketID: this.state.socketID,
      html
    });
    this['input'].innerHTML = '';
  };

  saveRef = (name) => (node) => {
    this[name] = node;
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
  prefixCls: PropTypes.string,
  socketID: PropTypes.string,
  send: PropTypes.func,
  saveRef: PropTypes.func
};
