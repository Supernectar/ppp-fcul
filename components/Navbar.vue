<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow">
      <div class="container-fluid">
        <a class="navbar-brand" href="index">
          <img src="/img/logo.png" width="36" alt="" />
          HomePage
        </a>
        <!-- <a class="navbar-brand" href="#">
          <img src="" alt="" height="32px" width="32px" />
          Homepage
        </a> -->
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>
        <div id="navbarSupportedContent" class="collapse navbar-collapse">
          <!-- Left aligned nav content -->
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">About Us</a>
            </li>

            <li class="nav-item">
              <a class="nav-link disabled">Disabled</a>
            </li>
          </ul>

          <!-- Searchbar -->
          <form class="d-flex">
            <input
              class="form-control form-control-sm me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-secondary btn-sm" type="submit">Search</button>
          </form>

          <!-- Right aligned nav content -->
          <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
            <li class="nav-item dropdown">
              <a
                id="navbarDropdown"
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Lang
              </a>

              <ul
                class="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdown"
              >
                <li>
                  <a class="dropdown-item" href="#">ENG</a>
                </li>
              </ul>
            </li>

            <li class="nav-item dropdown">
              <a
                id="navbarDropdown"
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="bi bi-cart4" style="font-size: 1.4rem"></i>
              </a>

              <div
                class="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdown"
              >
                <table
                  class="table table-striped text-center table-hover align-middle mb-0 bg-white"
                >
                  <thead class="bg-light">
                    <tr>
                      <th scope="col">Artigo</th>
                      <th scope="col">Preço</th>
                      <th scope="col">Quantidade</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Maçã</td>
                      <td>4.00€</td>
                      <td>
                        <select class="form-select form-select-lg">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </select>
                      </td>
                      <td>
                        <button @click="removeProduct(product.id)" class="btn btn-danger">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-x-circle-fill"
                            viewBox="0 0 16 16"
                          >
                            <path
                              d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"
                            />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <br />
                <div class="" style="display: flex; justify-content: space-evenly">
                  <a class="btn btn-primary" href="cart" role="button">See more</a>
                  <a class="btn btn-primary" role="button">Finish Order</a>
                </div>
              </div>
            </li>

            <li class="nav-item dropdown">
              <a
                id="navbarDropdown"
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="bi bi-person-circle" style="font-size: 1.4rem"></i>
              </a>
              <ul
                class="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdown"
              >
                <li>
                  <i class="dropdown-item disabled">username</i>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="login">Login</a>
                </li>
                <li>
                  <a class="dropdown-item" href="register">Register</a>
                </li>
                <li>
                  <a class="dropdown-item" href="profile">Profile</a>
                </li>
                <li>
                  <a class="dropdown-item" @click="signOut" href="#">Sign Out</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
nav.navbar ul.navbar-nav {
  display: flex;
  align-items: center;
}

a.nav-link {
  display: flex;
  align-items: center;
}

.search-hover {
  /* width: 120px; */
}
</style>
