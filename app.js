const githubAPI = new GitHubAPI();
const input = document.querySelector('#input');

input.addEventListener('keyup', e => {
  var userInput = e.target.value;
  if(userInput !== ""){
    githubAPI.getData(userInput)
      .then(res => {
        if(res.user.message === "Not Found"){
          console.log('no user with such name');
        } else {
          console.log(res.repos);
        }
      });
  }
});
