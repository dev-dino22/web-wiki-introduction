window.addEventListener("DOMContentLoaded", function () {
  const getHTML = (e) => document.getElementById(e);

  document.querySelectorAll(".gallery-content").forEach((element) =>
    element.addEventListener("click", (event) => {
      event.preventDefault();

      const bgImage = getComputedStyle(element).backgroundImage;

      const imgSrc = bgImage.slice(5, -2);

      getHTML("modalBackground").innerHTML = `
          <div class="modal-box" id="modalBox">
            <div class="modal-content">
              <div class="close-modal-btn" id="closeModalBtn">
                <div class="close-modal-btn-icon">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="white"/>
                  </svg>
                </div>
              </div>
              <img src="${imgSrc}">
            </div>
          </div>
        `;

      getHTML("modalBackground").classList.add("show");

      getHTML("closeModalBtn").addEventListener("click", () => {
        getHTML("modalBackground").classList.remove("show");
      });
    })
  );
});
