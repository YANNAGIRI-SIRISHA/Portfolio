console.log("Portfolio Loaded Successfully");

document.querySelectorAll("section").forEach(sec => {
  sec.addEventListener("mouseover", () => {
    sec.style.boxShadow = "0 0 10px gray";
  });

  sec.addEventListener("mouseout", () => {
    sec.style.boxShadow = "none";
  });
});
