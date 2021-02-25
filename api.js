export async function fetchRepositories(user) {
  const response = await fetch(`https://api.github.com/users/${user}/repos`);
  return await response.json();
}

export function neverUsed() {
  console.log("NEVER CALLED");
}
