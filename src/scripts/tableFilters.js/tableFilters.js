import { users } from "../scripts";
import { renderUserTableRow } from "../renderUserTableRow/renderUserTableRow";
import { renderUserInfo } from "../renderUserInfo/renderUserInfo";

export const tableFilters = () => {
  const select = document.querySelector(".filterWrap select");
  const input = document.querySelector(".filterWrap input");
  const button = document.querySelector(".filterWrap button");

  button.addEventListener("click", () => {
    if (input.value.length < 1) {
      users.newUsers = [...users.savedUsers.map((user) => ({ ...user }))];
    } else {
      filterUsers(select, input);
    }

    document.querySelectorAll("table tbody tr").forEach((tr) => tr.remove());
    renderUserTableRow(users.newUsers);
    renderUserInfo(users.newUsers);
  });
};

function filterUsers(select, input) {
  users.newUsers = users.newUsers.filter((user) => {
    if (typeof user[select.value] !== "string") {
      return user[select.value].toString().includes(input.value);
    } else {
      return user[select.value].includes(input.value);
    }
  });
}
