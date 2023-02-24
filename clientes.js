const clientes = document.querySelector('.clientes')//container principa
let titulo = document.getElementById('titulo')
let containerCliente=document.querySelector('.client')//coontenedor cliente
let inicio = document.querySelector('.inicio')
let insert=document.querySelector('.crear')
const creditos = document.querySelector('.creditos')

const cliente = `
            
            <div id="buscar">

                <input type="text" placeholder="Nombre,NIT o CC" >
                
                <button  class="crear" Onclick="x();">Crear Cliente</button>
            </div>
            <div id="datos">
                <ul>Nombre</ul>
                <ul>Apellido</ul>
                <ul>NIT/CC</ul>
                <ul>Direccion</ul>
                <ul>Ciudad</ul>
                <ul>telefono</ul>
                <ul>cupo Disponible</ul>
                <ul>Estado</ul>
                <ul>Aciones</ul>
            </div>
`

const principal = `

                <div id="inicio">
                    <div id="creditos">
                        <h3>Creditos</h3>
                        <p  id="cantidad">31</p>
                        <i id="icono"><img src="./img/creditcard_plus_icon_232381.png" alt=""></i>
                    </div>
                    <div id="numeroClientes">
                        <h3>Numero de clientes</h3>
                        <p id="cantidad">32</p>
                        <i><img src="./img/user.png" alt=""></i>
                    </div>
                </div>

`

const insertando = 
`
<div id="crearCliente">
        
<h2 id="dat">Datos personales</h2>
<div class="agregar">
      <div class="input-container">
          <label for="" >Nombres</label>
          <label for="">Apellidos</label>
          <input type="text" class="input-item">
          <input type="text" class="input-item">
          <label for="">NIT / CC</label>
          <label for="">Direccion</label>
          <input type="text" class="input-item">
          <input type="text" class="input-item">
          <label for="">Ciudad</label>
          <label for="">Telefono</label>
          <select name="" id="">
            <option value="" class="input-item">Bucaramanga</option>
          </select>
          <input type="text" class="input-item">
          <label for="">Estado de credito</label><br>
          <select name="" id="" >
            <option value="" >activo</option>
            <option value="" >inactivo</option>
          </select>
      </div>
      <div class="valores">
          <label for="">Cupo Total</label>
          <input type="text" class="input-item">
          <label for="">Cupo Disponible</label>
          <input type="text" class="input-item">
          <label for="">Dias de ganancia</label>
          <input type="text" class="input-item" placeholder="$">
      </div>
</div>
<button id="guardar">Guardar cambios</button>
</div>

`

const credit =`
                    <div class="credit">
                      <div class="input-container">
                          <label for="" >Pagare Nro.</label>
                          <label for="">Cuotas Mensuales</label>
                          <input type="text" class="input-item">
                          <input type="text" class="input-item">
                          <label for="">Monto del Credito</label>
                          <label for="">Cedula del cliente</label>
                          <input type="text" class="input-item">
                          <input type="text" class="input-item">
                          <label for="">Cuota inicial</label>
                          <label for="">cliente</label>
                          <input type="text" class="input-item">
                          <select name="" id="">
                            <option value="" class="input-item">seleccionar</option>
                          </select>
                          <label for="">Tasa de interes</label>
                          <label for="">Fecha del credito</label>
                          <select name="" id="" >
                            <option value="" >seleccionar...</option>
                          </select>
                          <input type="date" class="input-item">
                          <label for="">Fecha de desembolso</label>
                          <label for="">Observaciones</label>
                          <input type="date" class="input-item">
                          <textarea name="" id="" cols="30" rows="10"></textarea>
                      </div>
                    </div>
                <button id="guardar">Guardar cambios</button>
                
`
function inner (a,b){
   return a.innerHTML=b
}


inicio.addEventListener('click',()=>{
    containerCliente.id=""
    titulo.innerHTML='Inicio'
    inner(containerCliente,principal)
});

clientes.addEventListener('click',()=>{
    titulo.innerHTML='clientes'
    containerCliente.id= 'client'
    inner(containerCliente,cliente)
    
});

creditos.addEventListener('click',()=>{
    titulo.innerHTML='Nuevo credito'
    containerCliente.id= 'client'
    inner(containerCliente,credit)
    
});
function x (){
    containerCliente.id=""
    titulo.innerHTML= 'Detalles del Cliente'
    return containerCliente.innerHTML=insertando
}


