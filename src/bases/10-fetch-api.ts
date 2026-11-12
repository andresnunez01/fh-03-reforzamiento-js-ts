import type { GiphyRandomResponse } from "../data/giphy.response";

const API_KEY = `EI3fpBTzhYIpPUA5SoSzd6ZfKaEoIKX2`;

const myRequest = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`)

const createImgInsideDOM = ( url: string) => {
    const imgElement = document.createElement(`img`);
    imgElement.src = url;

    document.body.append(imgElement)
}
myRequest.then( (response) => response.json())
.then( ({data}: GiphyRandomResponse) => {
    const imageUrl = data.images.original.url;

    createImgInsideDOM(imageUrl)
})
.catch( err => {
    console.error(err)
})