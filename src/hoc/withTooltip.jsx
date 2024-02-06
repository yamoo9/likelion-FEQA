import React from 'react';

function withTooltip(Component) {
  class AbstractLayer extends React.Component {
    state = {
      isShow: false,
    };

    show = () => {
      this.setState({
        isShow: true,
      });
    };

    hide = () => {
      this.setState({
        isShow: false,
      });
    };

    toggle = () => {
      this.setState((s) => ({
        ...s,
        isShow: !s.isShow,
      }));
    };

    render() {
      const { show, hide, toggle } = this;
      return (
        <Component
          isShow={this.state.isShow}
          show={show}
          hide={hide}
          toggle={toggle}
          {...this.props}
        />
      );
    }
  }

  return AbstractLayer;
}

export default withTooltip;
