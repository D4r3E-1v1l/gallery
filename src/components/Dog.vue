<template>
  <div class="hello">
    <h2 id="stage">Stage 4</h2>
    <div id="dog-img">
      <img alt="dog"
           src="@/assets/image4.png"
           width="360"
           height="520"
           @mouseenter="hover"/>
    </div>

    <div id="pet-name">
      <p>
        {{ text }}
      </p>
      <input value="suggestion"
             @input="changeText"/>
      <button @click="setText">send</button>
      <p>
        {{ thankyou }}
      </p>
    </div>

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
  name: 'CuteDog',
  data() {
    return {
      text: 'Name suggestion for my cutie pet',
      thankyou: ''
    }
  },

  methods: {

    hover(e) {
      if (index <= 0) {
        return;
      }

      index--;
      e.target.src = imgList[index];
      let stage = document.getElementById("stage");
      stage.innerText = "stage" + (index + 1);

    },

    changeText(e) {
      this.text = e.target.value;
    },

    setText() {
      let t = this.text;

      console.log(t)

      if (t === "") {
        this.text = 'cannot send empty name.'
        return
      }


      this.thankyou = 'Thanks for your suggestion!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#stage {
  padding-top: 20px;
  padding-bottom: 40px;
  display: flex;
  justify-content: center;
  color: black;
}
#dog-img {
  display: flex;
  justify-content: center;
}

#dog-img img {
  border-radius: 25px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  object-fit: contain;
}

#pet-name {
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#pet-name input {
  width: 200px;
  margin-bottom: 14px;
  padding: 6px;
  border: 1px solid #ccc;
  border-radius: 5px;

  -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
  box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
  -webkit-transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
  -o-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
  transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
}

#pet-name input:focus {
  border-color: #ffe54c;
  border-width: 1px;
  outline: 0;
  /*-webkit-box-shadow: none;*/
  /*box-shadow: none;*/
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(255, 214, 0, .7);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(255, 214, 0, .7);
}

#pet-name p {
  text-align: center;
  padding-bottom: 14px;
}

#pet-name button {
  padding: 0.6em 3em;
  color: rgb(0, 0, 0);
  background-color: #DDDDDDFF;
  font-size: 1em;
  font-weight: 600;
  border-radius: 5px;
  border-width: 0;
}

#pet-name button:hover {
  background-color: #B0B0B0FF;
}

</style>