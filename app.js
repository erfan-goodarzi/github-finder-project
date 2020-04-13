let github = new GitHub();
let ui = new UI();

let btnsearch = document.querySelector('#searchUser');
let input = document.querySelector('.text-box');
input.addEventListener('keyup', e=>{
    if(input.value === ''){
        ui.clearprofile();
    }
});
btnsearch.addEventListener('click' , e =>{
    let search = input.value;
    if(search === ''){
        ui.showalert('please search the user' , 'alert alert-danger');
        setTimeout(()=>{
            ui.clearAlert();
        },2000);
        
    }else{
        github.usergit(search).then(data =>{
            if(data.profile.message){
                ui.showalert('user not found' , 'alert alert-warning');
                ui.clearprofile();
            }else{
                ui.progithub(data.profile);
            }
        })
    }
});
