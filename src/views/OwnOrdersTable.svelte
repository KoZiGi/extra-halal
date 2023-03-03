<script lang="ts">
    import { onMount } from "svelte";
    import { GetOrders } from "../services/orderService";
    import { CurrentUser } from "../stores";
    let AllOrders = GetOrders();
    onMount(async ()=>{
        console.log(await (await AllOrders).filter(e=>e.userID==$CurrentUser.ID));
    })
</script>



