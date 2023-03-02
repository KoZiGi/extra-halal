<script lang="ts">
    import type { Gyros } from "../interfaces/gyros";
    export let gyros:Gyros
    let gyrosamount:number=0
    function Order(){
        alert("bruh")
    }

</script>

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
          placeholder="0"
          bind:value={gyrosamount}
          min="0"
        />
        <button
          class="btn btn-outline-secondary"
          type="button"
          on:click={()=>{Order()}}
          >
          Rendel
          </button>
      </div>
    </div>
  </div>