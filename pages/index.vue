-
<template>
	<div>
		<Navbar />
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
			<div
				class="carousel-inner relative w-full overflow-hidden"
			>
				<div
					class="carousel-item active relative float-left w-full"
				>
					<img
						src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
						class="block w-full"
						alt="..."
					/>
					<div
						class="carousel-caption hidden md:block absolute text-center"
					>
						<h5 class="text-xl">
							First slide label
						</h5>
						<p>
							Some representative
							placeholder content for
							the first slide.
						</p>
					</div>
				</div>
				<div
					class="carousel-item relative float-left w-full"
				>
					<img
						src="https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg"
						class="block w-full"
						alt="..."
					/>
					<div
						class="carousel-caption hidden md:block absolute text-center"
					>
						<h5 class="text-xl">
							Second slide label
						</h5>
						<p>
							Some representative
							placeholder content for
							the second slide.
						</p>
					</div>
				</div>
				<div
					class="carousel-item relative float-left w-full"
				>
					<img
						src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg"
						class="block w-full"
						alt="..."
					/>
					<div
						class="carousel-caption hidden md:block absolute text-center"
					>
						<h5 class="text-xl">
							Third slide label
						</h5>
						<p>
							Some representative
							placeholder content for
							the third slide.
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

		<!-- <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="10000">
          <img
            src="https://picsum.photos/1024/480/?image=52"
            class="d-block w-100"
            alt="..."
          />
          <div class="carousel-caption d-none d-md-block">
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="2000">
          <img
            src="https://picsum.photos/1024/480/?image=54"
            class="d-block w-100"
            alt="..."
          />
          <div class="carousel-caption d-none d-md-block">
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="https://picsum.photos/1024/480/?image=58"
            class="d-block w-100"
            alt="..."
          />
          <div class="carousel-caption d-none d-md-block">
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div> -->
		<Footer />
	</div>
</template>

<script>
export default {
	name: 'IndexPage'
};
</script>
