fetch('../static/project.json')
    .then(response => response.json())
    .then(data => {
        data.forEach(el => {
            const projectBox = document.querySelector('.projects')
            const projectModal = document.querySelector('.modales')
            const plantilla =`
            <div class="col-md-4 col-lg-3 p-4  box " >
    <div class="card bg-black card-project tarjeta" >
      <div data-bs-toggle="modal" data-bs-target="#A${el.id}">
        <img class="card-img-top img-fluid imgProject" src="../static/img/${el.img}" alt="" />
  
        <div class="card-body">
          <h3 class="title">${el.name}</h3>
          
        <br>
          <P class="tec btn text-light bg-success fw-bold" >${el.tecno}</P>
          
        </div>

      </div>
      <div class="card-footer">
        

        <a
          href="${el.url}"
          class="btn btn-secondary rounded-1 btn-sm link-web"
          target="_blank"
          >website</a>
        
      </div>
    </div>
    
  </div>
            `
            const plantillaModal = `
            <div class="modal fade " id="A${el.id}" tabindex="-1" data-bs-backdrop="static" data-bs-keyboard="false" role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
    <div class="modal-dialog " role="document">
      <div class="modal-content">
        <div class="modal-header " >
          <h5 class="modal-title" id="modalTitleId">Project: ${el.name}</h5>
            <button type="button" class="btn-close btn-sm  " data-bs-dismiss="modal" aria-label="Close" style="background-color: red;" ></button>
        </div>
        <div class="modal-body" >
          <!-- Body -->
          <img  class="img-fluid"  src="../static/img/${el.img}" alt="">
            <h3>Description</h3>
          <p>${el.description}</p>
        <div class="modal-footer d-flex justify-content-center">
          <h3 class="d-flex justify-content-center">Technologies Used </h3>
        <br>
          <P class="tec btn text-light bg-success fw-bold" >${el.tecno}</P>
          
        </div>
      </div>
    </div>
  </div>
  </div>
            `
            
            projectBox.insertAdjacentHTML("beforeend", plantilla);
            projectModal.insertAdjacentHTML("beforeend", plantillaModal);
        });
    })