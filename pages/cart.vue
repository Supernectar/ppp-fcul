<template>
  <div>
    <Navbar />
    <div class="container">
      <div class="row mt-2 text-center">
        <table class="table table-hover align-middle mb-0 table-striped">
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
              <td width="10%">number</td>
              <td width="8%">
                <img class="img-thumbnail" src="/img/peach.png" />
              </td>
              <td width="15%">product.name</td>
              <td width="15%">product.price</td>
              <td width="10%">
                <input
                  type="number"
                  class="form-control form-control-sm"
                  size="4"
                  min="1"
                  placeholder="product.quantity"
                  value="product.quantity"
                />
              </td>
              <td width="10%">
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
                <input
                  type="number"
                  class="form-control form-control-sm"
                  size="4"
                  min="1"
                  placeholder="product.quantity"
                  value="product.quantity"
                />
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
                <input
                  type="number"
                  class="form-control form-control-sm"
                  size="4"
                  min="1"
                  placeholder="product.quantity"
                  value="product.quantity"
                />
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
          <a class="btn btn-primary" @click="finishCart(productList)">Finish Order</a>
          <!-- Falta um href (em cima) para a pagina de pagamento -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cartPage",

  //methods: {
  //removeProduct() { fetch("api/products/,")
  //method: "DELETE",
  //}
  //finishCart() {fetch("api/products/,")
  //method: "POST",
  // this.$router.push("payment")

  //}
  //}
};
</script>
