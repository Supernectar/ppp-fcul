<template>
  <div>
    <Navbar />
    <section class="bg-light-600 bg-red-100">
      <div class="flex">
        <div>
          <SideNav />
        </div>
        <div class="bg-green-100 p-2 w-full">
          <h1 class="text-4xl font-bold">Dashboard</h1>
          <div class="mt-2">
            <h2 class="text-xl font-semibold">Statistics</h2>
            <p>Find your statistics here</p>
            <div class="grid grid-cols-2 gap-2">
              <div class="bg-green-200 rounded-md p-2">
                <img src="/img/chart.png" alt="" class="w-full" />
                <div>polution generated over last month</div>
              </div>
              <div class="bg-green-200 rounded-md p-2">
                <img src="/img/chart.png" alt="" class="w-full" />
                <div>Resources generated over last month</div>
              </div>
              <div class="bg-green-200 rounded-md p-2 col-span-2">
                <img src="/img/chart.png" alt="" class="w-full h-20" />
                <div>Other statistics</div>
              </div>
            </div>
          </div>
          <div class="mt-2">
            <h2 class="text-xl font-semibold">Products you might like</h2>
            <div
              id="carouselExampleCaptions"
              class="carousel slide relative"
              data-bs-ride="carousel"
            >
              <div
                class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4"
              >
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div class="carousel-inner relative w-full overflow-hidden">
                <div class="carousel-item active relative float-left w-full">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
                    class="block w-full"
                    alt="..."
                  />
                  <div
                    class="carousel-caption hidden md:block absolute text-center"
                  >
                    <h5 class="text-xl">First slide label</h5>
                    <p>
                      Some representative placeholder content for the first
                      slide.
                    </p>
                  </div>
                </div>
                <div class="carousel-item relative float-left w-full">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg"
                    class="block w-full"
                    alt="..."
                  />
                  <div
                    class="carousel-caption hidden md:block absolute text-center"
                  >
                    <h5 class="text-xl">Second slide label</h5>
                    <p>
                      Some representative placeholder content for the second
                      slide.
                    </p>
                  </div>
                </div>
                <div class="carousel-item relative float-left w-full">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg"
                    class="block w-full"
                    alt="..."
                  />
                  <div
                    class="carousel-caption hidden md:block absolute text-center"
                  >
                    <h5 class="text-xl">Third slide label</h5>
                    <p>
                      Some representative placeholder content for the third
                      slide.
                    </p>
                  </div>
                </div>
              </div>
              <button
                class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon inline-block bg-no-repeat"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon inline-block bg-no-repeat"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>

          <div>-referencia à ultima encomenda realizada</div>
          <div>
            -estatistica relativamente ao total de recursos gerados em
            encomendas (nos ultimos x dias, ou desda primeira encomenda)
          </div>
          <div>-recomendações de produtos?</div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script setup></script>
