import React from 'react';
import io from 'socket.io-client';
import {Button, Input} from 'antd';

class App extends React.PureComponent {
  state = {
    message: [],
    value: ''
  };

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
    const {message = [], value} = this.state;
    return (
      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
        <Input type="text"
               value={value}
               onChange={e => this.setState({value: e.target.value})}
               onPressEnter={this.handleClick}
        />
        <Button disabled={value === ''}
                onClick={this.handleClick}
        >Send</Button>
        {message.map((m, i) => <span key={i}>{m}</span>)}
      </div>
    )
  }
}

export default App;
