const app = "I don't do much.";

const token = '602f6fa862c1c909fa8c0fc60bb17e0efb7cba5e'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
