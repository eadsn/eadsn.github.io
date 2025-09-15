document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector("#dark-toggle");

  // manter preferência salva
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
  }

  if (btn) {
    btn.addEventListener("click", () => {
      document.body.classList.toggle("dark");
      if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
      } else {
        localStorage.setItem("theme", "light");
      }
    });
  }
});
