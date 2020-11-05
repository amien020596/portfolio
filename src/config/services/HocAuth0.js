import { Auth0Provider } from '@auth0/auth0-react';
export const Auth0 = (props) => {
  return (
    <Auth0Provider
      domain="dev-15p2r2aq.us.auth0.com"
      clientId="sZ9wppz9ZCvEq7pziETz3eGtAEZGq4Wb"
      redirectUri="http://localhost:3003/callback"
    >
      {props.children}
    </Auth0Provider>
  )
}
