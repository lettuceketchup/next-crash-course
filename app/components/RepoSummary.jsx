import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";

const RepoSummary = ({ repoDetails }) => {
  return (
    <aside className="card sm:w-64 bg-secondary rounded-none">
      <div className="card-body">
        <div className="flex flex-col justify-between">
          <span className="flex flex-row-reverse items-center">
            <FaStar className="m-1" /> {repoDetails.stargazers_count}
          </span>
          <span className="flex flex-row-reverse items-center">
            <FaCodeBranch className="m-1" /> {repoDetails.forks_count}
          </span>
          <span className="flex flex-row-reverse items-center">
            <FaEye className="m-1" /> {repoDetails.watchers_count}
          </span>
        </div>
        <h3 className="text-xl font-bold font-mono text-right">Description</h3>
        <p className="text-right">{repoDetails.description}</p>
      </div>
    </aside>
  );
};

export default RepoSummary;
