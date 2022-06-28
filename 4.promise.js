function runInDelay(seconds) {
  return new Promise((resolve, reject) => {
      if(!seconds || seconds < 0) {
          reject(new Error('seconds가 0보다 작음'))  
      }
    setTimeout(() => resolve, seconds * 1000)
  });
}

runInDelay()
.then(() => console.log('타이머 완료!'))
.catch(console.error)
.finally(() => console.log('끝났다!')); 

try {
  runInDelay(()=>{
    console.log('타이머완료');
}, 2);

} catch(error) {}