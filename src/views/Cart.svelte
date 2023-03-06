<script lang="ts">
    import type { Gyros } from "../interfaces/gyros";
    import { PostOrder, PostOrderItems } from "../services/cartService";
    import { GetGyros } from "../services/gyrosService";
    import {CurrentUser} from '../stores';
    
    interface Message {
        message:string;
        type:string;
        show:boolean;
    }
    
    let Cart:Promise<Gyros[]> = GetGyros();
    let message:Message
    function DeleteFromCart(cartId:number){
        console.log(cartId);
        $CurrentUser.cart.splice(cartId, 1);
        $CurrentUser.cart = $CurrentUser.cart;
        localStorage.setItem("extrahalal", JSON.stringify($CurrentUser));
    }
    async function Order(){
        PostOrder($CurrentUser.ID).then(res=>{
            Promise.all($CurrentUser.cart.map(e=>PostOrderItems(res.insertedId, e))).then(res=>{
                if (res.map(z=>z.data.insertedId).filter(g=>g>0).length>0){
                    message = {
                        message:"Sikeres vásárló, inshallah!",
                        show:true,
                        type:"success"
                    };
                    $CurrentUser.cart = [];
                    $CurrentUser.cart = $CurrentUser.cart;
                    localStorage.setItem("extrahalal", JSON.stringify($CurrentUser));
                }
                else message = {
                    message: "Sikertelen vásárló, nem halal vásárlás!",
                    show:true,
                    type:"danger"
                }
                
            });
        })        
        
        
        
        
    }
</script>
{#if message}
    {#if message.show}
        <div class={`alert alert-dismissible alert-${message.type}`}>{message.message} <button on:click={()=>{message.show = false;}} class="btn-close"></button></div>
    {/if}
{/if}
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