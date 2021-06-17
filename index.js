	  // preloader
      window.addEventListener("load", () => {
        const loader = document.getElementById("pre-loader");
        setTimeout(() => {
          loader.classList.add("hide");
        }, 2000);
      });


if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js").then(registration => {
    console.log("SW Registered!");
    console.log(registration);
  }).catch(error => {
    console.log("SW Registration Failed");
    console.log(error);
  })
}
      