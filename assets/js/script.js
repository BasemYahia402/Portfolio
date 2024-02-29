import {
  filterBtn,
  filterItems,
  navigationLinks,
  pages,
  select,
  selectItems,
  selectValue,
  sidebar,
  sidebarBtn,
} from "./elements.js";

// element toggle function
const elementToggleFunc = (elem) => {
  elem.classList.toggle("active");
};

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", () => {
  elementToggleFunc(sidebar);
});

// custom select variables
select.addEventListener("click", function () {
  elementToggleFunc(this);
});

const handleClickSelectItems = (item) => {
  const selectedValue = item.innerText.toLowerCase();
  selectValue.innerText = item.innerText;
  elementToggleFunc(select);
  filterFunc(selectedValue);
};
selectItems.forEach((item) => {
  item.addEventListener("click", () => handleClickSelectItems(item));
});

// filter variables
const filterFunc = (selectedValue) => {
  filterItems.forEach((item) => {
    if (selectedValue === "all" || selectedValue === item.dataset.category) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
};

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];
filterBtn.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const selectedValue = event.currentTarget.innerText.toLowerCase();
    selectValue.innerText = selectedValue;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    btn.classList.add("active");
    lastClickedBtn = btn;
  });
});

// add event to all nav link
navigationLinks.forEach((link, index) => {
  link.addEventListener("click", () => {
    const clickedPage = link.innerHTML.toLowerCase();
    pages.forEach((page, pageIndex) => {
      const pageName = page.dataset.page;
      const isMatch = clickedPage === pageName;
      page.classList.toggle("active", isMatch);
      navigationLinks[pageIndex].classList.toggle("active", isMatch);
    });
    window.scrollTo(0, 0);
  });
});
