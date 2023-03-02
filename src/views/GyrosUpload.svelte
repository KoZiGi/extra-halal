<script lang="ts">
    let gyros={
        name:"",
        cost:0,
        des:"",
        file:null
    }
    
</script>

<main>
    <div id="login" class="col-lg-7 col-md-9 col-11 border border-dark rounded p-3 mx-auto">
        <h2>Gyros feltöltés: </h2>
        <div class="mb-3">
            <label for="name" class="form-label">isim (name)</label>
            <input type="text" id="name" class="form-control" bind:value={gyros.name} />
        </div>
        <div class="mb-3">
            <label for="cost" class="form-label">fiyat (cost)</label>
            <input type="number" id="cost" class="form-control" bind:value={gyros.cost} />
        </div>
        <div class="mb-3">
            <label for="des" class="form-label">tanim (description)</label>
            <textarea id="des" class="form-control" bind:value={gyros.des} />
        </div>
        <div class="mb-3">
            <label for="pic" class="form-label">resim (picture)</label>
            <input type="file" id="pic" class="form-control " bind:value={gyros.file}>
        </div>
        <button class="btn btn-primary">Upload</button>
    </div>
</main>

<style lang="sass">
</style>
