import { initProject, users } from "../scripts";
import { preloader } from "../preloader/preloader";

export const pagination = () => {
  const prevButton = document.querySelector(".pagination .prev");
  const pageTitle = document.querySelector(".pagination .page");
  const nextButton = document.querySelector(".pagination .next");

  prevButton.addEventListener("click", () => {
    users.counter -= 10;
    users.page--;
    preloaderOpen();
    init(pageTitle);
    disabledButtons(prevButton, nextButton);
  });

  nextButton.addEventListener("click", () => {
    users.counter += 10;
    users.page++;
    preloaderOpen();
    init(pageTitle);
    disabledButtons(prevButton, nextButton);
  });
};

function init(pageTitle) {
  initProject();
  pageTitle.innerHTML = users.page;
}

function disabledButtons(prevButton, nextButton) {
  prevButton.disabled = users.page === 1;
  nextButton.disabled = users.counter >= 1000;
}

function preloaderOpen() {
  document
    .querySelector(".pagination")
    .insertAdjacentHTML("afterbegin", preloader());
}
