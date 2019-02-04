<template>
  <div id="app">
    <h2>モードをお選びください</h2>
    <p class="margin"></p>

    <!--選択肢表示-->
    <label v-for="option in options" :key="option">
      <input
        type="checkbox"
        autocomplete="off"
        class="checkbox-input"
        v-model="selectedModes"
        v-bind:value="option"
      >
      <span class="checkbox-parts">{{ option }}</span>
    </label>
    <p class="margin"></p>

    <!--画面遷移ボタン-->
    <p class="button">
      <b-button type="button" size="lg" variant="outline-primary" v-on:click="next">次へ</b-button>
    </p>
  </div>
</template>

<script>
//保管用配列をインポート
import SelectedOptions from "../lib/definition/selectedOptions.js";

export default {
  name: "HelloWorld",
  components: {
    SelectedOptions
  },
  data() {
    return {
      options: ["モード1", "モード2", "モード3", "モード4", "モード5", "モード6", "モード7", "モード8"],
      selectedModes: []
    };
  },
  methods: {
    next() {
      //選択されたモードを保管用配列にコピー
      SelectedOptions.modes = this.selectedModes.slice();
      //必須モードを最初に保管用配列に追加
      SelectedOptions.modes.push("必須モード1");
      this.selectedModes = [];

      this.$router.push("/func_options");
    }
  },
  created() {
    //初期化処理
    //保管用配列を全て空にする
    console.log("初期化");
    SelectedOptions.modes = [];
    SelectedOptions.funcs = [];
    SelectedOptions.params = [];
    SelectedOptions.recommendedFuncs = [];
  }
};
</script>

<style scoped>
/* 空白生成用 */
.margin {
  height: 30px;
  background: white;
}

/* css checkboxの見た目をいい感じにしてくれるやつ（ネットから流用） */
.checkbox-input {
  display: none;
}
.checkbox-parts {
  padding-left: 20px;
  position: relative;
  margin-right: 20px;
}
.checkbox-parts::before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 15px;
  height: 15px;
  border: 1px solid #999;
  border-radius: 4px;
}
.checkbox-input:checked + .checkbox-parts {
  color: #009a9a;
}
.checkbox-input:checked + .checkbox-parts::after {
  content: "";
  display: block;
  position: absolute;
  top: -5px;
  left: 5px;
  width: 7px;
  height: 14px;
  transform: rotate(40deg);
  border-bottom: 3px solid #009a9a;
  border-right: 3px solid #009a9a;
}
</style>
