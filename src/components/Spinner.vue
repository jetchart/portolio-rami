<template>
<div class="spinner-context">
      <!--<b-iconstack :font-scale="scale">
        <b-icon stacked icon="star-fill" animation="fade" :scale="0.4 * scale" ></b-icon>
        <b-icon stacked icon="arrow-clockwise" animation="spin" :scale="1 * scale"></b-icon>
      </b-iconstack>-->
      <div class="spinner-pos "><img :height="15 * scale" :width="15 * scale" src="../assets/manada.png"></div>
      <b-spinner class="spinner-pos" :class="{'spinner-sm': scale == 1, 'spinner-md': scale == 2, 'spinner-lg': scale == 3, 'spinner-xl': scale == 4}"></b-spinner>
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
    variant: {
      color: String,
      default: 'black',
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

.spinner-sm {
  width: 2rem; 
  height: 2rem;
}

.spinner-md {
  width: 4rem; 
  height: 4rem;
}

.spinner-lg {
  width: 6rem; 
  height: 6rem;
}

.spinner-xl {
  width: 8rem; 
  height: 8rem;
}


</style>
