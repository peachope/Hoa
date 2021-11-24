$(document).ready(function () {
  const courses = [
    {
      content: "Khái niệm",
      link: "#",
      category: ["KN"],
      itemsFirst: [
        {
          content: "Chương 1: Logic",
          link: "#",
        },
        {
          content: "Chương 2: Logic",
          link: "#",
        },
        {
          content: "Chương 3: Logic",
          link: "#",
        },
      ],
    },
    {
      content: "Định lí & Tính chất",
      link: "#",
      category: ["DL"],
      itemsChild: [
        {
          content: "Chương 1: Logic",
          link: "#",
        },
        {
          content: "Chương 2: Logic",
          link: "#",
        },
        {
          content: "Chương 3: Logic",
          link: "#",
        },
      ],
    },
    {
      content: "Dạng bài tập",
      link: "#",
      category: ["DBT"],
      itemsChild: [
        {
          content: "Chương 1: Logic",
          link: "#",
        },
        {
          content: "Chương 2: Logic",
          link: "#",
        },
        {
          content: "Chương 3: Logic",
          link: "#",
        },
      ],
    },
    {
      content: "Phương pháp giải",
      link: "#",
      category: ["PPG"],
      itemsChild: [
        {
          content: "Chương 1: Logic",
          link: "#",
        },
        {
          content: "Chương 2: Logic",
          link: "#",
        },
        {
          content: "Chương 3: Logic",
          link: "#",
        },
      ],
    },
  ];

  renderTeam(courses, "#checkboxs");
  // let check = 0;
  // const listCate = ["KN", "DL", "DBT", "PPG"];
  const listCate = [];

  const listNode = document.getElementById("hello");
  const allCheckBox = document.querySelectorAll(".vehicle");
  for (var checkbox of allCheckBox) {
    checkbox.addEventListener("click", function () {
      if (this.checked === true) {
        listCate.push(this.value);
        renderSideBar(listCate);
        renderCateOnSideBar(listCate, listNode);
      } else {
        resetCate();
        var arr = listCate.filter((val) => val.value !== this.value);
        renderSideBar(listCate);
        renderCateOnSideBar(listCate, listNode);
      }
    });
  }
});

var resetCate = () => {
  var getAllCate = document.querySelectorAll("#hello li");
  getAllCate.forEach((val) => {
    val.remove();
  });
};

function renderTeam(list, selector) {
  list.map((val, index) => {
    $(
      `<input type="checkbox" class="vehicle" name="vehicle" value="${val.category[0]}">
       <label for="vehicle1"> ${val.content}</label><br>`
    ).appendTo(selector);
  });
}

const renderCateOnSideBar = (list, listNode) => {
  resetCate();
  list.forEach((val) => {
    var cate = document.createElement("li");
    cate.innerHTML = `<span>${val}</span>
            `;
    cate.value = val;
    listNode.appendChild(cate);
  });
};

function renderSideBar(check) {
  const side = document.querySelector(".sidebar");
  const hbr = document.querySelector(".hambuger");
  const cate = document.querySelector(".listCate");

  if (check.length !== 0) {
    side.style.display = "none";
    hbr.style.display = "none";
    cate.style.display = "block";
  } else {
    side.style.display = "block";
    hbr.style.display = "block";
    cate.style.display = "none";
  }
}
