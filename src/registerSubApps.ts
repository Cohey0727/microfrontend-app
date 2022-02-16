import { registerMicroApps, start } from "qiankun";

const registerSubApps = () => {
  registerMicroApps([
    {
      name: "camera-app",
      entry: "//localhost:3001",
      container: "#sub-container",
      activeRule: "/camera",
      props: { basename: "/" },
    },
  ]);
  start();
};

export default registerSubApps;
