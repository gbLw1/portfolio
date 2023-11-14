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
    i.addEventListener("click", RemoveActiveMenuClass),
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
    "Aqui estão alguns projetos que desenvolvi testando novas linguagens e tecnologias.";

  divProjetos.appendChild(p);
}

function GenerateErrorResponse() {
  const p = document.createElement("p");
  const a = document.createElement("a");

  a.className = "link";
  a.target = "_blank";
  a.href = "https://github.com/gblw1";
  a.innerHTML = "clicar aqui para visualizar";

  p.className = "error";
  p.innerHTML =
    "Ops, ocorreu um erro ao buscar os repositórios. Mas você pode ";
  p.appendChild(a);

  ulProjetos.appendChild(p);
}

// ======================================================
// ANIMATIONS - Background
// ======================================================
const points = [
  { r: 235, g: 142, b: 142 }, // incrementar B
  { r: 235, g: 142, b: 235 }, // decrementar R
  { r: 142, g: 142, b: 235 }, // incrementar G
  { r: 142, g: 235, b: 235 }, // decrementar B
  { r: 142, g: 235, b: 142 }, // incrementar R
  { r: 235, g: 235, b: 142 }, // decrementar G
  // percorre o array novamente
];

let currentIndex = 0;
let currentColor = { ...points[currentIndex] };

function ChangeBackground() {
  const nextIndex = (currentIndex + 1) % points.length; // output: 0, 1, 2, 3, 4, 5, 0, 1, 2, 3...
  const nextColor = { ...points[nextIndex] };

  document.body.style.background = `linear-gradient(to left, rgb(${currentColor.r}, ${currentColor.g}, ${currentColor.b}) -40%, #333 100%)`;

  if (currentColor.b < nextColor.b) {
    currentColor.b++;
  } else if (currentColor.r > nextColor.r) {
    currentColor.r--;
  } else if (currentColor.g < nextColor.g) {
    currentColor.g++;
  } else if (currentColor.b > nextColor.b) {
    currentColor.b--;
  } else if (currentColor.r < nextColor.r) {
    currentColor.r++;
  } else if (currentColor.g > nextColor.g) {
    currentColor.g--;
  } else {
    // Reinicia a transição quando atinge a última cor
    currentIndex = nextIndex;
  }
}

// ======================================================
// Initialize - on load functions
// ======================================================
function Initialize() {
  SetMenuItensClickListener();

  FetchGitHubRepos();

  ChangeBackground();
}

// permite você parar a animação com clearInterval(interval)
const interval = setInterval(ChangeBackground, 50);

Initialize();
