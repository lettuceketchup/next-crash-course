import RepoSummary from "./RepoSummary";
import RepoTabs from "./RepoTabs";

const username = process.env.USER;

const getRepo = async (repo) => {
  const url = `https://api.github.com/repos/${username}/${repo}`;
  console.log(url);
  const response = await fetch(url);
  const repoDetails = await response.json();
  return repoDetails;
};

const Repo = async ({ repo }) => {
  console.log(repo);
  const repoDetails = await getRepo(repo);

  return (
    <div className="flex join flex-col sm:flex-row ">
      <RepoSummary repoDetails={repoDetails} />
      <RepoTabs repoDetails={repoDetails} />
    </div>
  );
};

export default Repo;
