<template>
  <transition>
    <svg class="spinner" :class="{ show: show }" v-show="show" width="68px" height="68px" viewBox="0 0 44 44">
      <circle class="path" fill="none" stroke-width="4" stroke-linecap="round" cx="22" cy="22" r="20"></circle>
    </svg>
  </transition>
</template>

<script>
  export default {
    props: ['show']
  }
</script>

<style>

.spinner {
  position: fixed;
  z-index: 999;
  transition: opacity .15s ease;
  animation: rotator 1.4s linear infinite;
  animation-play-state: paused;
  right: 50%;
  top: 20%;
  margin-right: -34px;
}
.spinner.show {
    animation-play-state: running;
}
.spinner.v-enter, .spinner.v-leave-active {
    opacity: 0;
}
.spinner.v-enter-active, .spinner.v-leave {
    opacity: 1;
}
@keyframes rotator {
0% {
    transform: scale(0.5) rotate(0deg);
}
100% {
    transform: scale(0.5) rotate(270deg);
}
}
.spinner .path {
  stroke: #42b983;
  stroke-dasharray: 126;
  stroke-dashoffset: 0;
  transform-origin: center;
  animation: dash 1.4s ease-in-out infinite;
}
@keyframes dash {
0% {
    stroke-dashoffset: 126;
}
50% {
    stroke-dashoffset: 63 transform rotate(135deg);
}
100% {
    stroke-dashoffset: 126 transform rotate(450deg);
}
}

</style>