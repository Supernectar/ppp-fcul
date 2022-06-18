import GAuth from 'vue3-google-oauth2';

export default defineNuxtPlugin((nuxtApp) => {
  const gAuthOptions = {
    clientId:
      '526321408660-j5qb9lh7f4qm940agaapuaosg00fiq89.apps.googleusercontent.com',
    // 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
    scope: 'profile email',
    prompt: 'consent',
    fetch_basic_profile: false,
    plugin_name: 'streamy'
  };
  nuxtApp.vueApp.use(GAuth, gAuthOptions);
});
