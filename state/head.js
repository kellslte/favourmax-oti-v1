import { atom, selector } from "recoil";

const headTitle = atom({
  key: "headTitle",
  default: "Welcome",
});

export default headTitle;