// ======================================================
// MENU
// ======================================================
const hamburguer = document.getElementById("hamburguer");
const menu = document.getElementById("menu");

hamburguer.addEventListener("click", () => {
  menu.classList.toggle("ativo");
});

function RemoveActiveMenuClass() {
  menu.classList.remove("ativo");
}

document.querySelector("main").addEventListener("click", RemoveActiveMenuClass);

function SetMenuItensClickListener() {
  menu.childNodes.forEach((i) =>
    i.addEventListener("click", RemoveActiveMenuClass)
  );
}

// ======================================================
// FETCH - Projetos
// ======================================================
const divProjetos = document.querySelector(".projetos");
const ulProjetos = document.querySelector(".ul-projetos");

function setLoading(state) {
  const p = document.createElement("p");
  p.id = "loading";
  p.style.textAlign = "center";
  p.innerHTML = "Carregando...";

  if (state) {
    ulProjetos.appendChild(p);
    return;
  }

  const loading = document.getElementById("loading");
  if (loading) {
    ulProjetos.removeChild(loading);
  }
}

function FetchGitHubRepos() {
  setLoading(true);

  fetch("https://api.github.com/users/gblw1/repos")
    .then((response) => response.json())
    .then((data) => {
      data.sort((a, b) => b.stargazers_count - a.stargazers_count);
      LoadGitHubProjects(data);
    })
    .catch(() => GenerateErrorResponse())
    .finally(() => setLoading(false));
}

function LoadGitHubProjects(repos) {
  const p = document.createElement("p");

  repos.map((r) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    const i = document.createElement("i");

    a.href = r.html_url;
    a.target = "_blank";

    i.className = "fas fa-star";

    a.appendChild(i);
    a.innerHTML += `&emsp;${r.name}`;

    li.appendChild(a);
    ulProjetos.append(li);
  });

  p.innerHTML =
    "Here are some of my projects that I developed while studying and working.";

  divProjetos.appendChild(p);
}

function GenerateErrorResponse() {
  const p = document.createElement("p");
  const a = document.createElement("a");

  a.className = "link";
  a.target = "_blank";
  a.href = "https://github.com/gblw1";
  a.innerHTML = "click here";

  p.className = "error";
  p.innerHTML =
    "Oops! Something went wrong while fetching the projects. You can ";
  p.appendChild(a);
  p.innerHTML += " to see them on GitHub.";

  ulProjetos.appendChild(p);
}

// ======================================================
// Initialize - on load functions
// ======================================================
function Initialize() {
  SetMenuItensClickListener();

  FetchGitHubRepos();
}

Initialize();
