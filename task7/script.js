 const userContainer = document.getElementById("userContainer");
    const statusText = document.getElementById("status");
    const reloadBtn = document.querySelector(".reload-btn");

    async function fetchUsers() {
      statusText.textContent = "Loading users...";
      userContainer.innerHTML = "";

      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) throw new Error("Network response was not ok");
        
        const users = await response.json();
        statusText.textContent = "";
        
        users.forEach(user => {
          const card = document.createElement("div");
          card.classList.add("card");
          card.innerHTML = `
            <h2>${user.name}</h2>
            <p>Email : ${user.email}</p>
            <p>Address : ${user.address.street}, ${user.address.city}</p>
          `;
          userContainer.appendChild(card);
        });
      } catch (error) {
        statusText.textContent = "";
        statusText.classList.add("error");
        statusText.textContent = "Failed to load users. Please try again.";
      }
    }

    reloadBtn.addEventListener("click", fetchUsers);

    // Initial load
    fetchUsers();