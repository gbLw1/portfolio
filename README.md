# Gabriel Henrique Grassi · Portfolio

Portfólio pessoal bilíngue (PT-BR e EN-US) de Gabriel Henrique Grassi, Tech Lead e engenheiro de software.

## Como foi desenvolvido

- React, TypeScript e Vite para uma aplicação estática rápida e tipada.
- Organização inspirada em Feature-Sliced Design (FSD), separando `app`, `pages`, `widgets` e `shared`.
- Componentes coesos com estilos locais para navegação, hero, trajetória, competências, liderança e contato.
- Layout responsivo com CSS Grid, tipografia fluida com `clamp()` e navegação adaptada para desktop e mobile.
- Internacionalização PT-BR/EN-US centralizada, com preferência persistida no navegador e inglês como fallback inicial.
- Metadados de SEO e compartilhamento (description, Open Graph e Twitter) atualizados conforme o idioma selecionado.
- Sem bibliotecas de UI ou ícones externas: componentes visuais e SVGs são nativos do projeto.
- Build e publicação automatizados no GitHub Pages via GitHub Actions.

## Desenvolvimento

```bash
pnpm install
pnpm dev
```

## Build

```bash
pnpm build
```

O Vite usa a base `/portfolio/`, compatível com a publicação em `gblw1.github.io/portfolio`.
