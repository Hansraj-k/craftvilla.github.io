	  // preloader
      window.addEventListener("load", () => {
        const loader = document.getElementById("pre-loader");
        setTimeout(() => {
          loader.classList.add("hide");
        }, 2000);
      });
      