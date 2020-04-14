let github = new GitHub();
let ui = new UI();

let btnsearch = document.querySelector('#searchUser');
let input = document.querySelector('.text-box');
input.addEventListener('keyup', e=>{
    if(input.value === ''){
        btnsearch.removeAttribute('disabled');
        ui.clearprofile();
        
    }
})
btnsearch.addEventListener('click' , e =>{
    document.querySelector('.loaded').style.display = 'block';
    setTimeout(porfilegithub,3000)
 
    
})

function porfilegithub(){
    let search = input.value;
    if(search === ''){
        ui.showalert('please search the user' , 'alert alert-danger');
        document.querySelector('.loaded').style.display = 'none';
        
        
    }else{
        github.usergit(search).then(data =>{
            if(data.profile.message){
                ui.showalert('user not found' , 'alert alert-warning');
                document.querySelector('.loaded').style.display = 'none';
                ui.clearprofile();
            }else{
                document.querySelector('.loaded').style.display = 'none';
                ui.progithub(data.profile);
                btnsearch.setAttribute('disabled', false);
            }
        })
    }
}