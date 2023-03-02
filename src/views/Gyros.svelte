<script lang="ts">
  import { each } from "svelte/internal";
  import GyrosCard from "./GyrosCard.svelte";
  import type { Gyros } from "../interfaces/gyros";
  import { GetGyros } from "../services/gyrosService";
  let data = GetGyros();
</script>

<div>
  <h2>Extra-Halal ételek (No Haram)</h2>
  <div id="menu" class="d-flex flex-wrap">
    {#await data}
    {:then gyrosok} 
      {#each gyrosok as gyros}
        <GyrosCard gyros={gyros}/>
      {/each}
    {/await}
  </div>
</div>

<style lang="sass">

</style>
