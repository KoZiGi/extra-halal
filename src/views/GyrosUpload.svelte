<script lang="ts">
    import { text } from "svelte/internal";
    let name ="";
    let cost=0;
    let des="";
    let file=null;
    
</script>

<main>
    <form action="">
        <label for="name">isim<sup>(name)</sup>: </label>
        <input type="text" bind:value={name}>

        <label for="cost">fiyat<sup>(cost)</sup>: </label>
        <input type="text" bind:value={cost}>

        <label for="des">Tanim<sup>(description)</sup>: </label>
        <textarea bind:value={des} cols="30" rows="10"></textarea>

        <label for="file">resim<sup>(picture)</sup>: </label>
        <input type="file" bind:value={file}>

        <button type="button"></button>
    </form>
</main>

<style lang="sass">

</style>
