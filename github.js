class GitHubAPI {
  constructor(){
    this.clientID = '87dd5ea217abc8e55584';
    this.clientSecret = '35d06e4c135876b9bf0e27ad3793326c2de23b4e';
  }

  async getData(user){
    const userResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.clientID}&client_secret=${this.clientSecret}`);
    const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?client_id=${this.clientID}&client_secret=${this.clientSecret}`);

    const userData = await userResponse.json();
    const reposData = await reposResponse.json();

    return {
      user: userData,
      repos: reposData
    }
  }
}
