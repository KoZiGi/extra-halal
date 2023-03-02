<script lang="ts">
  import { each } from "svelte/internal";
  import type { Gyros } from "../interfaces/gyros";
  let gyrosok: Gyros[];
</script>

<div>
  <h2>Extra-Halal ételek (No Haram)</h2>
  <div id="menu" class="d-flex flex-wrap">
    {#each gyrosok as gyros}
      <div class="card" style="width: 18rem;">
        <div class="card-header">
          <h5 class="card-title">{gyros.name}</h5>
        </div>
        <img src={gyros.image} class="card-img-top" alt="..." />
        <div class="card-body">
          <div class="flex" />
          <p class="card-text">{gyros.description}</p>
        </div>
        <div class="card-footer">
          <div class="input-group mb-3">
            <input
              type="number"
              class="form-control"
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
              value="0"
              min="0"
            />
            <button
              class="btn btn-outline-secondary"
              type="button"
              id="button-addon2">Rendel</button
            >
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>

<style lang="sass">

</style>
