require("dotenv").config();
const token = process.env.GITHUB_TOKEN;
const username = process.env.USER_NAME;

//Function to fetch user info
async function getUserInfo() {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`, {
         method:'GET',
         headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      console.error("error");
    } else {
      const data = await response.json();
          return data
    }
  } catch (error) {
    console.log(error);
  }
}
getUserInfo().then(userinfo=>{
    if(userinfo){
        console.log(userinfo);
        
    }
});

//List Repositories for a user
async function listRepositories() {
    try {
        const response=await fetch(`https://api.github.com/users/${username}/repos`,{
            method:'GET',
            headers:{
                'Authorization':`Bearer ${token}`,
            }
        })
        if(!response.ok){
            console.error("error")
        }else{
            const data=await response.json()
            return data
        }
    } catch (error) {
        console.log(error);
        
    }
}
listRepositories().then(listrepo=>{
    if(listrepo){
        console.log(listrepo);
        
    }
})

//create a new repository
async function createRepository(){
    try {
        const repoData={
            name:'new-repo',
            private:false
        }
        const response=await fetch(`https://api.github.com/user/repos`,{
            method:'POST',
            headers:{
                'Authorization':`Bearer ${token}`,
                'Content-Type':'application/json'
            },
            body:JSON.stringify(repoData)
        })
        if(!response.ok){
            console.error("error")
        }else{
            const data=await response.json();
            return data
        }
    } catch (error) {
        console.log(error);
        
    }
}
createRepository().then(repoinfo=>{
    if(repoinfo){
        console.log(repoinfo);
        
    }
})

//create an issue in the repository
async function createIssue(){
    try {
        const issueData={
            title:'new issue title',
            description:'description of the issue'
        }
        const response=await fetch(`https://api.github.com/repos/${username}/repo-name/issues`,{
            method:'POST',
            headers:{
                'Authorization':`Bearer ${token}`,
                'Content-Type':'application/json'
            },
            body:JSON.stringify(issueData)
        })
        if(!response.ok){
            console.error('error')
        }else{
            const data=await response.json()
            return data
        }
    } catch (error) {
        console.log(error);
        
    }
}
createIssue().then(issueinfo=>{
    if(issueinfo){
        console.log(issueinfo);
        
    }
})

//list pull requests in a repository

async function pullRequests(){
    try {
        const response=await fetch(`https://api.github.com/repos/${username}/repo-name/pulls`,{
            method:'GET',
            headers:{
                'Authorization':`Bearer ${token}`,
            }
        })
        if(!response.ok){
            console.error('error')
        }else{
            const data=await response.json()
            return data
        }
    } catch (error) {
        console.log(error);
        
    }
}
pullRequests().then(pullrequests=>{
    if(pullrequests){
        console.log(pullrequests);
        
    }
})




