<script lang="ts">
  import { each } from "svelte/internal";
  import GyrosCard from "./GyrosCard.svelte";
  import type { Gyros } from "../interfaces/gyros";
  let gyrosok: Gyros[];
</script>

<div>
  <h2>Extra-Halal ételek (No Haram)</h2>
  <div id="menu" class="d-flex flex-wrap">
    {#each gyrosok as gyros}
      <GyrosCard gyros={gyros}/>
    {/each}
  </div>
</div>

<style lang="sass">

</style>
