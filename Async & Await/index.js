const photos = []

async function photoUpload() {
    let uploadStatus = new Promise( (resolve, reject) => {
        setTimeout( () => {
            photos.push("Profile Pic")
            resolve("Photo Uploaded")
        }, 3000)
    })
    let result = await uploadStatus
    console.log(result)
    console.log(photos.length)
}

photoUpload()



const apiUrl = "https://api.chucknorris.io/jokes/random"

/*async function fetchJokes() {
    const randomJokes = new Promise( (resolve, reject) => {
        fetch(apiUrl).then(response => response.json()).then(data => console.log(data))
    })
    let joke = await randomJokes
    console.log(joke)
}

fetchJokes()*/

async function getJoke() {
    const response = await fetch(apiUrl)
    const data = await response.json()
    console.log(data.value)
}

getJoke()