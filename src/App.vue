<template>
  <header>
    <h1>
      Different Stages of a Cute Dog
    </h1>
  </header>
  <main>
    <Dog/>
  </main>
  <footer>
    <div>
      <h3>Welcome to My Site</h3>
      <p>© 2022. Shiyu Liu.  All Rights Reserved.</p>
    </div>
  </footer>
</template>

<script>
import Dog from './components/Dog.vue'

export default {
  name: 'App',
  components: {
    Dog
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  background-color: ghostwhite;
}

header {
  background-color: #3b3b3b;
}

main {
  height: 800px;
}

footer {
  display: flex;
  justify-content: center;
  background-color: #3b3b3b;
}

footer div {
  padding-top: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
}

footer div p {
  padding-top: 24px;
  padding-bottom: 10px;
  font-size: small;
}

h1 {
  color: ghostwhite;
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  justify-content: center;
}

</style>
