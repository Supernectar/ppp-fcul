<template>
  <div>
    <stripe-checkout
      ref="checkoutRef"
      mode="payment"
      :pk="publishableKey"
      :line-items="lineItems"
      :success-url="successURL"
      :cancel-url="cancelURL"
      @loading="(v) => (loading = v)"
    />
    <button @click="submit">Pay now!</button>
  </div>
</template>

<script>
import { StripeCheckout } from '@vue-stripe/vue-stripe';
export default {
  components: {
    StripeCheckout
  },
  data() {
    this.publishableKey =
      'pk_test_51LEDJlAIdQC80EPdG8z8dlFoL50XlSoMNe1JhuF2Tdap8U25BCRlWB8IiQnqa0YYBJy7JurPEuaDMaZWNgOlM0w5000FSV9i0w';
    return {
      loading: false,
      lineItems: [
        {
          price: 'price_1LEE10AIdQC80EPdTFO66MJv', // The id of the one-time price you created in your Stripe dashboard
          quantity: 1
        }
      ],
      successURL: 'http://localhost:3000/success',
      cancelURL: 'http://localhost:3000/error'
    };
  },
  methods: {
    submit() {
      // You will be redirected to Stripe's secure checkout page
      this.$refs.checkoutRef.redirectToCheckout();
    }
  }
};
</script>
