<script lang="ts">
    import { GetUser, type LoginData } from "../services/userControlling";
    import { Login } from '../services/userControlling';
    import { CurrentUser } from "../stores";
    import { fade } from "svelte/transition";
    let userdata:LoginData = {} as LoginData;
    function TryLogin(){
        Login(userdata).then(res=>{
            GetUser({
                table:'users',
                field:'email',
                value:userdata.email
            }).then(rs=>{
                if (rs.length>0){
                    $CurrentUser = rs[0];
                    localStorage.setItem('extrahalal', JSON.stringify(rs[0]));
                }
            })
        })
        .catch(err=>{
            console.log(err.response);
        });
    }
</script>
<div id="login" class="col-lg-7 col-md-9 col-11 border border-dark rounded p-3 mx-auto">
    <h2>Bejelentkez</h2>
    <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input type="email" class="form-control" bind:value={userdata.email} />
    </div>
    <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input type="password" class="form-control" bind:value={userdata.passwd} />
    </div>
    <button class="btn btn-primary" on:click={TryLogin}>Bejelentkez</button>
</div>
<style lang="sass">
</style>

