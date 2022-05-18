<template>
  <div>
    <Navbar></Navbar>
    <div class="bg-white m-4 p-4 rounded">
      <div v-for="superCata in SuperCategories">
        <h1 class="text-xl font-semibold pt-2">{{ superCata.name }}</h1>
        <hr class="mb-2" />
        <div class="row">
          <div v-for="cata in superCata.categories" class="col">
            <h4 class="text-lg">{{ cata.name }}</h4>
            <hr class="mb-2 w-28" />
            <ul>
              <li v-for="subCata in cata.subCategories">{{ subCata.name }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const SuperCategories = [
  {
    name: "SuperCategory1",
    categories: [
      {
        name: "Category1",
        subCategories: [
          {
            name: "SubCategory1",
          },
          {
            name: "SubCategory2",
          },
          {
            name: "SubCategory3",
          },
        ],
      },
      {
        name: "Category2",
        subCategories: [
          {
            name: "SubCategory1",
          },
          {
            name: "SubCategory2",
          },
          {
            name: "SubCategory3",
          },
        ],
      },
      {
        name: "Category3",
        subCategories: [
          {
            name: "SubCategory1",
          },
          {
            name: "SubCategory2",
          },
          {
            name: "SubCategory3",
          },
        ],
      },
      {
        name: "Category4",
        subCategories: [
          {
            name: "SubCategory1",
          },
          {
            name: "SubCategory2",
          },
          {
            name: "SubCategory3",
          },
        ],
      },
    ],
  },
  {
    name: "SuperCategory2",
    categories: [
      {
        name: "Category1",
        subCategories: [
          {
            name: "SubCategory1",
          },
          {
            name: "SubCategory2",
          },
          {
            name: "SubCategory3",
          },
        ],
      },
      {
        name: "Category2",
        subCategories: [
          {
            name: "SubCategory1",
          },
          {
            name: "SubCategory2",
          },
          {
            name: "SubCategory3",
          },
        ],
      },
    ],
  },
];
</script>

<style></style>
