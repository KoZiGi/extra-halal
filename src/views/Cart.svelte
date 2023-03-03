<script lang="ts">
    import type { Gyros } from "../interfaces/gyros";
    import { PostOrder } from "../services/cartService";
    import { GetGyros } from "../services/gyrosService";
    import {CurrentUser} from '../stores';
    let Cart:Promise<Gyros[]> = GetGyros();
    function DeleteFromCart(cartId:number){
        console.log(cartId);
        $CurrentUser.cart.splice(cartId, 1);
        $CurrentUser.cart = $CurrentUser.cart;
        localStorage.setItem("extrahalal", JSON.stringify($CurrentUser));
    }
    async function Order(){
        PostOrder($CurrentUser.ID).then(res=>{
            console.log(res);
        })        
        
        
        
        
        /*$CurrentUser.cart = [];
        $CurrentUser.cart = $CurrentUser.cart;
        localStorage.setItem("extrahalal", JSON.stringify($CurrentUser));*/
    }
</script>

{#if $CurrentUser.cart.length>0}
{#await Cart}
    <div class="spinner-border"></div>
    {:then Data}
    <div class="card">
        <div class="card-body">
            <h5 class="card-title">Kosárod</h5>
            <ul class="mb-0">
            {#each $CurrentUser.cart as cartitem, i}
                {@const gyros = Data.find(e=>e.ID==cartitem.GID)}
                {@const price = new Intl.NumberFormat('hu-HU', {currency:'HUF', style:'currency'}).format(gyros.price*cartitem.amount)}
                <li>{gyros.name} x {cartitem.amount} - {price} <button class="btn" on:click={()=>{DeleteFromCart(i)}}><i class="bi bi-x-lg"></i></button></li>
            {/each}
            </ul>
        </div>
        <div class="card-footer">
            <button type="button" class="btn-success btn" on:click={Order}>Fizet <i class="bi bi-currency-dollar"></i></button>
        </div>
    </div>
{/await}
{:else}
    <h2 class="display-2"><a href="/gyros">Rendelj kebab!</a></h2>
{/if}