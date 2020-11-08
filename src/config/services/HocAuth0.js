import { Auth0Provider } from '@auth0/auth0-react';
export const Auth0 = (props) => {
  return (
    <Auth0Provider
      domain="dev-15p2r2aq.us.auth0.com"
      clientId="sZ9wppz9ZCvEq7pziETz3eGtAEZGq4Wb"
      redirectUri="http://localhost:3003"
      // responseType="token id_token"
      audience="https://dev-15p2r2aq.us.auth0.com/api/v2/"
      scope="read:current_user update:current_user_metadata"
    // useRefreshTokens={true}
    >
      {props.children}
    </Auth0Provider>
  )
}
