function fetchEgg(chicken) {
    return Promise.resolve(`${chicken} => π₯`);
}
fetchEgg('π').then((egg) => console.log(egg));

function fryEgg(egg) {
  return Promise.resolve(`${egg} => π³`);   
}

function getChicken() {
    return Promise.reject(new Error('μΉν¨μ κ°μ§κ³  μ¬ μ μμ!'));
  //return Promise.resolve(`πͺ΄ => π`);    
}

getChicken()
.catch(() => 'π') 
.then(fetchEgg)
.then(fryEgg)
.then(console.log);