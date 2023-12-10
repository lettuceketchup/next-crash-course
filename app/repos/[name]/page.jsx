import Repo from '@/app/components/Repo';

const RepoPage = ({ params: { name } }) => {
  console.log('RepoPage:', name);
  return (
    <div>
      <Repo repo={name} />
    </div>
  );
};

export default RepoPage;

