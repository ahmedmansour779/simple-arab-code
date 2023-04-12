// first way

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => response.data.map((user) => console.log(user.name, user.address)))
//     .then((response) => console.log("api fetched"))
//     .catch((error) => console.error("error 404"));

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => response
//     .json()
//     .then((data) => data.map((user) => console.log(user.name, user.address)))
//     .then((response) => console.log("api fetched"))
//     .catch((error) => console.error("error 404")));

// second way

// async function get() {
//     const response = await fetch('https://jsonplacehholder.typicode.com/users');
//     const data = await response.json();
//     data.map((user) => console.log(user.name, user.address))
// };

// get()
//     .then((response) => console.log("api fetched"))
//     .catch((error) => console.error("error 404"));

// third way            (the best way)

// eslint-disable-next-line no-undef
// axios.get('https://jsonplaceholder.typicode.com/users')
// .then((response) => response.data.map(
//     (user) => console.log(user.name, user.address))
//     .catch((error) => console.error("error 404"))
//     );

