fetch('https://pokeapi.co/api/v2/pokemon/25')

//GET
.then(response => response.json()) //Encadenacion de promesas
.then(data => {     //Se toma el then encadenado y los datos

    let element = document.getElementById('elem')
    element.innerHTML = `
    <p>${data.name}</p>
    <img src='${data.sprites.front_default}'/>
    <p>${data.id}</p>
    `;

    console.log(data)
})

//POST
const newPost = {
    title :'Nuevo Post',
    body:'Este es un ejemplo de un post',
    userId: 1
}


const button = document.getElementById('button')
button.addEventListener('click',() => {
    fetch('https://jsonplaceholder.typicode.com/posts',{
        method: 'POST',
        body: JSON.stringify(newPost),//para convertir a formato JSON
        headers: {
            "Content-type": "application/json"
        }
    })
    
        .then(res => res.json())
        .then(datoPost => console.log(datoPost))
        .catch(err => console.log(err))
    

})

//GET

const button2 = document.getElementById('button2')
button2.addEventListener('click',()=>{
    const newPost = {
        title :'Post con PUT',
        body:'Este es un ejemplo de un PUT',
        userId: 2
    }

    fetch('https://jsonplaceholder.typicode.com/posts/1',{
            method: 'PUT',
            body: JSON.stringify(newPost),
            headers: {
                "Content-type": "application/json"
            }
    })
        .then(res => res.json())
        .then(datoPost => console.log(datoPost))
        .catch(err => console.log(err))
})
