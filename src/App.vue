<template>
  <div id="app">
      <Report />
  </div>
</template>

<script>
import Report from "./views/Report";
export default {
  name: 'App',
  components: {
    Report
  }
}
</script>

<style>

    html {
        line-height: 1.46;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
    }

    body {
        margin: 0;
        text-align: center;
    }

    h1, h2, h3, h4 {
        margin: 0;
    }

    p {
        margin: 0;
    }

    ul {
        padding: 0;
        list-style: none;
    }

    dl, dd {
        margin: 0;
    }

    h1 > small, h1 > time {
        display: block;
    }

    input {
        border: 0;
        margin: 0;
        padding: 0;
    }
    input:focus {
        outline: none;
    }

    article, figure {
        display: block;
    }

    figure {
        margin: 1em 40px;
    }

    summary:focus {
        outline: none;
    }

    fieldset {
        border: 0;
        margin: 0;
        padding: 0;
    }

    button {
        border: 0;
        cursor: pointer;
    }

    a {
        background-color: transparent;
        -webkit-text-decoration-skip: objects;
    }
    a:active, a:hover {
        outline-width: 0;
    }

    #report ul li:before, #report ul li:after {
        content: "";
        position: absolute;
    }

    :root {
        font-size: 0.875rem;
    }
    @media (min-width: 24em) {
        :root {
            font-size: 0.9375rem;
        }
    }
    @media (min-width: 48em) {
        :root {
            font-size: 1rem;
        }
    }

    body {
        cursor: default;
        font-family: "Montserrat", sans-serif;
        color: #CCC;
        background: #1E1D2F;
    }

    a {
        display: inline-block;
        color: #EEE;
        position: relative;
        text-decoration: none;
    }

    #app {
        display: flex;
        position: relative;
        flex-direction: column-reverse;
        justify-content: center;
    }
    @media (min-width: 64em) {
        #app {
            min-height: 100vh;
        }
    }

    /* Transitions */

    .component-fade-enter-active {
        transition: opacity .3s ease;
    }
    .component-fade-enter, .component-fade-leave-to
        /* .component-fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }

</style>
