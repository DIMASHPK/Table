import { users } from "../scripts";
import { renderUserTableRow } from "../renderUserTableRow/renderUserTableRow";
import { renderUserInfo } from "../renderUserInfo/renderUserInfo";

export const tableSortsInit = () => {
  const tableHeadTitle = document.querySelectorAll("table thead td");

  tableHeadTitle.forEach((td) => {
    td.addEventListener("click", (e) => eventCallBack(e, tableHeadTitle));
  });
};

export function eventCallBack({target}, tableHeadTitle){
  {
    let newWsers;

    if (target.classList.contains("active")) {
      target.classList.remove("active");
      
      renderSortingTable(target, tableSortsDescedding, newWsers);
    } else {
      tableHeadTitle.forEach((td) => td.classList.remove("active"));
      target.classList.add("active");
      
      renderSortingTable(target, tableSortsAscedding, newWsers);
    }
  }
}

function tableSortsAscedding(a, b, sortParam) {
  switch (sortParam) {
    case "id":
      return a.id > b.id ? 1 : -1;
    case "first name":
      return a.firstName > b.firstName ? 1 : -1;
    case "last name":
      return a.lastName > b.lastName ? 1 : -1;
    case "email":
      return a.email > b.email ? 1 : -1;
    case "phone":
      return a.phone > b.phone ? 1 : -1;
    default:
      return a.id > b.id ? 1 : -1;
  }
}

function tableSortsDescedding(a, b, sortParam) {
  switch (sortParam) {
    case "id":
      return a.id > b.id ? -1 : 1;
    case "first name":
      return a.firstName > b.firstName ? -1 : 1;
    case "last name":
      return a.lastName > b.lastName ? -1 : 1;
    case "email":
      return a.email > b.email ? -1 : 1;
    case "phone":
      return a.phone > b.phone ? -1 : 1;
    default:
      return a.id > b.id ? -1 : 1;
  }
}

function renderSortingTable(target, sortFunc, newWsers) {
  newWsers = users.newUsers.sort((a, b) => sortFunc(a, b, target.innerHTML));
  console.log(users.newUsers);

  [...document.querySelector("table tbody").children].forEach((tr) =>
    tr.remove()
  );
  renderUserTableRow(newWsers);
  renderUserInfo(newWsers);
}
