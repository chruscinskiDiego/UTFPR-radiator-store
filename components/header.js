export const headerComponent = function () {
    return `
    <nav class="navbar navbar-expand-lg navbar-dark bg-black border-bottom shadow-sm mb-3 fixed-top">
        <img class="logo trofeu" src="/cars/logo.png" alt="">
        <div class="container-fluid">
            <a class="navbar-brand" href="index.html"><strong>Radiator Store</strong></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
             aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="navbar-collapse collapse"  id="navbarNav">
                <ul class="navbar-nav flex-grow-1">
                    <li class="nav-item">
                        <a href="#" class="nav-link text-white nav-alinhar">Comprar</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link text-white nav-alinhar">Servicos</a>
                    </li>
                </ul>
            </div>
            <div class="align-self-end ">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a href="register.html" class="nav-link text-white nav-alinhar">Cadastre-se</a>
                    </li>
                    <li class="nav-item">
                        <a href="login.html" class="nav-link text-white nav-alinhar">Entrar</a>
                    </li>
                    <li class="nav-item">
                        <a href="cart.html" class="nav-link text-white nav-alinhar-c">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-minecart" viewBox="0 0 16 16">
                                <path d="M4 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0 1a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm8-1a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0 1a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM.115 3.18A.5.5 0 0 1 .5 3h15a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 14 12H2a.5.5 0 0 1-.491-.408l-1.5-8a.5.5 0 0 1 .106-.411zm.987.82 1.313 7h11.17l1.313-7H1.102z"/>
                              </svg>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    `;
};