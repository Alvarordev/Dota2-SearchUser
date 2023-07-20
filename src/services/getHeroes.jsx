export const getHeroes = async (query) => {
    const url = `https://api.opendota.com/api/players/${query}/heroes`
    const response = await fetch(url)

    if(!response.ok) return ''

    const data = await response.json()
    const heroes = data

    return heroes
}
