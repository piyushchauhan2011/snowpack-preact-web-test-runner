import { h, Fragment } from "preact";

export function RepoList(props) {
  return (
    <Fragment>
      <h1>Hello RepoList</h1>
      <ul>
        {props.repos.map((repo) => {
          return (
            <li>
              <p>{repo.name}</p>
            </li>
          );
        })}
      </ul>
    </Fragment>
  );
}
