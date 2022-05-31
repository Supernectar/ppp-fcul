<template>
  <div>
    <FormKit
      label="text"
      type="text"
      validation="customRule"
      :validation-rules="{ customRule }"
      :validation-messages="{
        customRule: 'custom rule validation failed',
      }"
      validation-visibility="live"
    />
  </div>
</template>

<script setup>
async function customRule(node) {
  console.log("Entered customRule function");
  let result = null;
  const res = await $fetch(`https://reqres.in/api/users?page=2`);

  console.log("returning not async data...");
  result = node.value == "a";

  console.log("returning async data!!!");
  result = res.data.length > 0;

  console.log(result);
  return result;
}
</script>
