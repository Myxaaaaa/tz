import axios from "axios"
import { useEffect, useState } from "react"

export default function App() {
  

  const [pokemonData, setPokemonData] = useState([])


  useEffect(() => {
   async function getPokemon() {
    try {
      const response = await axios.get("https://pokeapi.co/api/v2/pokemon/")
      setPokemonData(response.data.results)
    } catch (error) {
      console.error( error);
    }
  }
  getPokemon()
  },[])
  return (
   <div style={
    {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      height: "95vh",
    }
   }>
     <div style={
      {
        display: "flex",
        alignItems: "center",
        justifyContent:"space-between",
        width: "600px",
        flexWrap: "wrap",
        gap:"10px"
      }
    }>
        {pokemonData.map((el:any, index) => (
          <div style={
            {
              display: "flex",
            alignItems:"center",
            width:"150px",
            justifyContent:"space-between",
            background: "#9edef9",
            borderRadius: "20px",
            padding: "10px",
            }
          } key={index}>
            <img style={
              {
                width: "40px",
                height: "40px",
              }
            } src={el.url} alt="" />
            <h4 style={
              {
                // width: "100px",
              }
            }>{el.name}</h4>
          </div>
        ))}

    </div>
   </div>
  )
}
