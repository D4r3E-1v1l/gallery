<template>
  <div class="hello">
    <h2 id="stage">Stage 4</h2>
    <img alt="dog"
         src="@/assets/image4.png"
         width="500"
         height="600"
         @mouseenter="hover"/>
  </div>
</template>

<script>
import img1 from "@/assets/image1.png";
import img2 from "@/assets/image2.png";
import img3 from "@/assets/image3.png";
import img4 from "@/assets/image4.png";

let index = 3;

let imgList = [
  img1,
  img2,
  img3,
  img4
]

export default {
  name: 'HelloWorld',
  props: {

  },

  methods: {

    hover(elem) {
      if (index <= 0) {
        return;
      }
      index--;
      console.log(index);
      elem.target.src = imgList[index % 4];
      let stage = document.getElementById("stage");
      stage.innerText = "stage" + (index + 1);

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
