async function loadUsers (){
  const list = document.getElementById("users");

  try{
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    
    if (!response.ok){
      throw new Error();
    }

    const users = await response.json();  

    users.forEach(user => {
      const li = document.createElement("li");
      li.textContent = user.name + " ("+ user.email +  ") ";
      list.appendChild(li);
    });
      
    
  }
   catch (error) {
    list.innerHTML = "Помилка завантаження";
   }
}

loadUsers();