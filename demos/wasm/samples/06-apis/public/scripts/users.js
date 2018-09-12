if (navigator.credentials && navigator.credentials.preventSilentAccess) {
    const lnkUser = document.getElementById('lnkUser');
    lnkUser.addEventListener('click', () => {
        const cred = new PasswordCredential({
          id:       'spugachev@gmail.com',
          name:     'Sergey Pugachev',
          password: 'Hello!',
          iconURL:  'https://avatars1.githubusercontent.com/u/1313155?s=40&v=4'
        });
  
        navigator.credentials.store(cred);
    });
  
    navigator.credentials.get({
      password: true,
      mediation: 'optional'
    }).then(cred => {
      console.log(cred);
    }).catch((err) => {
      console.log(err);
    });    
}