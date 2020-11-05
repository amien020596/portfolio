import auth0 from 'auth0-js';

class Auth {
  constructor() {
    console.log('masuk ke auth')
    this.auth0 = new auth0.WebAuth({
      domain: 'dev-15p2r2aq.us.auth0.com',
      clientID: 'sZ9wppz9ZCvEq7pziETz3eGtAEZGq4Wb',
      redirectUri: 'http://localhost:3003/callback',
      responseType: 'token id_token',
      scope: 'openid'
    })
    this.login = this.login.bind(this);
  }

  login() {
    this.auth0.authorize();
  }

}
const auth0Client = new Auth();
export default auth0Client;