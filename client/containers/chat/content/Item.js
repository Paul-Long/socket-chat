import React from 'react';
import PropTypes from 'prop-types';

class Item extends React.PureComponent {
  render() {
    const {content = {}} = this.props;
    const {prefixCls} = this.context;
    return (
      <div className={`${prefixCls}-content-item`}>
        <div>{`${content.socketID} : `}</div>
        <div dangerouslySetInnerHTML={{__html: content.html}} />
      </div>
    )
  }
}

export default Item;
Item.contextTypes = {
  prefixCls: PropTypes.string,
  socketID: PropTypes.string
};
