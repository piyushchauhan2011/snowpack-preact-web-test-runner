import { h, render } from "preact";
import { fetchRepositories } from "./api.js";
import { RepoList } from "./repo-list.jsx";

console.log({
  SNOWPACK_PUBLIC_API_URL: import.meta.env.SNOWPACK_PUBLIC_API_URL,
});

fetchRepositories("piyush").then((data) => {
  render(h(RepoList, { repos: data }, null), document.body);
});
