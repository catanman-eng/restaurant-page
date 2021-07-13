function loadHome() {
  const content = document.querySelector("#content");
  // HEADER
  const header = document.createElement("header");
  const logo = document.createElement("img");
  const title = document.createElement("h1");
  logo.src = "images/logo.png";
  logo.classList.add("logo")
  title.textContent = "The Best Burgers In Town";

  header.appendChild(logo);
  header.appendChild(title);
  content.appendChild(header);

  

  return content
}

export default loadHome;