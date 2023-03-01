<script lang="ts">
    import { each } from "svelte/internal";
    import type {Gyros} from "../interfaces/gyros";
    let gyrosok:Gyros[]
    
</script>
<style lang="sass">

</style>
<div>
    <h2>Extra-Halal ételek (No Haram)</h2>
    <div id="menu" class="d-flex flex-wrap">
        {#each gyrosok as gyros}
        <div class="card" style="width: 18rem;">
            <img src={gyros.image} class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">{gyros.name}</h5>
              <div class="flex"></div>
              <p class="card-text">{gyros.description}</p>
              
            </div>
          </div>
        {/each}
    </div>
</div>