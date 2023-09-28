const openUserProfileMenu = () => {
  const userProfileImage = document.getElementById("user-profile-image");
  const userProfileMenu = document.getElementById("user-profile-menu");

  userProfileImage.addEventListener("click", () => {
    userProfileMenu.classList.toggle("hidden");
  });
};

openUserProfileMenu();
