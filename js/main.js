let url = "http://192.168.100.115:3001/api/pokemon";
let mock = "mock/pokemon.json"

document.addEventListener("DOMContentLoaded", () => {
    SetUp();
  });

  function SetUp(){
    fetch(mock)
    .then((response) => response.json()).then((response) => {
      const pokedex = response;

      let container = document.querySelector("#card_container");

      pokedex.forEach((e)=>{
          let pokemon = CreateCard(e["POKEID"], e["NAME"], e["TYPE"], e["ICONS"])

        container.append(pokemon);
      })

    } )

    function CreateCard(pokemon_id, pokemon_name, pokemon_type, pokemon_img) {
      let newCard = document.createElement("div");
      newCard.classList.add("pokemon_card");

      let pokemon_data = document.createElement("div");
      pokemon_data.classList.add("pokemon_info");

        let ID = document.createElement("h1");
        ID.innerText = pokemon_id;
        
        pokemon_data.append(ID);

        let Name = document.createElement("h2");
        Name.innerText =  "Name: "+ pokemon_name;

        pokemon_data.append(Name);

        let Type = document.createElement("h2");
        let type_text = pokemon_type.replaceAll("'","");
        Type.innerText = "Type: " + type_text;
        

        pokemon_data.append(Type);

        let img = document.createElement("img");
        img.classList.add("pokemon_img");
        let pokemon_src = pokemon_img.replaceAll("'","");
        pokemon_src =  pokemon_src.replaceAll("[", "")
        pokemon_src =  pokemon_src.replaceAll("]", "")
        img.src = pokemon_src;

        pokemon_data.append(img);

      newCard.append(pokemon_data);
  
      return newCard;
    }
  }