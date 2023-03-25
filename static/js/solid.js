const auth = {
  session: null,
  login: async function () {
    if (!this.session) {
      const { default: { getSession } } = await import('@inrupt/solid-client-authn-browser');
      this.session = getSession();
    }

    if (!this.session.info.isLoggedIn) {
      try {
        await this.session.login({
          oidcIssuer: 'https://solidcommunity.net', // Change this to your preferred Solid OIDC issuer
          redirectUrl: window.location.href, // After login, the user will be redirected back to the current page
        });
      } catch (error) {
        console.error('Error during login:', error);
      }
    } else {
      console.log('User is already logged in.');
    }
  },
  logout: async function () {
    if (this.session && this.session.info.isLoggedIn) {
      try {
        await this.session.logout();
        console.log('User logged out.');
      } catch (error) {
        console.error('Error during logout:', error);
      }
    } else {
      console.log('User is not logged in.');
    }
  },
};

document.addEventListener('DOMContentLoaded', async function () {
  const loginButton = document.getElementById('login-button');
  const logoutButton = document.getElementById('logout-button');

  if (loginButton) {
    loginButton.addEventListener('click', async function () {
      await auth.login();
    });
  }

  if (logoutButton) {
    logoutButton.addEventListener('click', async function () {
      await auth.logout();
    });
  }
});
