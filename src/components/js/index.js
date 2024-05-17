let isBar = true;
export let onClickBar = () => {
 
    let menu = document.querySelector("#menu");
      if (isBar ===true) {
        menu.classList.add("fa-times");
        menu.classList.remove("fa-bar");
        document.querySelector(".navbar").classList.add("nav-toggle");
        isBar = false;
      } else {
        document.querySelector(".navbar").classList.remove("nav-toggle");
        menu.classList.remove("fa-times");
        menu.classList.add("fa-bar");
        isBar = true;
      }
  };

  export let onRemoveBar=()=>{
    let menu = document.querySelector("#menu");
    console.log("nav removed")
    document.querySelector(".navbar").classList.remove("nav-toggle");
    menu.classList.remove("fa-times");
    menu.classList.add("fa-bar");
    isBar = true;
    window.scrollTo({ top: 0, behavior: "smooth" });
    console.log("scroll to top");
  }
