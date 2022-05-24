// haverá problemas, pois ao invocar a função, ele não esperará o timeout terminar
const loginUser = (email, password) => {
    setTimeout(() => {
        console.log('user logged!');
        return{ email };
    }, 1500);

    console.log('after setTimeout');
};

const user = loginUser('henryck@gmail.com', '123456');
console.log({ user });
