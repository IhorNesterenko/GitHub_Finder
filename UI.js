class UI {
  constructor(){
    this.profileDiv = document.querySelector('#profile');
  }

  displayAlert(){
    if(document.querySelector('.mainCont').firstChild.role !== "alert"){
      var alert = document.createElement('div');
      alert.className = "alert alert-danger";
      alert.role="alert";
      alert.innerText = "User not found";

      document.querySelector('.mainCont').insertBefore(alert, document.querySelector('.mainCont').firstChild);

      setTimeout(() => {
        document.querySelector('.alert').remove();
      },2000);
    }
  }

  clearProfile(){
    this.profileDiv.innerHTML = '';
  }

  displayUser(user){
    var base = `<div class="card">
      <div class="card-body">
        <div class="row">
          <div class="col-4 imgHolder">
          <img src="${user.avatar_url}" class="img-fluid"></img>
          <a href="${user.html_url}" target="_blank" class="btn btn-primary mt-1">View profile</a>
          </div>
          <div class="col-8">
            <span class="badge badge-success">Public repos: ${user.public_repos}</span>
            <span class="badge badge-danger">Public gists: ${user.public_gists}</span>
            <span class="badge badge-warning">Followers: ${user.followers}</span>
            <span class="badge badge-info">Following: ${user.following}</span>
            <ul class="list-group mt-5">
              <li class="list-group-item">Company: ${user.company}</li>
              <li class="list-group-item">Website/Blog: ${user.blog}</li>
              <li class="list-group-item">Location: ${user.location}</li>
              <li class="list-group-item">Member since: ${user.created_at}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>`;

    this.profileDiv.innerHTML = base;
  }
}
