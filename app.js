const githubAPI = new GitHubAPI();
const ui = new UI();
const input = document.querySelector('#input');

input.addEventListener('keyup', e => {
  var userInput = e.target.value;
  if(userInput !== ""){
    githubAPI.getData(userInput)
      .then(res => {
        if(res.user.message === "Not Found"){
          console.log('no user with such name');
          ui.displayAlert();
        } else {
          console.log(res.user);
          ui.displayUser(res.user);
          ui.displayRepos(res.repos);
        }
      });
  }else {
    ui.clearProfile();
  }
});
