<script lang="ts">
    import Alert from "../components/Alert.svelte";
    import type { RegistrationData } from "../interfaces/user";
    import { Register } from "../services/userControlling";
    function TryRegister(){
        if (password2!=registrationdata.passwd){
            ShowError("Jelszavak megír ugyan olyanra!", "danger");
        }
        else if (!CheckInputs()){
            ShowError("Megír minden mezőt!", "danger");
        }
        else if (registrationdata.email.toString().match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)==null){
            ShowError("E-Postát megír jóra!", "danger");
        }
        else if (registrationdata.passwd.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)==null){
            ShowError("Jelszót megír Bayraktar TB-2!", "danger");
        }
        else{
            Register(registrationdata).then(res=>{
                ShowError("Inshallah, most rendel!", "success");
                registrationdata = {} as RegistrationData;
                password2 = "";
            })
        }
    }
    function CheckInputs():boolean{
        return (registrationdata.email && registrationdata.email!="" ) &&
         (registrationdata.fullname && registrationdata.fullname!="") &&
         (registrationdata.name && registrationdata.name!="") &&
         (registrationdata.address && registrationdata.address!="");
    }
    function ShowError(text:string, type:string){
        AlertStuff.text = text;
        AlertStuff.type = type;
        gotAlert = true;
    }
    let AlertStuff = {
        text:"",
        type:""
    };
    let gotAlert = false;
    let password2 = "";
    let registrationdata:RegistrationData = {} as RegistrationData;
</script>



<form class="col-lg-6 col-md-8 col-11 mx-auto">
    <h2>Adatot nekünk ad</h2>
    {#if gotAlert}
        <Alert text={AlertStuff.text} type={AlertStuff.type} on:closing={()=>{gotAlert = false;}} />
    {/if}
    <div class="mb-3">
        <label for="email">E-Posta <span class="text-danger">*</span></label>
        <input type="email" class="form-control" required name="email" bind:value={registrationdata.email}>
    </div>
    <div class="mb-3">
        <label for="fullname">Becses Neved <span class="text-danger">*</span></label>
        <input type="text" class="form-control" name="fullname" bind:value={registrationdata.fullname}>
    </div>
    <div class="mb-3">
        <label for="username">Felhasználóneved <span class="text-danger">*</span></label>
        <input type="text" class="form-control" name="username" bind:value={registrationdata.name}>
    </div>
    <div class="mb-3">
        <label for="address">Gyros-t hova <span class="text-danger">*</span></label>
        <input type="text" class="form-control" name="address" bind:value={registrationdata.address}>
    </div>
    <div class="mb-3">
        <label for="passwd">Jelszavad <span class="text-danger">*</span></label>
        <input type="password" class="form-control" name="passwd" bind:value={registrationdata.passwd}>
    </div>
    <div class="mb-3">
        <label for="passwd2">Jelszavad még egy <span class="text-danger">*</span></label>
        <input type="password" class="form-control" name="passwd2" bind:value={password2}>
    </div>
    <p>A *-t leszel szíves beír!</p>
    <input type="button" value="Üye olmak" on:click={TryRegister} class="btn btn-success">
</form>