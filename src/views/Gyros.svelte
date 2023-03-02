<script lang="ts">
  import { each } from "svelte/internal";
  import GyrosCard from "./GyrosCard.svelte";
  import type { Gyros } from "../interfaces/gyros";
  import { onMount } from "svelte/types/runtime/internal/lifecycle";
  import { GetGyros } from "../services/gyrosService";
  let gyrosok: Gyros[];
  onMount(async()=>{
    gyrosok= await GetGyros();
  })
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
