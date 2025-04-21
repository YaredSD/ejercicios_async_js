function RandomNumber () {
    return Math.floor(Math.random() * 151) + 1;
    }
    
    const pokemonId = RandomNumber();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
    const randomImage = document.querySelector(".random-image");

    fetch(url)
    .then((res) => res.json())
    .then((data) => {
    
    const imageUrl = data.sprites.other["official-artwork"].front_default;
    console.log("Pokémon", imageUrl);
    
    if (imageUrl) {
    randomImage.src = imageUrl;
    randomImage.alt= data.name;
    } else {
    randomImage.alt = "Non-Available";
    randomImage.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png";
    randomImage.style.display = "none";
    }
    })
    
    .catch((error) => {
    console.error("Vaya! Ha ocurrido un error ", error);
    randomImage.alt = "Error en el servidor";
    });