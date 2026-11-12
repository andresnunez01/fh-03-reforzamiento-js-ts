import type { GiphyRandomResponse } from "../data/giphy.response";

const API_KEY = `EI3fpBTzhYIpPUA5SoSzd6ZfKaEoIKX2`;



const createImgInsideDOM = ( url: string) => {
    const imgElement = document.createElement(`img`);
    imgElement.src = url;

    document.body.append(imgElement)
}

const getRandomGifUrl = async () => {

    const response = await fetch(
        `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`)

        const {data} = (await response.json()) as GiphyRandomResponse;

        const url = data.images.original.url

        return url;


}

getRandomGifUrl().then(createImgInsideDOM)