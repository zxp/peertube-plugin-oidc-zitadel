function register ({ registerHook, registerSettingsScript, registerClientRoute, peertubeHelpers }) {
  
    registerHook({
      target: 'action:login.init',
      handler: () => {
        const params = new URL(location.href).searchParams;
        if (!params.get('username')) {
          document.querySelector('a.external-login-block').click();
          //document.getElementsByClassName('peertube-button-link')[0].click(); 
        }
      }
    })
  }
  
  export {
    register
  }
