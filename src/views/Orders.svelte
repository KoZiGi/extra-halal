<script lang="ts">
    import OrdersTable from "../components/orders/ordersTable.svelte";   
    import OrderModal from "../components/orders/orderModal.svelte";
    import type { Order } from "../interfaces/orders";
    let SelectedOrder:Order = {} as Order;
    function SwitchOrder(event){
        SelectedOrder = event.detail.order;
        console.log(SelectedOrder)
    }
</script>
<OrdersTable on:order={SwitchOrder} />
<OrderModal Order={SelectedOrder} />