<template>
  <div id="app">
    <h2>機能をお選びください</h2>
    <p class="margin"></p>

    <!--選択肢表示-->
    <label v-for="option in options" :key="option">
      <input
        type="checkbox"
        autocomplete="off"
        class="checkbox-input"
        v-model="selectedFuncs"
        v-bind:value="option"
      >
      <span class="checkbox-parts">{{ option }}</span>
    </label>
    <p class="margin"></p>

    <!--画面遷移ボタン-->
    <p class="button">
      <b-button type="button" size="lg" variant="outline-primary" v-on:click="next">次へ</b-button>
      <b-button type="button" size="lg" variant="outline-primary" v-on:click="back">戻る</b-button>
    </p>
  </div>
</template>

<script>
//保管用配列をインポート
import SelectedOptions from "../lib/definition/selectedOptions.js";

export default {
  name: "HelloWorld",
  data() {
    return {
      options: [
        "機能1",
        "機能2",
        "機能3",
        "機能4",
        "機能5",
        "機能6",
        "機能7",
        "機能8",
        "機能9"
      ],
      selectedFuncs: []
    };
  },
  methods: {
    next() {
      //必須機能を最初に保管用配列に追加（順番が大切なので最初に追加）
      SelectedOptions.funcs.push("必須機能1");
      //選択された機能を保管用配列に追加
      this.selectedFuncs.forEach(ele => {
        SelectedOptions.funcs.push(ele);
      });
      this.selectedFuncs = [];

      this.$router.push("/param_options");
    },
    back() {
      //前ページへ戻る際には保管用配列を空にしておく
      SelectedOptions.funcs = [];
      this.$router.push("/mode_options");
    }
  },
  created() {
    //デバッグ用
    console.log(SelectedOptions.modes);
  }
};
</script>

<style scoped>
/* 空白生成用 */
.margin{
  height: 30px;
  background: white
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
