<script lang="ts">
    import {Route, router, active} from 'tinro';
    import {Routes, CurrentUser} from './stores';
    import Login from './views/Login.svelte';
    import Register from './views/Registration.svelte';
    import LazyLoad from './components/LazyLoad.svelte';
    import { fade } from 'svelte/transition';
    console.log($CurrentUser);
</script>
<main>
    {#if $CurrentUser.isGuest}
        <Route path='/login'><LazyLoad component={()=>import('./views/Login.svelte')}/></Route>
        <Route path='/registration'><LazyLoad component={()=>import('./views/Registration.svelte')}/></Route>
        {:else}
        <Route path='/login' redirect='/' />
        <Route path='/registration' redirect='/' />
    {/if}
    {#each $Routes as route}
        {#if route.minPriv <= ($CurrentUser.isGuest==true ? 0 : $CurrentUser.admin==true ? 2 : 1 ) }
            <Route path={route.path}><LazyLoad component={()=>import( /* @vite-ignore */ route.component)} /></Route>
            {:else}
            <Route path={route.path} redirect="/login" />
        {/if}
    {/each}
    <Route fallback redirect="/" />
</main>
<footer class="text-center bg-dark text-light">Made by KoZiGi&copy; 2023.</footer>