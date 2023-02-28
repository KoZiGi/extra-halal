<script lang="ts">
    interface RegistrationData{
        name:string;
        fullname:string;
        email:string;
        passwd:string;
        address:string;
    }


    let password2 = "";
    let registrationdata:RegistrationData = {} as RegistrationData;
</script>



<form>
    <div class="mb-3">
        <label for="email">E-Mailed:</label>
        <input type="email" class="form-control"  name="email" bind:value={registrationdata.email}>
    </div>
    <div class="mb-3">
        <label for="fullname">Teljes Neved:</label>
        <input type="text" class="form-control" name="fullname" bind:value={registrationdata.fullname}>
    </div>
    <div class="mb-3">
        <label for="username">Felhasználóneved:</label>
        <input type="text" class="form-control" name="username" bind:value={registrationdata.name}>
    </div>
    <div class="mb-3">
        <label for="address">Lakcímed::</label>
        <input type="text" class="form-control" name="address" bind:value={registrationdata.address}>
    </div>
    <div class="mb-3">
        <label for="passwd">Jelszavad:</label>
        <input type="passwd" class="form-control" name="passwd" bind:value={registrationdata.passwd}>
    </div>
    <div class="mb-3">
        <label for="passwd2">Jelszavad még egy:</label>
        <input type="passwd" class="form-control" name="passwd2" bind:value={password2}>
    </div>
</form>