class UI {
    constructor() {
        this.profile = document.querySelector('.profile');
    }

    progithub(user) {
        this.profile.innerHTML = `
        <div class="profile mb-3 mt-5">
        <div class="container">
        <div class="row">
        <div class="col-4">
            <img src="${user.avatar_url}" alt="img" class=" mb-3">
            <a href="${user.html_url}" class="btn btn-primary btn-block" style="width: 136%;" target="_blank">go to github user</a>
        </div>
        <div class="col-8">
            
            <ul class="list-group mt-1" style="margin-left: 9rem;">
            <li class="list-group-item">Username : ${user.login}</li>
            <li class="list-group-item">Name : ${user.name}</li>
            <li class="list-group-item">location : ${user.location}</li>
            <li class="list-group-item">profile repos : ${user.public_repos}</li>
            <li class="list-group-item">profile followers : ${user.followers}</li>
            <li class="list-group-item">profile following : ${user.following}</li>
            <li class="list-group-item">type : ${user.type}</li>
            </ul>
        </div>
    </div>
        </div>
        
    </div>
    <h3 class="page-heading mb-3">Lastest repos</h3>
    <div id="repos">

    </div>

        `;
    }
    clearprofile(){
        this.profile.style.display = "none"
    }
}