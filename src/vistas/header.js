export const header = {
    template: `
    <header>
      <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand">Gestión de incidencias FPLLEFIA</a>
          <div>
            <button class="btn btn-secondary ms-2" id="panel">PANEL</button>
            <button class="btn btn-secondary ms-2" id="login">LOGIN</button>
            <button class="btn btn-secondary ms-2" id="registro">REGISTRO</button>
          </div>
          <div>
            <span>administrador@fpllefia.com</span>
            
          </div>
        </div>
      </nav>
    </header>
    
    `,
    script: ()=>{
      console.log('header cargado');
    }
  }