<script lang="ts">
    import { GetUser, type LoginData } from "../services/userControlling";
    import { Login } from '../services/userControlling';
    import { CurrentUser } from "../stores";
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
<div>
    <div class="mb-3">
        <label for="password">Email</label>
        <input type="email" bind:value={userdata.email} />
    </div>
    <div>
        <label for="password">Password</label>
        <input type="password" bind:value={userdata.passwd} />
    </div>
    <button on:click={TryLogin}>Login</button>
</div>
<style>
    
</style>

