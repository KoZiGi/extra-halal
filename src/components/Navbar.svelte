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
        {#each $Routes as link}
            {#if link.minPriv <= ($CurrentUser.isGuest ? 0 : $CurrentUser.admin ? 2 : 1 ) }
                <li class="nav-item">
                    <a class="nav-link" href={link.path}>{link.name}</a>
                </li>
            {/if}
        {/each}
        </ul>
      </div>
    </div>
  </nav>
<script lang="ts">
    import {Routes, CurrentUser} from '../stores';
</script>