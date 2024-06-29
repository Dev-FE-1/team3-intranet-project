export function showLoadingScreen() {
  const loadingScreen = document.createElement("div");
  loadingScreen.id = "loading-screen";
  loadingScreen.style.position = "fixed";
  loadingScreen.style.top = 0;
  loadingScreen.style.left = 0;
  loadingScreen.style.width = "100%";
  loadingScreen.style.height = "100%";
  loadingScreen.style.backgroundColor = "white";
  loadingScreen.style.zIndex = 1000;
  loadingScreen.style.display = "flex";
  loadingScreen.style.alignItems = "center";
  loadingScreen.style.justifyContent = "center";
  loadingScreen.innerHTML = "<p>Loading...</p>";
  document.body.appendChild(loadingScreen);
}

export function hideLoadingScreen() {
  const loadingScreen = document.getElementById("loading-screen");
  if (loadingScreen) {
    loadingScreen.remove();
  }
}
