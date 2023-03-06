<script lang="ts">
    import type {Gyros} from '../interfaces/gyros';
    import { PostGyros, UploadFile } from '../services/gyrosService';
    import Alert from '../components/Alert.svelte';
    let files:FileList
   let message={
    message:"",
    show:false,
    type:""
   }
    let values:Gyros={
            name:"",
            price:0,
            kcal:0,
            description:"",
            image: undefined
        }
    async function Up(){
        let form = new FormData();
        if (files[0]){
            form.append('filename', files[0]);
            form.append('table', "gyrosok");
            UploadFile(form).then(res=>{
                values.image = res.filename
                PostGyros(values).then(rs=>{
                    console.log(rs);
                    message.type = "success";
                    message.message = "Mashallah habibi!"
                    message.show = true
                    values = {} as Gyros;
                });
            })
        }
        else PostGyros(values);
    }
</script>

    {#if message.show}
        <Alert on:closing={()=>{message.show=false}} text={message.message} type={message.type}/>
    {/if}
    <div class="col-lg-7 col-md-9 col-11 border border-dark rounded p-3 mx-auto">
        <h2>Gyros feltöltés: </h2>
        <div class="mb-3">
            <label for="name" class="form-label">isim</label>
            <input type="text" id="name" class="form-control" bind:value={values.name} />
        </div>
        <div class="mb-3">
            <label for="cost" class="form-label">fiyat</label>
            <input type="number" id="cost" class="form-control" bind:value={values.price} />
        </div>
        <div class="mb-3">
            <label for="kcal" class="form-label">kalori</label>
            <input type="number" id="kcal" class="form-control" bind:value={values.kcal} />
        </div>
        <div class="mb-3">
            <label for="des" class="form-label">tanim</label>
            <textarea id="des" class="form-control" bind:value={values.description} />
        </div>
        <div class="mb-3">
            <label for="pic" class="form-label">resim</label>
            <input type="file" id="pic" class="form-control " bind:files={files}>
        </div>
        <button type="button" class="btn btn-primary" on:click={()=>{Up()}}>Upload</button>
    </div>
<style lang="sass">
</style>
