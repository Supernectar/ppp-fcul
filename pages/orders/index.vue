<template>
  <div>
    <Navbar />
    <h1>Orders</h1>
    <table class="table">
      <thead>
        <tr>
          <td>Name</td>
          <td>Number of Items</td>
          <td>Price</td>
          <td>Status</td>
        </tr>
      </thead>
      <tbody>
        <tr @click="redirectTest(order.id)" v-for="order in orders" :key="order.id">
          <td>{{ order.name }}</td>
          <td>{{ order.numItems }}</td>
          <td>{{ order.price }}€</td>
          <td>{{ order.status }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "OrderView",
  data() {
    return {
      orders: [
        { id: 1, name: "order1", numItems: 2, price: 4.0, status: "unfinished" },
        { id: 2, name: "order2", numItems: 2, price: 4.0, status: "unfinished" },
        { id: 3, name: "order3", numItems: 2, price: 4.0, status: "unfinished" },
        { id: 4, name: "order4", numItems: 2, price: 4.0, status: "unfinished" },
        { id: 5, name: "order5", numItems: 2, price: 4.0, status: "unfinished" },
      ],
    };
  },
  methods: {
    redirectTest(id) {
      this.$router.push(`orders/${id}`);
    },
  },
};
</script>

<style></style>
