let items = [];
//fetching api of random jokes
fetch("https://api.chucknorris.io/jokes/random")
//converting to JSON
    .then(res => res.json())
    .then((result) => {
        //putting result in empty array
        items = result;
        //pushing joke value into p element with joke id
        document.getElementById("joke").innerHTML = items.value;
    })
    .catch((error) => {
        console.log(error);
    });