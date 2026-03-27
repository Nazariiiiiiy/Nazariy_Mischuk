let input = document.getElementById("textInput");
let addBtn = document.getElementById("addBtn");
let sortBtn = document.getElementById("sortBtn");
let list = document.getElementById("myList");

addBtn.addEventListener("click", function(){
  let text = input.value.trim();

  if(text === ""){
    alert("Ведіть текст!");
    return;
  }
  let li = document.createElement("li")
  li.textContent = text;

  li.addEventListener("click", function(){
    li.remove();
  });

  list.appendChild(li);
  input.value = "";
});

sortBtn.addEventListener("click", function(){
  
  let items = Array.from(list.children);

  items.sort(function(a, b){
    return a.textContent.localeCompare(b.textContent);
  });
  
  list.innerHTML = "";

  items.forEach(function(item){
    list.appendChild(item);
  });
});