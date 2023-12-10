import Link from "next/link";
import { FaGithub, FaStar, FaCodeBranch, FaEye } from "react-icons/fa";

const RepoCard = ({ repo }) => {
  return (
    <div
      key={repo.id}
      className="card card-compact bg-base-100 shadow-sm rounded-sm m-1 hover:bg-secondary"
    >
      <div className="card-body flex flex-col">
        <div className="flex">
          <Link
            className="flex-1 font-bold font-mono"
            href={`/repos/${repo.name}`}
          >
            <h3 className="card-title">{repo.name}</h3>
          </Link>
          <span className="flex-none">
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-square btn-ghost"
            >
              <FaGithub />
            </a>
          </span>
        </div>
        <p
          className="
      "
        >
          {repo.description ? repo.description : "No description provided."}
        </p>
        {repo.language && (
          <span className="badge badge-outline badge-sm">{repo.language}</span>
        )}
        <div
          className="flex justify-between  
      "
        >
          <span className="flex items-center">
            <FaStar className="m-1" /> {repo.stargazers_count}
          </span>
          <span className="flex items-center">
            <FaCodeBranch className="m-1" /> {repo.forks_count}
          </span>
          <span className="flex items-center">
            <FaEye className="m-1" /> {repo.watchers_count}
          </span>
        </div>
      </div>
    </div>
  );
};

export default RepoCard;