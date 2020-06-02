import { renderUserTableRow } from "./renderUserTableRow/renderUserTableRow";
import { tableSortsInit } from "./tableSorts/tablesSorts";
import { renderUserInfo } from "./renderUserInfo/renderUserInfo";
import { preloader } from "./preloader/preloader";
import { tableFilters } from "./tableFilters.js/tableFilters";
import { pagination } from "./pagination/pagination";
import "../styles/styles.css";

export let users = {
  savedUsers: [],
  newUsers: [],
  page: 1,
  counter: 0,
  range: () => `numberRange|${1 + users.counter}to${10 + users.counter}`,
};
const main = document.querySelector("main");

main.style.display = "none";
document.body.insertAdjacentHTML("afterbegin", preloader());

export const initProject = async () => {
  const url = `http://www.filltext.com/?rows=10&pretty=true&id={${users.range()}}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&adress={addressObject}&description={lorem|32}`;
  const request = await fetch(url);
  const response = await request.json();
  users = { ...users, savedUsers: [...response], newUsers: [...response] };

  document.querySelectorAll("table tbody tr") &&
    document.querySelectorAll("table tbody tr").forEach((tr) => tr.remove());

  renderUserTableRow(users.newUsers);
  renderUserInfo(users.newUsers);

  document.querySelector(".preloader").remove();
  document.querySelector(".preloaderWrap") &&
    document.querySelector(".preloaderWrap").remove();

  main.style.display = "flex";
  

  document.querySelector(".userInfo").style.width =
    document.querySelector("table").getBoundingClientRect().width + "px";
};

tableSortsInit();
  tableFilters();

initProject();
pagination();
