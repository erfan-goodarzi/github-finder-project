class UI {
    constructor() {
        this.profile = document.querySelector('.profile');
    }

    progithub(user) {
        this.profile.innerHTML = `
        <div class="profile mb-3 mt-5">
        <div class="container">
        
        <div class="pro" style="width: 74%;" >
        
        <img src="${user.avatar_url}" alt="img" class="mb-3 img-porfile">
        <a href="${user.html_url}" class="btn btn-primary" style="width:58%;" target="_blank">go to github user</a>
    
        </div>
       
            
            <ul class="list-group mt-4" style="margin-left: 0rem;
            width: 43%;">
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
    
    


        `;
    }
    clearprofile(){
        this.profile.innerHTML = '';
    }

    showalert(msg,className){
        let searching = document.querySelector('.searching');
        let search = document.querySelector('.search');
        const alert = document.createElement('div');
        alert.className = className;
        alert.textContent = msg;

        searching.insertBefore(alert, search);
    }
}