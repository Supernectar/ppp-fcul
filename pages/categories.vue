<template>
  <div>
    <Navbar></Navbar>
    <div class="bg-white m-4 p-4 rounded">
      <div v-for="superCata in SuperCategories" :key="superCata._id">
        <h1 class="text-xl font-semibold pt-2">{{ superCata.name }}</h1>
        <hr class="mb-2" />
        <div class="row">
          <div v-for="cata in superCata.categories" :key="cata._id" class="col">
            <h4 class="text-lg">{{ cata.name }}</h4>
            <hr class="mb-2 w-28" />
            <ul>
              <li v-for="subCata in cata.subCategories" :key="subCata._id">
                <p>
                  <NuxtLink
                    :href="
                      '/items?category1=' +
                      superCata._id +
                      '&category2=' +
                      cata._id +
                      '&category3=' +
                      subCata._id
                    "
                  >
                    {{ subCata.name }}
                  </NuxtLink>
                </p>
              </li>
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
    _id: "8798SQDQHDQ9E7QZ9EHIA",
    name: "SuperCategory1",
    categories: [
      {
        _id: "8798SQDQHDQ9E7QZ9EHIA",
        name: "Category1",
        subCategories: [
          {
            _id: "8798SQDQHDQ9E7QZ9EHIA",
            name: "SubCategory1",
          },
          {
            _id: "8798SQDQHDQ9E7QZ9EHIA",
            name: "SubCategory2",
          },
          {
            _id: "8798SQDQHDQ9E7QZ9EHIA",
            name: "SubCategory3",
          },
        ],
      },
      {
        _id: "8798SQDQHDQ9E7QZ9EHIA",
        name: "Category2",
        subCategories: [
          {
            _id: "8798SQDQHDQ9E7QZ9EHIA",
            name: "SubCategory1",
          },
          {
            _id: "8798SQDQHDQ9E7QZ9EHIA",
            name: "SubCategory2",
          },
          {
            _id: "8798SQDQHDQ9E7QZ9EHIA",
            name: "SubCategory3",
          },
        ],
      },
      {
        _id: "8798SQDQHDQ9E7QZ9EHIA",
        name: "Category3",
        subCategories: [
          {
            _id: "8798SQDQHDQ9E7QZ9EHIA",
            name: "SubCategory1",
          },
          {
            _id: "8798SQDQHDQ9E7QZ9EHIA",
            name: "SubCategory2",
          },
          {
            _id: "8798SQDQHDQ9E7QZ9EHIA",
            name: "SubCategory3",
          },
        ],
      },
      {
        _id: "8798SQDQHDQ9E7QZ9EHIA",
        name: "Category4",
        subCategories: [
          {
            _id: "8798SQDQHDQ9E7QZ9EHIA",
            name: "SubCategory1",
          },
          {
            _id: "8798SQDQHDQ9E7QZ9EHIA",
            name: "SubCategory2",
          },
          {
            _id: "8798SQDQHDQ9E7QZ9EHIA",
            name: "SubCategory3",
          },
        ],
      },
    ],
  },
  {
    _id: "8798SQDQHDQ9E7QZ9EHIA",
    name: "SuperCategory2",
    categories: [
      {
        _id: "8798SQDQHDQ9E7QZ9EHIA",
        name: "Category1",
        subCategories: [
          {
            _id: "8798SQDQHDQ9E7QZ9EHIA",
            name: "SubCategory1",
          },
          {
            _id: "8798SQDQHDQ9E7QZ9EHIA",
            name: "SubCategory2",
          },
          {
            _id: "8798SQDQHDQ9E7QZ9EHIA",
            name: "SubCategory3",
          },
        ],
      },
      {
        _id: "8798SQDQHDQ9E7QZ9EHIA",
        name: "Category2",
        subCategories: [
          {
            _id: "8798SQDQHDQ9E7QZ9EHIA",
            name: "SubCategory1",
          },
          {
            _id: "8798SQDQHDQ9E7QZ9EHIA",
            name: "SubCategory2",
          },
          {
            _id: "8798SQDQHDQ9E7QZ9EHIA",
            name: "SubCategory3",
          },
        ],
      },
    ],
  },
];
</script>

<style></style>
