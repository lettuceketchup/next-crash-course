import RepoPath from "../components/RepoPath";

const username = process.env.USER;

const Layout = ({ children }) => {
  return (
    <>
      <RepoPath username={username} />
      {children}
    </>
  );
};

export default Layout;
