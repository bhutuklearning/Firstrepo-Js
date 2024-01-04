fetch("https://api.github.com/users/bhutuklearning")
.then((response)=> {
    return response.json();
})
.then((data) => {
    console.log(data);
    console.log(data.created_at);
    console.log(data.created_at.toLocaleString());
})
.catch( (err) => {console.log(err)});