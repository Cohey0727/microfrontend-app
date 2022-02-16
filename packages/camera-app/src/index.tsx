import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "./public-path";
import App from "./App";

type RenderProps = {
  basename?: string;
};

const rootElementId = "sub-root";

function render(props: RenderProps) {
  const { basename = "/" } = props;
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter basename={basename}>
        <App />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById(rootElementId)
  );
}

// 単独で起動させる用
if (!(window as any).__POWERED_BY_QIANKUN__) {
  render({});
}

export async function bootstrap() {
  console.log("[react17] react app bootstraped");
}

export async function mount(props: RenderProps) {
  console.log("[react17] props from main framework", props);
  render(props);
}

export async function unmount(props: any) {
  ReactDOM.unmountComponentAtNode(document.getElementById(rootElementId)!);
}
