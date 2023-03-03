<script lang="ts">
    import type { Gyros } from "../interfaces/gyros";
    import {CurrentUser} from '../stores';
    export let gyros:Gyros
    let gyrosamount:number=1
    function AddToCart(){
      $CurrentUser.cart.push(
          {
            GID:gyros.ID,
            amount:gyrosamount
          }
        )
      $CurrentUser.cart = $CurrentUser.cart;
      localStorage.setItem('extrahalal', JSON.stringify($CurrentUser))
    }

</script>

<div class="card m-2" style="width: 18rem;">
    <div class="card-header">
        <h4 class="card-title mb-0">{gyros.name}</h4>
    </div>
    <img src={gyros.image} class="card-img-top" alt="..." />
    <div class="card-body">
        <p class="card-text">{gyros.description}</p>
        <div class="d-flex flex-row justify-content-between">
            <div class="col-5">{new Intl.NumberFormat('hu-HU', {style:'currency', currency:'HUF'}).format(gyros.price*gyrosamount)}</div>   <div class="col-5 text-muted text-end">kcal:{gyros.kcal}</div>
        </div>
    </div>
    {#if $CurrentUser.isGuest!=true}
    <div class="card-footer">
      <div class="input-group mb-3">
        <input
          type="number"
          class="form-control"
          placeholder="0"
          bind:value={gyrosamount}
          min="1"
        />
        <button
          class="btn btn-outline-secondary"
          type="button"
          on:click={AddToCart}
          >
          Sepete
          </button>
      </div>
    </div>
    {/if}
</div>