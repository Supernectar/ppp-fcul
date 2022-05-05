<template>
  <div>
    <Navbar />
    <div class="container">
      <div class="row mt-2 text-center">
        <table class="table align-middle mb-0 table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Product</th>
              <th scope="col">Product Name</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Remove</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>empty</td>
              <td>empty</td>
              <td>empty</td>
              <td>empty</td>
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
                  <i class="bi bi-x-circle-fill"></i>
                </button>
              </td>
            </tr>
            <tr>
              <td>empty</td>
              <td>empty</td>
              <td>empty</td>
              <td>empty</td>
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
                  <i class="bi bi-x-circle-fill"></i>
                </button>
              </td>
            </tr>
            <tr>
              <td>empty</td>
              <td>empty</td>
              <td>empty</td>
              <td>empty</td>
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
                  <i class="bi bi-x-circle-fill"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="text-center">
          <a class="btn btn-primary" role="button">Finish Order</a>
          <!-- Falta um href (em cima) para a pagina de pagamento -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cartPage",
};
</script>
