const loadUser = () => {
    fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then(data => getUser(data))
}

const getUser = data =>{
    //console.log(data);
    const ul = document.getElementById('user');
    for(const user of data.results){
        //console.log(user);
        const li = document.createElement('li');
        li.innerText = `user name: ${user.name.title}. ${user.name.first} ${user.name.last}
        email: ${user.email}`;
        ul.appendChild(li);
    }
}