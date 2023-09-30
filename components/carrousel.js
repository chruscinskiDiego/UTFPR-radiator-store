export const carrouselComponent = function() {
    return `
    <div class="container"></div>
        <div class="container down-menu">
            <div class="row">
              <div class="col-12 mx-auto">
                <div id="meuCarrossel" class="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
                  <ol class="carousel-indicators">
                    <li data-bs-target="#meuCarrossel" data-bs-slide-to="0" class="active"></li>
                    <li data-bs-target="#meuCarrossel" data-bs-slide-to="1"></li>
                    <li data-bs-target="#meuCarrossel" data-bs-slide-to="2"></li>
                  </ol>
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img src="cars/carrossel/1.png" class="d-block w-100" alt="Imagem 1">
                    </div>
                    <div class="carousel-item">
                      <img src="cars/carrossel/2.png" class="d-block w-100" alt="Imagem 2">
                    </div>
                    <div class="carousel-item">
                      <img src="cars/carrossel/3.png" class="d-block w-100" alt="Imagem 3">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


    </div>
    `;
};
