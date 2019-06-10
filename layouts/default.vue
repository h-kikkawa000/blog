<template>
  <div>
<div class="relative">
              <img  class="home-intro_logo" src="../assets/portfolio-logo.png">
            
    <img class="example" src="../assets/desk-3139127_1920.jpg" alt="" >
    </div>
    <nuxt />
  </div>
</template>

<style>


.example{
    position: relative;
}


.home-intro_logo {
    position: absolute;
 
    top: 30%;
    left: 50%;
    -webkit-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
    z-index: 100;
    width: 375px;
}

.home-intro_logo circle, .home-intro_logo path, .home-intro_logo rect {
    fill: #fff;
}

:not(svg) {
    transform-origin: 0px 0px;
}

html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

</style>
