<script lang="ts">
    import type { Order } from "../../interfaces/orders";


    export let Order:Order
</script>




<div class="modal" tabindex="-1" id="ordermodal">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5>Emir #{Order.ID}</h5>
                <button class="btn-close" type="button" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body">
                <h3>Ofis detayları</h3>
                <ul>
                    <li><i class="bi bi-person-fill"></i> {Order.username}</li>
                    <li><i class="bi bi-map"></i> {Order.address}</li>
                    <li><i class="bi bi-calendar"></i> {Order.date}</li>
                </ul>
                {#if Order.items}
                <h3>Sipariş detayları</h3>
                <ul>
                    {#each Order.items as gyros}
                        <li>{gyros.name} {gyros.amount} parça ({new Intl.NumberFormat('hu-HU', {style:'currency', currency:'HUF'}).format(gyros.amount*gyros.price)})</li>
                    {/each}
                </ul>
                <h3>Sipariş miktarı: {new Intl.NumberFormat('hu-HU', {style:'currency', currency:'HUF'}).format(Order.items.map(e=>e.price*e.amount).reduce((a,b)=>a+b))}</h3>
                {/if}
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary" type="button" data-bs-dismiss="modal">OK</button>
            </div>
        </div>
    </div>
</div>