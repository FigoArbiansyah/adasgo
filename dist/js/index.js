const openUserProfileMenu = () => {
  const userProfileImage = document.getElementById("user-profile-image");
  const userProfileMenu = document.getElementById("user-profile-menu");

  userProfileImage.addEventListener("click", () => {
    userProfileMenu.classList.toggle("hidden");
  });
};

const sidebarButton = document.getElementById("bar-button");
const sidebarButton2 = document.getElementById("bar-button-2");
const sidebar = document.getElementById("sidebar");

const openSidebar = () => {
  sidebar.classList.toggle("hidden");
};

openUserProfileMenu();
sidebarButton.addEventListener("click", () => {
  console.log("klik");
  openSidebar();
});
sidebarButton2.addEventListener("click", () => {
  console.log("klik");
  openSidebar();
});
