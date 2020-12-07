window.addEventListener('DOMContentLoad', async ()=>{
    let respuesta = await axios.get("https://swapi.dev/api/people/");
    console.log(respuesta);
});