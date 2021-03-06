const userHTML = ({
  id,
  firstName,
  lastName,
  email,
  phone,
  active,
}) => `<tr id=${email} class=${active ? "active" : ""}>
    <td>${id}</td>
    <td>${firstName}</td>
    <td>${lastName}</td>
    <td>${email}</td>
    <td>${phone}</td>
</tr>`;

export const renderUserTableRow = (users) => {
  users.forEach((user) =>
    document
      .querySelector("tbody")
      .insertAdjacentHTML("beforeend", userHTML({ ...user }))
  );
};
