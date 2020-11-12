<template>
<div class="spinner-context">
      <!--<b-iconstack :font-scale="scale">
        <b-icon stacked icon="star-fill" animation="fade" :scale="0.4 * scale" ></b-icon>
        <b-icon stacked icon="arrow-clockwise" animation="spin" :scale="1 * scale"></b-icon>
      </b-iconstack>-->
      <div class="spinner-pos "><img height="30" width="30" src="../assets/manada.png"></div>
      <b-spinner class="spinner-pos" style="width: 4rem; height: 4rem;"></b-spinner>
    </div>
</template>

<script>

export default {
  name: 'Spinner',
  props: {
    scale: {
      type: Number,
      default: 1,
    },
  },
  data () {
    return {
    }
  },
  mounted() {
  },
  methods: {
  }
}
</script>

<style>

@keyframes example {
  0% {opacity: 0}
  25% {opacity: 0.5;}
  50% {opacity: 1;}
  75% {opacity: 0.5;}
  100% {opacity: 0;}
}

.anim {
  animation-name: example;
  animation-duration: 0.7s;
  animation-iteration-count: infinite;
}

.spinner-pos {
  position: absolute;
  color: black;
  opacity: 0.7;
  font-size: 1rem !important;
}

.spinner-context {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image {
  opacity: 1;
}

</style>
