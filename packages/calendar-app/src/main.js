import "./public-path";
import { createApp } from "vue";
import "./public-path";
import App from "./App.vue";

let instance = null;

function render(props) {
  console.log(props);
  instance = createApp(App).mount("#app");
}

// when run independently
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log("[vue] vue app bootstraped");
}
export async function mount(props) {
  console.log("[vue] props from main framework");
  render(props);
}
export async function unmount() {
  if (instance) {
    instance.$destroy();
    instance = null;
  }
}
