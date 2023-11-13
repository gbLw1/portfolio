// ======================================================
// MENU
// ======================================================
const hamburguer = document.getElementById("hamburguer");
const menu = document.getElementById("menu");

hamburguer.addEventListener("click", () => {
  menu.classList.toggle("ativo");
});

// ======================================================
// FETCH - Projetos
// ======================================================
const divProjetos = document.querySelector(".projetos");
const ulProjetos = document.querySelector(".ul-projetos");

function setLoading(state) {
  const p = document.createElement("p");
  p.id = "loading";
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
    .finally(() => {
      setLoading(false);

      const p = document.createElement("p");
      const ul = document.createElement("ul");
      const li = document.createElement("li");
      const a = document.createElement("a");
      const i = document.createElement("i");

      li.className = "github";

      a.href = "https://github.com/gblw1";
      a.target = "_blank";
      a.title = "GitHub";

      i.className = "fab fa-github";

      p.innerHTML = "Me siga no GitHub para ver projetos futuros.";
      divProjetos.appendChild(p);

      a.appendChild(i);
      li.appendChild(a);
      ul.appendChild(li);
      divProjetos.appendChild(ul);
    });
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

FetchGitHubRepos();
