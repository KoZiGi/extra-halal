<nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
        <span class="navbar-brand">
          <img src='/pics/logo.png' alt="Extra Halal" height="50" class="d-inline-block align-text-top" />
        </span>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          {#if $CurrentUser.isGuest}
            <li class="nav-item"><a href='/login' class="nav-link">Bejelentkez</a></li>
            <li class="nav-item"><a href='/registration' class="nav-link">Regisztrál</a></li>
          {/if}
        {#each $Routes as link}
          {#if link.minPriv <= ($CurrentUser.isGuest ? 0 : $CurrentUser.admin ? 2 : 1 ) }
                <li class="nav-item">
                    <a class="nav-link" href={link.path}>{link.name}</a>
                </li>
            {/if}
        {/each}
      </ul>
      {#if !$CurrentUser.isGuest}
        <div class="ms-auto dropdown">
          <span class="nav-link dropdown-toggle" id="navdrop" data-bs-toggle="dropdown">{$CurrentUser.name}</span>
          <ul class="dropdown-menu dropdown-menu-md-end">
            <li><span class="dropdown-item" on:click={LogOut}>Kijelentkez</span></li>
          </ul>
        </div>
      {/if}
      </div>
    </div>
  </nav>
<script lang="ts">
    import {Routes, CurrentUser} from '../stores';
    function LogOut(){
      localStorage.removeItem('extrahalal');
      $CurrentUser = {
        address:'',
        admin:false,
        email:'',
        fullname:'',
        isGuest:true,
        name:'',
        passwd:'',
      }
    }
</script>
<style lang="sass">
  .dropdown
    span
      cursor: pointer
</style>