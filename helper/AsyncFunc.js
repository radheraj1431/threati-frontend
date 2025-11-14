import React, { Component } from 'react';
import Nprogress from 'nprogress';
import "./progress.css";

export default function asyncComponent(importComponent) {
  class AsyncFunc extends Component {
    constructor(props) {
      super(props);
      this.state = {
        component: null,
      };
      Nprogress.configure({ showSpinner: false });
      Nprogress.start();
    }
    componentWillUnmount(){
      this.mounted = false;
      this.setState({component:null})
    }
    async componentDidMount() {
      this.mounted = true;
      const { default: Component } = await importComponent();
      Nprogress.done();
      if (this.mounted) {
        this.setState({
          component: <Component {...this.props} />,
        });
      }
    }

    render() {
      const Component = this.state.component || <div/>;

      return (
        <div style={{height:"100%"}}>
          {Component}
        </div>
      );
    }
  }
  return AsyncFunc;
}
