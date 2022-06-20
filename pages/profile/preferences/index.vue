<template>
  <div>
    <Navbar />
    <section>
      <div class="flex">
        <div>
          <SideNav />
        </div>

        <div class="bg-light-100 p-2 w-full">
          <h1 class="text-4xl font-bold">Preferences</h1>
          <p>
            alteração de alguns settings que melhoram a experiencia do
            utilizador com base nas suas preferencias, tais como:
          </p>
          <p>-darkMode</p>
          <p>-sugestão de produtos</p>
          <p>-layout da pagina?</p>
          <p>-outros</p>

          <div>
            <div>
              <input
                id="backgroundColor"
                v-model="profileIconBgColor"
                type="color"
                name="backgroundColor"
              />
              <label for="colorPalette">Background color</label>
            </div>
            <div>
              <input
                id="profileIconTextColor"
                v-model="profileIconTextColor"
                type="color"
                name="profileIconTextColor"
              />
              <label for="profileIconTextColor">Text color</label>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script setup>
const user = useUser();

const profileIconBgColor = ref(user.data.preferences.profileIconBgColor);
const profileIconTextColor = ref(user.data.preferences.profileIconTextColor);

watch(profileIconBgColor, () => {
  user.$patch({
    data: {
      preferences: {
        profileIconBgColor: profileIconBgColor.value
      }
    }
  });
});

watch(profileIconTextColor, () => {
  user.$patch({
    data: {
      preferences: {
        profileIconTextColor: profileIconTextColor.value
      }
    }
  });
});
</script>
