<template>
  <div id="app">
    <h2>以下のような機能も備わっていますが、いかがでしょうか？</h2>
    <p class="margin"></p>
    
    <!--機能説明-->
    <div v-for="content in contents" :key="content.subtitle">
      <h5>--{{content.subtitle}}--</h5>
      <p>{{content.message}}</p>
    </div>
    <p class="margin"></p>
    <hr>
    <h4>以下の機能を使用する</h4>
    <p class="margin"></p>

    <!--選択肢表示-->
    <label v-for="option in options" :key="option">
      <input
        type="checkbox"
        autocomplete="off"
        class="checkbox-input"
        v-model="selectedRecommendedFuncs"
        v-bind:value="option"
      >
      <span class="checkbox-parts">{{ option }}</span>
    </label>
    <p class="margin"></p>

    <!--画面遷移ボタン-->
    <p class="button">
      <b-button type="button" size="lg" variant="outline-primary" v-on:click="next">完了</b-button>
      <b-button type="button" size="lg" variant="outline-primary" v-on:click="back">戻る</b-button>
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
      options: [
        "推奨機能1",
        "推奨機能2",
        "推奨機能3",
        "推奨機能4",
        "推奨機能5",
        "推奨機能6"
      ],
      contents: [
        {
          subtitle: "推奨機能1",
          message: "これは○○という機能です！！"
        },
        {
          subtitle: "推奨機能2",
          message: "これは○○という機能です！！"
        },
        {
          subtitle: "推奨機能3",
          message: "これは○○という機能です！！"
        },
        {
          subtitle: "推奨機能4",
          message: "これは○○という機能です！！"
        },
        {
          subtitle: "推奨機能5",
          message: "これは○○という機能です！！"
        },
        {
          subtitle: "推奨機能6",
          message: "これは○○という機能です！！"
        }
      ],
      selectedRecommendedFuncs: []
    };
  },
  methods: {
    next() {
      //選択された推奨機能を保管用配列にコピー
      SelectedOptions.recommendedFuncs = this.selectedRecommendedFuncs.slice();
      this.selectedRecommendedFuncs = [];
      this.$router.push("/result");
    },
    back() {
      SelectedOptions.recommendedFuncs = [];
      this.$router.push("/param_options");
    }
  },
  created() {
    //デバッグ用
    console.log(SelectedOptions.params);
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