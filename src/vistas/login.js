import { panel } from "./panel";
export const login =  {
  template: `
  <div class="pt-5">
    <h1 class="w-100 text-center">Login</h1>
    <form action="" class="form p-4 border shadow bordered mt-5 mx-auto" style="width: 400px;">
      <label for="email" class="mt-2 form-label">User: </label>
      <input type="text" class="form-control" placeholder="usuario@mail.com">

      <label for="pass" class="mt-2 form-label">Contraseña: </label>
      <input type="text" class="form-control">

      <input type="text" class="mt-4 w-100 btn btn-primary" value="Entrar" id="enviar">
    </form>
  </div>
  `,
  script: ()=>{
    console.log('script de login');
    document.querySelector('#enviar').addEventListener('click', (e)=>{
      console.log('cargando');
      document.querySelector('main').innerHTML = panel.template
      panel.script();
    })  
}

}