export const getPeer = async (user) => {
    const url = `https://api.opendota.com/api/players/${user}/peers`
    const response = await fetch(url)

    if(!response.ok) return ''

    const data = await response.json()
    return data[0]
}