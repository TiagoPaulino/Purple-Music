let toglle = document.querySelectorAll(".togllebuton");
      toglle.forEach((element) => {
        element.addEventListener("click", switchHidden);
      });

      let banner = document.querySelectorAll(".album img");

      banner.forEach((element) => {
        element.addEventListener("click", chageBg);
      });
      function switchHidden() {
        let element = document.querySelector(".menu-list");
        element.classList.toggle("see");
      }
      function chageBg(tagImg) {
        let img = tagImg.path[0].currentSrc;
        let back = document.querySelector(".main-bg");
        back.style.backgroundImage = `url(${img})`;
        console.log(img);
      }