<template>
  <div id="app">
    <h2>ご自身で変更するパラメータはありますか？</h2>
    <p class="margin"></p>

    <!--選択肢表示-->
    <div v-for="content in contents" :key="content">
      <h3 class="subtitle">--{{content.subtitle}}--</h3>
      <label v-for="option in content.options" :key="option">
        <input
          type="checkbox"
          autocomplete="off"
          class="checkbox-input"
          v-model="selectedParams"
          v-bind:value="option"
        >
        <span class="checkbox-parts">{{ option }}</span>
      </label>
      <p class="margin"></p>
    </div>
    <p></p>
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
  components: {
    SelectedOptions
  },
  data() {
    return {
      allcontents: [
        {
          subtitle: "必須モード1",
          options: [
            "パラメータ1",
            "パラメータ2",
            "パラメータ3",
            "パラメータ4",
            "パラメータ5",
            "パラメータ6",
            "パラメータ7",
            "パラメータ8",
            "パラメータ9",
            "パラメータ10"
          ]
        },
        {
          subtitle: "モード1",
          options: [
            "パラメータ11",
            "パラメータ12",
            "パラメータ13",
            "パラメータ14",
            "パラメータ15",
            "パラメータ16",
            "パラメータ17",
            "パラメータ18",
            "パラメータ19",
            "パラメータ20"
          ]
        },
        {
          subtitle: "モード2",
          options: [
            "パラメータ21",
            "パラメータ22",
            "パラメータ23",
            "パラメータ24",
            "パラメータ25",
            "パラメータ26",
            "パラメータ27",
            "パラメータ28",
            "パラメータ29",
            "パラメータ30"
          ]
        },
        {
          subtitle: "モード3",
          options: [
            "パラメータ31",
            "パラメータ32",
            "パラメータ33",
            "パラメータ34",
            "パラメータ35",
            "パラメータ36",
            "パラメータ37",
            "パラメータ38",
            "パラメータ39",
            "パラメータ40"
          ]
        },
        {
          subtitle: "モード4",
          options: [
            "パラメータ41",
            "パラメータ42",
            "パラメータ43",
            "パラメータ44",
            "パラメータ45",
            "パラメータ46",
            "パラメータ47",
            "パラメータ48",
            "パラメータ49",
            "パラメータ50"
          ]
        },
        {
          subtitle: "モード5",
          options: [
            "パラメータ51",
            "パラメータ52",
            "パラメータ53",
            "パラメータ54",
            "パラメータ55",
            "パラメータ56",
            "パラメータ57",
            "パラメータ58",
            "パラメータ59",
            "パラメータ60"
          ]
        },
        {
          subtitle: "モード6",
          options: [
            "パラメータ61",
            "パラメータ62",
            "パラメータ63",
            "パラメータ64",
            "パラメータ65",
            "パラメータ66",
            "パラメータ67",
            "パラメータ68",
            "パラメータ69",
            "パラメータ70"
          ]
        },
        {
          subtitle: "モード7",
          options: [
            "パラメータ71",
            "パラメータ72",
            "パラメータ73",
            "パラメータ74",
            "パラメータ75",
            "パラメータ76",
            "パラメータ77",
            "パラメータ78",
            "パラメータ79",
            "パラメータ80"
          ]
        },
        {
          subtitle: "モード8",
          options: [
            "パラメータ81",
            "パラメータ82",
            "パラメータ83",
            "パラメータ84",
            "パラメータ85",
            "パラメータ86",
            "パラメータ87",
            "パラメータ88",
            "パラメータ89",
            "パラメータ90"
          ]
        },
      ],
      selectedParams: []
    };
  },
  methods: {
    next() {
      //選択されたパラメータを保管用配列にコピー
      SelectedOptions.params = this.selectedParams.slice();
      this.selectedParams = [];
      this.$router.push("/recommended_func_options");
    },
    back() {
      SelectedOptions.params = [];
      this.$router.push("/func_options");
    }
  },
  computed: {
    //mode_options画面で選択したモードに関するパラメータ一覧のみを表示させるようにする
    contents() {
      return this.allcontents
        .filter(el => {
          return (
            SelectedOptions.modes
              .map(element => {
                return el.subtitle === element;
              })
              .indexOf(true) >= 0
          );
        })
        .slice();
    }
  }
};
</script>

<style scoped>
/* 空白生成用 */
.margin {
  height: 30px;
  background: white;
}

/* 文字の表示を左詰めにしたかったが何故か変更されず */
.subtitle {
  position: left;
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
