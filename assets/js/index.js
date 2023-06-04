(function () {
  const acc = document.getElementsByClassName("accordion");
  const ul = document.querySelector(".portfolio ul");
  let accArr = Array.from(acc);

  accArr.forEach((e) => {
    e.addEventListener("click", function () {
      const icon = this.querySelector("i");
      icon.classList.toggle("fa-chevron-down");
      icon.classList.toggle("fa-chevron-up");
      this.classList.toggle("active");
      const panel = this.nextElementSibling;
      console.log(panel);
      if (panel.style.display === "flex") {
        panel.style.display = "none";
      } else {
        panel.style.display = "flex";
      }
    });
  });

  function getAPIGitHub() {
    fetch("https://api.github.com/users/GuittarJr/repos")
        .then(async (res) => {
        if (!res.ok) {
            return new Error(res.status);
        }
        let data = await res.json()
        data.map(item=>{
            const li = document.createElement('li');

            li.innerHTML = `
                <section class="title"><i class="fa-brands fa-github"></i><span>${item.name.toUpperCase()}</span></section>
                <a href="${item.html_url} target= "_blank" ">${item.full_name}</a>
            `

            ul.appendChild(li)
        })
        }).catch((e) => {
            console.log(e);
        });
  }
  getAPIGitHub()
})();
