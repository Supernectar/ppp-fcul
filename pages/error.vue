<template>
  <div>
    <Navbar />
    <div class="flex justify-center" role="alert">
      <div
        class="bg-red-100 w-100 rounded-lg py-5 mt-10 px-6 mb-4 text-base text-red-700"
      >
        <div class="flex items-center mb-2">
          <h4 class="text-2xl font-medium leading-tight">Payment Declined</h4>
          <XCircleIcon class="h-6 mx-3" />
        </div>
        <p class="mb-4">
          Something did not work out when trying to finish your payment, please
          try again. Click on the link below to go back to the payment page and
          check your information.
        </p>
        <hr class="border-red-600 opacity-30" />
        <!-- <p class="mt-4 mb-0"> -->
        <NuxtLink
          to="/purchase/payment"
          class="mt-4 mb-0 text-red-800 underline"
        >
          TRY AGAIN
        </NuxtLink>
        <!-- </p> -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { XCircleIcon } from '@heroicons/vue/outline';
</script>
