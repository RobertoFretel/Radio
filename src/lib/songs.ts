import { io } from "socket.io-client"
import { writable } from "svelte/store"

let { hostname } = window.location
let loc = `http://${hostname}:8000`
const socket = io(loc)

socket.on("audios", data => {
    audios.set(getListAudios(data))
})



let getListAudios = (songs: Array<string>) => {
    let updated = songs.map((filename: string) => {
        let { hostname } = window.location
        return {
            url: `http://${hostname}:5173/audio/` + filename,
            filename: filename
        }
    })
    
    return updated
}

export let audios = writable<Array<{
    url: string,
    filename: string
}>>()