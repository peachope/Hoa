// const listNode = document.querySelector("#hello");
// console.log("aloo");
// // const listCheck = document.querySelector(".myform");

// // function getvalue() {
// //     var checkbox = document.getElementsByName("vehicle");
// //     var result = "";
// //     for (let i = 0; i < checkbox.length; i++) {
// //       if (checkbox[i].checked === true) {
// //         result += " " + checkbox[i].value;
// //       }
// //     }
// //     let arr = result.split(" ").slice(1);
// //     console.log(arr);
// //     // var n = arr.includes("KN");
// //     // console.log(n);
// //   }

// // const renderCheckbox = () => {
// //     cateList.forEach((val) => {
// //         var checkbox = document.createElement("input")

// //     })
// // }
// // const resetCate = () => {
// //   var getAllCate = document.querySelectorAll(".left li");
// //   getAllCate.forEach((val) => {
// //     val.remove();
// //   });
// // };

// // const renderCateOnSideBar = (list) => {
// //   list.forEach((val, idx) => {
// //     var cate = document.createElement("li");
// //     cate.innerHTML = `<span>${val}</span>
// //            `;
// //     cate.value = val;

// //     listNode.appendChild(cate);
// //   });
// // };

// // var addBtn = document.querySelector(".btn-add");

// // var clearBtn = document.querySelector(".clear");
// // var inputNode = document.querySelector(".input-todo");
// // var todoList = [
// //   {
// //     id: 1,
// //     content: "Go shopping",
// //     done: true,
// //   },
// // ];
// // //clear all li
// // var resetTodo = () => {
// //   //delete all li
// //   var getAllTodo = document.querySelectorAll(".list li");
// //   getAllTodo.forEach((val) => {
// //     val.remove();
// //   });
// // };
// // //render
// // var renderTodo = () => {
// //   resetTodo();
// //   //render ra
// //   todoList.forEach((val, idx) => {
// //     var todo = document.createElement("li");
// //     todo.innerHTML = `<span>${val.content}</span>
// //         <i class="btn-update far fa-edit"></i>
// //         <i class="btn-delete far fa-trash-alt"></i>`;
// //     todo.dataset.id = val.id;
// //     if (val.done) {
// //       todo.classList.add("done");
// //     }
// //     listNode.appendChild(todo);
// //   });
// //   if (todoList.length) {
// //     //show clearbtn - sau khi push v‡o thÏ btn hi?n ra
// //     clearBtn.style.display = "block";
// //   }
// // };
// // //random id
// // var randomId = () => {
// //   return Math.floor(Math.random() * 10000);
// // };

// // var handleAddTodo = (isUpdate = false) => {
// //   //lay gi· tr? trong input
// //   var input = document.querySelector(".input-todo");
// //   var inputValue = input.value;
// //   //ktr xem cÛ r?ng hay ko
// //   if (!inputValue) {
// //     alert("plz type something");
// //     return;
// //   }

// //   //ktr xem cso trong m?ng hay chua
// //   var isExits = todoList.findIndex(
// //     (val) => val.content.toLowerCase() === inputValue.toLowerCase()
// //   );
// //   if (isExits !== -1) {
// //     alert("exited");
// //     return;
// //   }
// //   if (isUpdate) {
// //     var updateId = inputNode.dataset.idx;
// //     todoList[+updateId].content = inputValue;
// //     inputNode.removeAttribute("data-idx");
// //     addBtn.classList.remove("update");
// //     addBtn.textContent = "Add";
// //   } else {
// //     //d?y gi· tr? vÙ todolist
// //     todoList.push({
// //       id: randomId(),
// //       content: inputValue,
// //       done: false,
// //     });
// //   }

// //   //reset
// //   input.value = "";
// //   renderTodo();
// //   console.log("todoList", todoList);
// // };
// // //m?i v‡o thÏ render ra nh?ng c·i cÛ s?n trong dÛ
// // renderTodo();
// // //add todo
// // addBtn.addEventListener("click", function (e) {
// //   e.preventDefault();
// //   var isUpdate = e.target.classList.contains("update");
// //   handleAddTodo(isUpdate);
// // });

// // //catch enter
// // inputNode.addEventListener("keyup", function (e) {
// //   if (e.keyCode === 13) {
// //     var isUpdate = false;
// //     if (addBtn.textContent === "Update") {
// //       isUpdate = true;
// //     }
// //     handleAddTodo(isUpdate);
// //   }
// // });
// // //handle delete, update, change done status
// // listNode.addEventListener("click", function (e) {
// //   var id = e.target.parentNode.dataset.id;
// //   if (id && e.target.classList.contains("btn-delete")) {
// //     var idx = todoList.findIndex((val) => val.id == id);
// //     todoList.splice(idx, 1);
// //     renderTodo();
// //     return;
// //   }
// //   if (id && e.target.classList.contains("btn-update")) {
// //     var idx = todoList.findIndex((val) => val.id == id);
// //     inputNode.value = todoList[idx].content;
// //     addBtn.classList.add("update");
// //     inputNode.dataset.idx = idx;
// //     addBtn.textContent = "Update";
// //     return;
// //   }

// //   if (id) {
// //     var idx = todoList.findIndex((val) => val.id == id);
// //     todoList[idx].done = !todoList[idx].done;
// //     renderTodo();
// //   }
// // });

// // //s? ki?n clear all
// // clearBtn.addEventListener("click", function () {
// //   todoList.length = 0;
// //   resetTodo();
// //   clearBtn.style.display = "none"; //t?t n˙t clear
// // });
// const listCate = [];
// const resetCate = () => {
//   var getAllCate = document.querySelectorAll("#hello li");
//   getAllCate.forEach((val) => {
//     val.remove();
//   });
// };

// const renderCateOnSideBar = (list) => {
//   list.forEach((val, idx) => {
//     var cate = document.createElement("li");
//     cate.innerHTML = `<span>${val}</span>
//                `;
//     cate.value = val;

//     listNode.appendChild(cate);
//   });
// };

// var allCheckBox = document.querySelectorAll(".vehicle");
// allCheckBox.forEach((checkbox) => {
//   checkbox.addEventListener("click", function () {
//     if (this.checked === true) {
//       listCate.push(this.value);
//       console.log("checked");
//       listNode.innerHTML = listCate.join("/");
//     } else {
//       console.log("unchecked");
//       listCate.filter((e) => e !== this.value);
//     }
//   });
// });
