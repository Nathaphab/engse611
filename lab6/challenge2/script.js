document.addEventListener("DOMContentLoaded", function () {
  let paragraphs = document.querySelectorAll("#main p");
  paragraphs.forEach(paragraph => {
      if (paragraph.textContent.includes("Llamas and Chickens!")) {
          paragraph.style.color = "red";
      }
  });
});
