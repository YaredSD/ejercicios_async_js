fetch("https://thronesapi.com/api/v2/Characters") 
    .then((res) => res.json())
    .then((data) => {
        console.log(data);

        const characterList = document.getElementById("character-list");
        const characterImage = document.querySelector(".character-image");
        const characters = data.results || data;

const defaultOption = document.createElement("option");
defaultOption.value = "";
defaultOption.textContent = "Lista de personajes";
characterList.appendChild(defaultOption);

        for (const character of characters) {
            const option = document.createElement("option");
            option.value = character.id;
            option.textContent = character.fullName;
            characterList.appendChild(option);
        }
        characterList.addEventListener("change", function () {
            const characterId = characterList.value;

            if (characterId) {
                fetch(`https://thronesapi.com/api/v2/Characters/${characterId}`)
                    .then((res) => res.json())
                    .then((characterData) => {
                        console.log(characterData);
                        if (characterData.imageUrl) {
                            characterImage.src = characterData.imageUrl;
                            characterImage.style.display = "block";
                        } else {
                            characterImage.style.display = "none";
                        }
                    })
                    .catch((error) => {
                        console.error("Ha ocurrido un error al intentar encontrar el personaje seleccionado ", error);
                        characterImage.style.display = "none";
                    });
            } else {
                characterImage.style.display = "none";
            }
        });
    })
    .catch((error) => {
        console.error("Vaya! Ha ocurrido un error ", error);
    });