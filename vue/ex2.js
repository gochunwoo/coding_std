const { createApp } = Vue;

// 1. hello 컴포넌트 (전역), aBasic mount
const appBasic = createApp({});
appBasic.component("hello", {
  template: "<h1>{{title}}</h1>",
  data() {
    return {
      title: "안녕",
    };
  },
});
appBasic.mount("#aBasic");

// 2. world 컴포넌트 (전역), aBasic2 mount
const appBasic2 = createApp({});
appBasic2.component("world", {
  template:
    '<h1>{{title}}<button @click="changeTitle">타이틀변경</button></h1>',
  data() {
    return {
      title: "반가워",
    };
  },
  methods: {
    changeTitle() {
      this.title = "제목이 변경됨 ㅗㅗ";
    },
  },
});
appBasic2.mount("#aBasic2");

// 3. my-global-component: 전역, my-local-component: 각 앱마다 다르게
const myGlobalComponent = {
  template: "<b>전역 컴포넌트가 등록! </b>",
};

// app (#app)
const app = createApp({
  components: {
    "my-global-component": myGlobalComponent,
    "my-local-component": {
      template: "<b>지역 컴포넌트가 등록됨 1</b>",
    },
  },
});
app.mount("#app");

// app2 (#app2)
const app2 = createApp({
  components: {
    "my-global-component": myGlobalComponent,
    "my-local-component": {
      template: "<b>지역 컴포넌트가 등록됨 2</b>",
    },
  },
});
app2.mount("#app2");

// app3 (#app3)
const app3 = createApp({
  components: {
    "my-global-component": myGlobalComponent,
    "my-local-component": {
      template: "<b>지역 컴포넌트가 등록됨 3</b>",
    },
  },
});
app3.mount("#app3");
