class GitHub{
    constructor() {
        this.client_id = "b775e236b5c3b0b586d3"
        this.client_secret = "b50654d3d2effc5b60c2eb1c3ea3b15fcb49f4a7"
        this.repos_count = 5;
        this.repos_sort = 'created: acs';
    }

  async usergit(username){
        let showpro =  await fetch(`https://api.github.com/users/${username}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        let profile = await showpro.json();

        return{
            profile
        }
    }

}