import auth0 from 'auth0-js';

const webAuth = new auth0.WebAuth({
  domain: 'ppp-fcul.eu.auth0.com',
  clientID: 's72COBZTaRaKOkE5KeChHY5rOowYryWt',
  redirectUri: 'http://localhost:3000',
  responseType: 'token id_token',
  scope: 'openid profile'
});

let token = {};

function handleAuth(cb) {
  webAuth.parseHash((error, authResult) => {
    if (authResult && authResult.accessToken && authResult.idToken) {
      token.accessToken = authResult.accessToken;
      token.idToken = authResult.idToken;
      token.expiry = new Date().getTime() + authResult.expiresIn * 1000;
      cb();
    } else {
      console.log(error);
    }
  });
}

function isLogged() {
  return token.accessToken && new Date().getTime() < token.expiry;
}

function auth0Login() {
  webAuth.authorize();
}

function logUserOut() {
  token = {};
}

export { auth0Login, handleAuth, isLogged, logUserOut };
