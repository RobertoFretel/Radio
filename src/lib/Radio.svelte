<script lang="ts">
    import Carrousel from "./Carrousel.svelte";
    import { audios } from "./songs"
    import Programmazione from "./Programmazione.svelte";

    let loaded: boolean = false
    let url: string = ""

    audios.subscribe(value => {
        if(value != undefined) {
            url = value[0].url
            loaded = true
        }
    })
</script>

<div id="container">
    <br>
    <Carrousel></Carrousel>
    <br>
    <h4>Ultima registrazione</h4>
    {#if loaded == true}
        <audio src={url} controls></audio>
    {/if}
    <h4>Tabella Programmazione</h4>
    <Programmazione></Programmazione>
    
    <footer>
        Sito creato da Roberto Fretel
    </footer>
</div>

<style>
    #container {
        position: absolute;
        width: 100%;
        min-height: 80%;
        left: 0px;
        top: 30%;
        background-color: white;
        transition: all .5s;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }

    audio {
        display: flex;
        justify-content: cneter;
        margin-bottom: 2rem;
    }

    footer {
        width: calc(100% - 4rem);
        height: calc(20% - 4rem);
        padding: 2rem;
        text-align: center;
    }

    @media only screen and (min-width: 1000px){
        #container {
            width: calc(100% - 30%);
            padding: 0px 15%;
        }
    }
</style>