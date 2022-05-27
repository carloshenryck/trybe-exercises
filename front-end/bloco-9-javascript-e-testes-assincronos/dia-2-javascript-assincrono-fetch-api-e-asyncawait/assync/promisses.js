const loginUser = (email, password) => {
  return new Promise((resolve, reject) => {
    const error = false;

    if(error) {
      reject(new Error('error in login!'));
    }

    console.log('user logged!');
    resolve({email});
  });
}

const getUserVideos = (email) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('getUserVideos')
      resolve(['video1', 'video2', 'video3']);
    }, 2000);
  })
}

const getVideoDetails = (video) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ title: 'video title'});
    }, 2500);   
  })
}

loginUser('henryck@gmail.com', '1234567')
  .then(user => getUserVideos(user.email))
  .then(videos => getVideoDetails(videos[0]))
  .then(videoDetails => console.log(videoDetails))
  .catch(error => console.log(error));