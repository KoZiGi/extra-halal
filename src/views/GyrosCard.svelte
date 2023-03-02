<script lang="ts">
    import type { Gyros } from "../interfaces/gyros";
    export let gyros:Gyros
    let gyrosamount:number=1
    function Order(){
        
    }

</script>

<div class="card" style="width: 18rem;">
    <div class="card-header">
        <h4 class="card-title">{gyros.name}</h4>
    </div>
    <img src={gyros.image} class="card-img-top" alt="..." />
    <div class="card-body">
        <p class="card-text">{gyros.description}</p>
        <div class="flex justify-content-between">
            <h5>{gyros.price*gyrosamount}FT</h5>   <h6 class="text-muted">kcal:{gyros.kcal}</h6>
        </div>
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