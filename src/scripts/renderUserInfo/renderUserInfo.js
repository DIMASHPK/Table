import { users } from "../scripts";

const userInfoHTML = ({
  firstName,
  lastName,
  description,
  adress: { streetAddress, state, zip, city },
}) => `<h1>Выбран пользователь <b>${firstName} ${lastName}</b></h1>
<p>Описание: ${description}</p>
<p>Адрес проживания: <b>${streetAddress}</b></p>
<p>
  Город: <b>${city}</b> Провинция/штат: <b>${state}</b> Индекс: <b>${zip}</b>
</p>`;

export const renderUserInfo = () => {
  const tableRows = document.querySelectorAll("table tbody tr");

  tableRows.forEach((tr) => {
    tr.addEventListener("click", function () {
      const userWrap = document.querySelector(".userInfo");

      tableRows.forEach((tr) => tr.classList.remove("active"));
      [...userWrap.children].forEach((child) => child.remove());

      activeElem(this.id, userWrap);
      this.classList.add("active");
    });
  });
};

function activeElem(id, userWrap) {
  const elemForIndexNewUsers = users.newUsers
    .filter((user) => user.email == id)
    .pop();
  const elemForIndexSavedUsers = users.savedUsers
    .filter((user) => user.email == id)
    .pop();

  const indexNewUsers = users.newUsers.indexOf(elemForIndexNewUsers);
  const indexsavedUsers = users.savedUsers.indexOf(elemForIndexSavedUsers);

  users.newUsers = users.newUsers.map((users) => ({
    ...users,
    active: false,
  }));

  users.savedUsers = users.savedUsers.map((users) => ({
    ...users,
    active: false,
  }));

  users.newUsers[indexNewUsers].active = true;
  users.savedUsers[indexsavedUsers].active = true;

  userWrap.insertAdjacentHTML(
    "beforeend",
    userInfoHTML({ ...users.newUsers[indexNewUsers] })
  );
}
