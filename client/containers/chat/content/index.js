import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

class Content extends React.PureComponent {
  render() {
    const {message = []} = this.props;
    return (
      <div className={`${this.context.prefixCls}-content`}>
        {message.map((m, i) => (<Item key={i} content={m} />))}
      </div>
    )
  }
}

export default Content;
Content.contextTypes = {
  prefixCls: PropTypes.string
};
