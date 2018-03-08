import React from 'react';
import PropTypes from 'prop-types';

class Content extends React.PureComponent {
  render() {
    const {message = []} = this.props;
    return (
      <div className={`${this.context.prefixCls}-content`}>
        {message.map((m, i) => (
          <div key={i}>
            {m}
          </div>
        ))}
      </div>
    )
  }
}

export default Content;
Content.contextTypes = {
  prefixCls: PropTypes.string
};
