<script lang="ts">
    import {Route, router, active} from 'tinro';
    import {Routes, CurrentUser} from './stores';
    console.log($CurrentUser);
</script>
<main>
    {#each $Routes as route}
        {#if route.minPriv <= ($CurrentUser.isGuest ? 0 : $CurrentUser.admin ? 2 : 1 ) }
            <Route path={route.path}><svelte:component this={route.component} /></Route>
            {:else}
            <Route path={route.path} redirect="/login"><svelte:component this={route.component} /></Route>
        {/if}
    {/each}
</main>