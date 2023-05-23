export const header = {
    template: `
    <header>
      <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand">Gestión de incidencias FPLLEFIA</a>
          <div>
            <button class="btn btn-secondary ms-2">PANEL</button>
            <button class="btn btn-secondary ms-2">LOGIN</button>
            <button class="btn btn-secondary ms-2">REGISTRO</button>
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