import { registerMicroApps, start } from "qiankun";

const registerSubApps = () => {
  registerMicroApps([]);
  start();
};

export default registerSubApps;
