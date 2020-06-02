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

export const renderUserInfo = (users) => {
  const tableRows = document.querySelectorAll("table tbody tr");

  tableRows.forEach((tr) => {
    tr.addEventListener("click", function () {
      const userWrap = document.querySelector(".userInfo");

      const index = users.indexOf(
        users.filter((user) => user.email == this.id).pop()
      );

      tableRows.forEach((tr) => tr.classList.remove("active"));
      [...userWrap.children].forEach((child) => child.remove());

      userWrap.insertAdjacentHTML(
        "beforeend",
        userInfoHTML({ ...users[index] })
      );
      this.classList.add("active");
    });
  });
};
