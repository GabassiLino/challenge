const getPokemons = async () => {
    let resData = null
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=400')
    const data = await response.json()

    resData = data.results
    console.log('POKESSSS!!', resData)

    return resData
}

export default getPokemons