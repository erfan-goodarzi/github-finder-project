let github = new GitHub();
let ui = new UI();

let btnsearch = document.querySelector('#searchUser');
let input = document.querySelector('.text-box');

btnsearch.addEventListener('click' , e =>{
    let search = input.value;
    if(search === ''){
        ui.clearprofile();
    }else{
        github.usergit(search).then(data =>{
            if(data.profile.message){
                showalert();
            }else{
                ui.progithub(data.profile);
            }
        })
    }
})