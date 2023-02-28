<script lang="ts">
    let name ="";
    let cost=0;
    let des="";
    let file=null;
    
</script>

<main>
    <form>
        <div class="mb-3">
            <label class="form-control" for="name">isim<sup>(name)</sup>: </label>
            <input class="form-text" type="text" bind:value={name}>
        </div>
        <div class="mb-3">
            <label class="form-control" for="cost">fiyat<sup>(cost)</sup>: </label>
            <input class="form-text" type="text" bind:value={cost}>
        </div>
        <div class="mb-3">
            <label class="form-control" for="des">Tanim<sup>(description)</sup>: </label>
            <textarea class="form-text" bind:value={des} cols="30" rows="10"></textarea>
        </div>
        <div class="mb-3">
            <label class="form-control" for="file">resim<sup>(picture)</sup>: </label>
            <input class="form-text" type="file" bind:value={file}>
        </div>
        <button type="button" class="btn btn-primary">Submit</button>
      </form>
</main>

<style lang="sass">

</style>
