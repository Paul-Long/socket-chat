import React from 'react';
import PropTypes from 'prop-types';
import Socket from 'simple-socketio/client';
import Content from './content';
import Tool from './tool';
import Input from './input';
import Control from './control';
import './style';

class Chat extends React.PureComponent {
  state = {
    message: [],
    value: '',
    username: '',
    userNum: 0
  };

  getChildContext() {
    return {
      prefixCls: this.props.prefixCls,
      send: this.handleSend,
      saveRef: this.saveRef,
      join: this.join
    }
  }

  componentDidMount() {
    this.socket = Socket()
      .channel('聊天室', msg => {
        const message = this.state.message;
        this.setState({message: message.concat([msg])});
      });
  }

  handleSend = () => {
    const html = this['input'].innerHTML || '';
    if (!html) {
      return false;
    }
    this.socket.emit({
      username: this.state.username,
      html
    });
    this['input'].innerHTML = '';
  };

  join = (userName) => {
    this.socket.join(userName, data => {
      this['inputMask'].style.display = 'none';
      this.setState(data);
    });
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
  send: PropTypes.func,
  saveRef: PropTypes.func,
  join: PropTypes.func
};
