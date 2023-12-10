import RepoCard from "../components/RepoCard";

const username = process.env.USER;

export const metadata = {
  title: "Repos",
  description: "A list of all my GitHub repositories.",
  keywords: "git, github, repositories, repos",
};

async function getRepos() {
  const response = await fetch(
    `https://api.github.com/users/${username}/repos`,
  );

  // Simulate a slow network connection.
  //   await new Promise((resolve) => setTimeout(resolve, 1000));

  const repos = await response.json();
  return repos;
}

const ReposPage = async () => {
  const repos = await getRepos();
  // console.log(repos);

  return (
    <div>
      <div
        className="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 
            "
      >
        {repos.map((repo) => (
          <RepoCard repo={repo} key={repo.id} />
        ))}
      </div>
    </div>
  );
};

export default ReposPage;
