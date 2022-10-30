<script lang="ts">
    import { onMount } from "svelte";
    let carousell: HTMLDivElement
    
    onMount(() => {
        let div = carousell.querySelectorAll<HTMLDivElement>("#box")
        let counter = 0
        setInterval(() => {
            carousell.parentElement?.scroll({
                left: div[counter].offsetLeft
            })
            counter = counter >= 2 ? 0 : counter + 1
        }, 2000)
    })
</script>

<div id="carrousel">
    <div bind:this={carousell} id="container">
        <div id="box">
            <img src="/immagini/uno.jpg" alt="immagine">
            <div id="text">
                <span>Attività fine anno 2021-2022</span>
            </div>
        </div>
        <div id="box">
            <img src="/immagini/due.jpg" alt="immagine">
            <div id="text">
                <span>Libri di testo 2021-2022</span>
            </div>
        </div>
        <div id="box">
            <img src="/immagini/tre.jpg" alt="immagine">
            <div id="text">
                <span>Certificazione Inglese</span>
            </div>
        </div>
    </div>
</div>

<style>
    #carrousel {
        position: relative;
        width: 90%;
        aspect-ratio: auto 372 / 128;
        overflow: scroll;
        box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
        scroll-behavior: smooth;
    }

    #container {
        width: 300%;
        height: 100%;
        display: flex;
        overflow-x: scroll;
    }

    #box {
        position: relative;
        width: calc(100% / 3);
        min-height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #box img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    #text {
        position: absolute;
        left: 0px;
        bottom: 0px;
        width: 100%;
        height: 40%;
        background-color: rgba(0, 0, 0, 0.50);
        display: flex;
        justify-content: flex-start;
        align-items: center;
        color: white;
    }

    #text span {
        width: calc(100% - 1rem);
        padding-left: 1rem;
    }
</style>