<script lang="ts">
    import type {Gyros} from '../interfaces/gyros';
    import axios from 'axios';
    import { PostGyros } from '../services/gyrosService';
    let object={
        values:{
            name:"",
            price:0,
            kcal:0,
            description:"",
            image: ""
        },
        table: "gyrosok"
    } 

    
    
</script>

<main>
    <div id="login" class="col-lg-7 col-md-9 col-11 border border-dark rounded p-3 mx-auto">
        <h2>Gyros feltöltés: </h2>
        <div class="mb-3">
            <label for="name" class="form-label">isim (name)</label>
            <input type="text" id="name" class="form-control" bind:value={object.values.name} />
        </div>
        <div class="mb-3">
            <label for="cost" class="form-label">fiyat (cost)</label>
            <input type="number" id="cost" class="form-control" bind:value={object.values.price} />
        </div>
        <div class="mb-3">
            <label for="kcal" class="form-label">kalori (kcal)</label>
            <input type="number" id="kcal" class="form-control" bind:value={object.values.kcal} />
        </div>
        <div class="mb-3">
            <label for="des" class="form-label">tanim (description)</label>
            <textarea id="des" class="form-control" bind:value={object.values.description} />
        </div>
        <div class="mb-3">
            <label for="pic" class="form-label">resim (picture)</label>
            <input type="file" id="pic" class="form-control " bind:value={object.values.image}>
        </div>
        <button type="button" class="btn btn-primary" on:click={()=>PostGyros(object)}>Upload</button>
    </div>
</main>

<style lang="sass">
</style>
