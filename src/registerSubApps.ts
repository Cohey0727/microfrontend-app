import { registerMicroApps, start } from "qiankun";

const registerSubApps = () => {
  registerMicroApps([
    {
      name: "camera-app",
      entry: "//localhost:3001",
      container: "#sub-container",
      activeRule: "/camera",
      props: { basename: "/camera" },
    },
    {
      name: "calendar-app",
      entry: "//localhost:3002",
      container: "#sub-container",
      activeRule: "/calendar",
      props: { basename: "/calendar" },
    },
    {
      name: "file-app",
      entry: "//localhost:3003",
      container: "#sub-container",
      activeRule: "/file",
      props: { basename: "/file" },
    },
  ]);
  start();
};

export default registerSubApps;
