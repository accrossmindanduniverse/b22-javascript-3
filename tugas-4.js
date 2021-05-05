const fetch = require('node-fetch');

const getUsersName = () => {
  fetch('https://jsonplaceholder.typicode.com/users').then((res) => {
    (res.json()).then((json) => {
      json.filter((data) => {
        console.log(data.name)
      })
    })
  }).catch((err) => {
    console.log(err)
  })
}
getUsersName()