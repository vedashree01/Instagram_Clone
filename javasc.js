document.addEventListener("DOMContentLoaded", () => {
  const likeButtons = document.querySelectorAll(".like-btn");

  likeButtons.forEach((btn) => {
    let liked = false;

    btn.addEventListener("click", () => {
      const likesCount = btn.nextElementSibling;
      let currentLikes = parseInt(likesCount.textContent) || 0;

      if (!liked) {
        // Like
        liked = true;
        btn.classList.remove("fa-regular");
        btn.classList.add("fa-solid");
        btn.style.color = "red";
        currentLikes++;
      } else {
        // Unlike
        liked = false;
        btn.classList.remove("fa-solid");
        btn.classList.add("fa-regular");
        btn.style.color = "white"; // outline white heart
        currentLikes--;
      }

      likesCount.textContent = `${currentLikes} likes`;
    });
  });
  
});

