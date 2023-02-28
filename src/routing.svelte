<script lang="ts">
    import {Route, router, active} from 'tinro';
    import {Routes, CurrentUser} from './stores';
    import Login from './views/Login.svelte';
    import Register from './views/Registration.svelte';
    console.log($CurrentUser);
</script>
<main>
    {#if $CurrentUser.isGuest}
        <Route path='/login'><svelte:component this={Login} /></Route>
        <Route path='/registration'><svelte:component this={Register} /></Route>
        {:else}
        <Route path='/login' redirect='/'><svelte:component this={Login} /></Route>
        <Route path='/registration' redirect='/'><svelte:component this={Register} /></Route>
    {/if}
    {#each $Routes as route}
        {#if route.minPriv <= ($CurrentUser.isGuest ? 0 : $CurrentUser.admin ? 2 : 1 ) }
            <Route path={route.path}><svelte:component this={route.component} /></Route>
            {:else}
            <Route path={route.path} redirect="/login"><svelte:component this={route.component} /></Route>
        {/if}
    {/each}
    <Route fallback redirect="/" />
</main>