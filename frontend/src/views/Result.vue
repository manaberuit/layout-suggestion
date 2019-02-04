<template>
  <div id="app">
    <h2>以下のようなレイアウトはいかがでしょうか。</h2>
    <p class="margin"></p>

    <!--装置画面-->
    <div class="layout">
      <draggable class="sideList" :options="{group:'tasks'}" ref="sideLists">
        <li
          v-for="sideBtn in sideBtnLists"
          :key="sideBtn.label"
          :class="sideBtn.size"
        >{{ sideBtn.label }}</li>
      </draggable>
      <draggable class="bottomList" :options="{group:'tasks'}">
        <li
          v-for="bottomBtn in bottomBtnLists"
          :key="bottomBtn.label"
          :class="bottomBtn.size"
        >{{ bottomBtn.label }}</li>
      </draggable>
    </div>

    <p class="margin"></p>

    <!--画面遷移ボタン-->
    <p class="button">
      <!--bootstrapのクラス名を指定して使用する-->
      <router-link to="/">
        <button type="button" class="btn btn-outline-primary btn-lg" v-on:click="toHome">ホームへ戻る</button>
      </router-link>
    </p>
  </div>
</template>

<script scoped>
import CalcLayout from "../lib/definition/calcLayout.js";
import SelectedOptions from "../lib/definition/selectedOptions.js";
import draggable from "vuedraggable";

export default {
  name: "HelloWorld",
  components: {
    CalcLayout,
    SelectedOptions,
    draggable
  },
  data() {
    return {
      bottomBtnLists: [],
      sideBtnLists: []
    };
  },
  methods: {
    toHome() {
      this.$router.push("/");
    }
  },
  created() {
    //レイアウト提案クラスをインスタンス化
    const calclayout = new CalcLayout(
      SelectedOptions.modes,
      SelectedOptions.funcs,
      SelectedOptions.params,
      SelectedOptions.recommendedFuncs
    );

    //bottomボタン、sideボタン表示用配列に代入
    this.bottomBtnLists = calclayout.bottomBtnLists;
    this.sideBtnLists = calclayout.sideBtnLists;
  }
};
</script>

<style>
.margin {
  height: 50px;
  background: white;
}

/* 装置画面のレイアウト*/
.bottomList {
  position: relative;
  left: -15px;
  top: 25px;
  width: 1000px;
  padding: 0;
}
.sideList {
  position: relative;
  left: -23px;
  top: 25px;
  width: 200px;
  padding: 0;
}
.layout {
  position: relative;
  left: 10px;
  width: 975px;
  height: 480px;
  background: #252525;
}
/* sideメニュー:大ボタンのレイアウト*/
.sideList > .large {
  font-weight: 500;
  color: rgb(209, 209, 209);
  font-size: 0.8em;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 3px;
  width: 137px;
  height: 50px;
  border-style: solid;
  border-width: 1px;
  border-color: rgb(32, 32, 32);
  border-radius: 5px;
  box-shadow: 1px 1px 10px black;
  background: linear-gradient(#383838 50%, #252525 50%);
}
.sideList > .large:hover {
  opacity: 0.5;
  cursor: pointer;
}
.sideList > .large:active {
  position: relative;
  top: 3px;
}
/* sideメニュー:中ボタンのレイアウト*/
.sideList > .medium {
  font-weight: 500;
  color: rgb(209, 209, 209);
  font-size: 0.8em;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 3px;
  width: 137px;
  height: 50px;
  border-style: solid;
  border-width: 1px;
  border-color: rgb(32, 32, 32);
  border-radius: 5px;
  box-shadow: 1px 1px 10px black;
  background: linear-gradient(#383838 50%, #252525 50%);
}
.sideList > .medium:hover {
  opacity: 0.5;
  cursor: pointer;
}
.sideList > .medium:active {
  position: relative;
  top: 3px;
}
/* sideメニュー:小ボタンのレイアウト*/
.sideList > .small {
  font-weight: 500;
  color: rgb(209, 209, 209);
  font-size: 0.6em;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 3px;
  width: 65px;
  height: 50px;
  border-style: solid;
  border-width: 1px;
  border-color: rgb(32, 32, 32);
  border-radius: 5px;
  box-shadow: 1px 1px 10px black;
  background: linear-gradient(#383838 50%, #252525 50%);
}
.sideList > .small:hover {
  opacity: 0.5;
  cursor: pointer;
}
.sideList > .small:active {
  position: relative;
  top: 3px;
}
/* sideメニュー:空白ボタンのレイアウト*/
.sideList > .empty {
  color: #252525;
  font-size: 0.8em;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 3px;
  width: 137px;
  height: 50px;
  background: #252525;
}
.sideList > .empty:hover {
  opacity: 0.5;
  cursor: pointer;
  background: #888787;
  color: #888787;
}
.sideList > .empty:active {
  position: relative;
  top: 3px;
}
/* bottomメニュー:大ボタンのレイアウト*/
.bottomList > .large {
  font-weight: 500;
  color: rgb(209, 209, 209);
  font-size: 0.8em;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 3px;
  width: 122px;
  height: 90px;
  border-style: solid;
  border-width: 1px;
  border-color: rgb(32, 32, 32);
  border-radius: 5px;
  box-shadow: 1px 1px 10px black;
  background: linear-gradient(#383838 50%, #252525 50%);
}
.bottomList > .large:hover {
  opacity: 0.5;
  cursor: pointer;
}
.bottomList > .large:active {
  position: relative;
  top: 3px;
}
/* bottomメニュー:中ボタンのレイアウト*/
.bottomList > .medium {
  font-weight: 500;
  color: rgb(209, 209, 209);
  font-size: 0.8em;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 3px;
  width: 90px;
  height: 90px;
  border-style: solid;
  border-width: 1px;
  border-color: rgb(32, 32, 32);
  border-radius: 5px;
  box-shadow: 1px 1px 10px black;
  background: linear-gradient(#383838 50%, #252525 50%);
}
.bottomList > .medium:hover {
  opacity: 0.5;
  cursor: pointer;
}
.bottomList > .medium:active {
  position: relative;
  top: 3px;
}
/* bottomメニュー:小ボタンのレイアウト*/
.bottomList > .small {
  font-weight: 500;
  color: rgb(209, 209, 209);
  font-size: 0.6em;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 3px;
  width: 58px;
  height: 90px;
  border-style: solid;
  border-width: 1px;
  border-color: rgb(32, 32, 32);
  border-radius: 5px;
  box-shadow: 1px 1px 10px black;
  background: linear-gradient(#383838 50%, #252525 50%);
}
.bottomList > .small:hover {
  opacity: 0.5;
  cursor: pointer;
}
.bottomList > .small:active {
  position: relative;
  top: 3px;
}
/* bottomメニュー:空白ボタンのレイアウト*/
.bottomList > .empty {
  color: #252525;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 3px;
  width: 58px;
  height: 90px;
  background: #252525;
}
.bottomList > .empty:hover {
  opacity: 0.5;
  cursor: pointer;
  background: #888787;
  color: #888787;
}
.bottomList > .empty:active {
  position: relative;
  top: 3px;
}
</style>
