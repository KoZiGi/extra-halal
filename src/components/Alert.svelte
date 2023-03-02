<script lang="ts">
    import { createEventDispatcher } from "svelte";


    export let type:string;
    export let text:string;
    const dispatch = createEventDispatcher()
    function Emit(){
        dispatch('closing');
    }
</script>

<div class={`alert alert-${type} alert-dismissible fade show`}>
    {text}
    <span class="btn-close" data-bs-dismiss="alert" on:click={Emit}></span>
</div>