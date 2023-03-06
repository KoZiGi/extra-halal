<script lang="ts">
    import { onMount } from "svelte";
    import { GetOrders } from "../services/orderService";
    import { CurrentUser } from "../stores";
    let AllOrders = GetOrders($CurrentUser.ID);
    onMount(async ()=>{
        console.log(await (await AllOrders));
    })
</script>



{#await AllOrders}
    <div class="spinner-border" />
{:then Data}
    {#if Data.length > 0}
        <table class="table">
            <thead>
                <tr>
                    <th>#.</th>
                    <th>Rendelő</th>
                    <th>Teljes ár</th>
                </tr>
            </thead>
            <tbody>
                {#each Data as order}
                    <tr class={order.isDone == true ? "table-success" : ""}>
                        <td>{order.ID}</td>
                        <td>{order.username}{#if order.isDone == true}<i class="bi bi-check-lg"/>{/if}</td>
                        <td>{new Intl.NumberFormat("tr-TR", {style:"currency", currency:"TRY"}).format(order.items.map(e=>Number(e.price)*Number(e.amount)).reduce((a,b)=>a+b)*18.79)}</td>
                    </tr>
                {/each}
            </tbody>
        </table>
    {:else}
        <h2 class="text-danger display-1 fw-b">Henüz sipariş yok!</h2>
    {/if}
{/await}