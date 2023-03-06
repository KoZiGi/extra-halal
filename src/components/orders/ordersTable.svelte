<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import type { Order } from "../../interfaces/orders";
    import {
        DeleteOrderData,
        GetOrders,
        MarkOrderAsDone,
    } from "../../services/orderService";
    let AllOrders = GetOrders();
    const dispatch = createEventDispatcher();
    function DeleteOrder(orderID: number) {
        DeleteOrderData(orderID).then(() => {
            AllOrders = GetOrders();
        });
    }
    function MarkOrder(orderID: number) {
        MarkOrderAsDone(orderID).then(() => {
            AllOrders = GetOrders();
        });
    }
    function ViewOrder(order: Order) {
        dispatch("order", { order: order });
    }
</script>

{#await AllOrders}
    <div class="spinner-border" />
{:then Data}
    {#if Data.length > 0}
        <table class="table">
            <thead>
                <tr>
                    <th>#.</th>
                    <th>Ameliyat</th>
                    <th>Adres</th>
                    <th>Toplam tutar</th>
                    <th>Operasyonlar</th>
                </tr>
            </thead>
            <tbody>
                {#each Data as order}
                    <tr class={order.isDone == true ? "table-success" : ""}>
                        <td>{order.ID}</td>
                        <td>{order.username}{#if order.isDone}<i class="bi bi-check-lg"/>{/if}</td>
                        <td>{order.address}</td>
                        <td>{new Intl.NumberFormat("tr-TR", {style:"currency", currency:"TRY"}).format(order.items.map(e=>Number(e.price)*Number(e.amount)).reduce((a,b)=>a+b)*18.79)}</td>
                        <td>
                            <button class="btn btn-primary" title="siparişi görüntüle" on:click={() => {ViewOrder(order);}} data-bs-toggle="modal" data-bs-target="#ordermodal"><i class="bi bi-eye" /></button>
                            {#if order.isDone!=true}<button class="btn btn-success" title="tamamlandı olarak işaretle" on:click={() => { MarkOrder(order.ID); }}><i class="bi bi-check-lg" /></button>{/if}
                            <button class="btn btn-danger" title="siparişi sil" on:click={() => { DeleteOrder(order.ID); }}><i class="bi bi-trash" /></button>
                        </td>
                    </tr>
                {/each}
            </tbody>
        </table>
    {:else}
        <h2 class="text-danger display-1 fw-b">Henüz sipariş yok!</h2>
    {/if}
{/await}
