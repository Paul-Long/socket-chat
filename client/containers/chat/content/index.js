import React from 'react';
import PropTypes from 'prop-types';
import {findDOMNode} from 'react-dom';
import Item from './Item';

class Content extends React.PureComponent {
  componentDidUpdate() {
    const content = findDOMNode(this.content);
    // let scrollBottom = content.scrollHeight - content.scrollTop - content.clientHeight;
    // if (content.scrollTop === 0 || scrollBottom < 50) {
    content.scrollTop = content.scrollHeight - content.clientHeight;
    // }
  }

  setRef = (r) => {
    const {saveRef} = this.context;
    saveRef('content')(r);
    this.content = r;
  };

  render() {
    const {message = []} = this.props;
    return (
      <div className={`${this.context.prefixCls}-content`}
           ref={this.setRef}
      >
        {message.map((m, i) => (<Item key={i} content={m} />))}
      </div>
    )
  }
}

export default Content;
Content.contextTypes = {
  prefixCls: PropTypes.string,
  saveRef: PropTypes.func
};
