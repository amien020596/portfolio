import auth0 from 'auth0-js';
import Cookies from 'js-cookie';
import jwt from 'jsonwebtoken';

class Auth {
  constructor() {
    this.auth0 = new auth0.WebAuth({
      domain: 'dev-15p2r2aq.us.auth0.com',
      clientID: 'sZ9wppz9ZCvEq7pziETz3eGtAEZGq4Wb',
      redirectUri: 'http://localhost:3003/callback',
      responseType: 'token id_token',
      scope: 'openid profile'
    })

    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
  }

  handleAuthentication() {
    return new Promise((resolve, reject) => {
      this.auth0.parseHash((error, authResult) => {
        if (authResult && authResult.accessToken && authResult.idToken) {
          this.setSession(authResult);
          resolve();
        } else if (error) {
          reject(error);
          console.error(error)
        }
      })
    })
  }

  setSession(authResult) {
    // save token here
    let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    Cookies.set('access_token', authResult.accessToken);
    Cookies.set('id_token', authResult.idToken);
    Cookies.set('user', authResult.idTokenPayload);
    Cookies.set('expires_at', expiresAt);

  }

  login() {
    this.auth0.authorize();
  }

  logout() {
    // clear data token
    Cookies.remove('access_token');
    Cookies.remove('id_token');
    Cookies.remove('user');
    Cookies.remove('expires_at');

    this.auth0.logout({
      returnTo: 'http://localhost:3003',
      clientID: 'sZ9wppz9ZCvEq7pziETz3eGtAEZGq4Wb'
    })
  }

  verifyToken(token) {
    if (token) {
      const decodedToken = jwt.decode(token);
      const expiresAt = decodedToken.exp * 1000;
      return (decodedToken && new Date().getTime() < expiresAt) ? decodedToken : undefined;
    }
  }

  isAuthenticated() {
    // check whether the current time is past the 
    // access token expiry time
    let expirestAt = Cookies.getJSON('expires_at');
    return new Date().getTime() < expirestAt;
  }

  clientAuth() {
    const token = Cookies.getJSON('id_token');
    return this.verifyToken(token);
  }

  serverAuth(req) {
    if (req.headers.cookie) {

      const tokenAtCookies = req.headers.cookie.split(';').find(c => c.trim().startsWith('id_token='));

      if (!tokenAtCookies) {
        return undefined;
      }
      const token = tokenAtCookies.split('=')[1];
      return this.verifyToken(token);
    }
    return undefined;
  }

}
const auth0Client = new Auth();
export default auth0Client;