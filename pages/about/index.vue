<template>
  <div :class="$options.name">
    <div :class="`${$options.name}__hero mb-4 mb-md-5 mx-auto text-center`">
      <h1 class="display-4">About</h1>
      <p class="lead">
        Sed diam nonumy eirmod tempor invidunt ut lLorem ipsum dolor sit amet,
        consetetur sadipscing elitr.
      </p>
    </div>

    <p>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
      clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
      amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
      nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
      sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
      rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
      ipsum dolor sit amet.
    </p>

    <p>
      Amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      voluptua. At vero eos labore et dolore magna aliquyam erat,
      sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
      rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
      ipsum dolor sit amet.
    </p>
  </div>
</template>

<script>
export default {
  name: `About`,
};
</script>

<style>
.About__hero {
  max-width: 36em;
}
</style>
