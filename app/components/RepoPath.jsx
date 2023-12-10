"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaGithub } from "react-icons/fa";

const RepoPath = ({ username }) => {
  // Get the current pathname
  const pathname = usePathname();
  const path = pathname.split("/");
  const repoName = path[2] ? path[2] : "";

  return (
    <div>
      <h1 className="flex flex-wrap text-xl mb-2">
        <span>
          <span className="text-2xl">/</span>
          <Link href="/repos" className="text-xl btn btn-ghost btn-sm rounded-md">
            {username}
          </Link>
        </span>
        {repoName ? (
          <span>
            <span className="text-2xl">/</span>

            <a
              href={`https://github.com/${username}/${repoName}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl btn btn-ghost btn-sm rounded-md"
            >
              {repoName}
              <FaGithub className="inline" />
            </a>
          </span>
        ) : (
          <span></span>
        )}
      </h1>
    </div>
  );
};

export default RepoPath;
