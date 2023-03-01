<script lang="ts">
    let name ="";
    let cost=0;
    let des="";
    let file=null;
    
</script>

<main>
    <div id="mydiv">
        <div id="forminputs">
            <div class="input-group flex-nowrap d-flex flex-column formelement">
                <label for="">isim <sup>(name)</sup>: </label>
                <input type="text" class="form-control w-75" bind:value={name}>
            </div>
            <div class="input-group flex-nowrap d-flex flex-column formelement">
                <label for="">fiyat<sup>(cost)</sup>: </label>
                <input type="text" class="form-control w-75" bind:value={cost}>
            </div>
            <div class="input-group flex-nowrap d-flex flex-column formelement">
                <label for="">Tanim<sup>(description)</sup>: </label>
                <input type="text" class="form-control w-75" bind:value={des}>
            </div>
            <div class="input-group flex-nowrap d-flex flex-column formelement">
                <label for="">resim<sup>(picture)</sup>: </label>
                <input type="text" class="form-control w-75" bind:value={file}>
            </div>
            <button type="button" class="btn btn-primary">Submit</button>
        </div>
    </div>
</main>

<style lang="sass">
    main
        height: 90%
        width: 100%        
    #mydiv
        height: 90%
        width: 100%
    .formelement
        padding-left: 21.5%
    #forminputs
        width: 50vw
        border-radius: 2%
        border: black 1px solid
        margin: auto
    button
        margin-top: 3%
        margin-left: 40%
        margin-bottom: 3% 
</style>
