import React, { Component } from 'react'
import BaseLayout from '../src/components/layouts/BaseLayout';
import BasePage from '../src/components/layouts/BasePage';

import auth0Client from '../src/config/services/auth0';
import { withRouter } from 'next/router';

class Callback extends Component {
  constructor(props) {
    super(props)
  }
  async componentDidMount() {
    await auth0Client.handleAuthentication();
    this.props.router.push('/');
  }

  render() {
    return (
      <BaseLayout>
        <BasePage>
          <h1>verifying login data..</h1>
        </BasePage>
      </BaseLayout>
    )
  }
}
export default withRouter(Callback);