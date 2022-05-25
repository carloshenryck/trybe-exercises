const yt = new Promise((resolve) => {
  setTimeout(() => {
    resolve('videos from youtube');
  }, 2000);
})

const fb = new Promise((resolve) => {
  setTimeout(() => {
    resolve('posts from facebook');
  }, 4000);
})

Promise.all([yt, fb])
  .then(result => console.log(result));