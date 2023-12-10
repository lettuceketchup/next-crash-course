const RepoTabs = ({ repoDetails }) => {
  return (
    <section className="card grow border-2 border-base-300 rounded-none">
      <div className="tabs tabs-bordered bg-neutral">
        <input
          type="radio"
          name="readme"
          role="tab"
          className="tab tab-active"
          aria-label="Readme"
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100"
        >
            {/* This causes problems when the text length goes above a certain limit */}
          <div className="card-body">
            Readme content
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium, eligendi reprehenderit? Hic ex illum suscipit
              veritatis tempore accusantium perspiciatis laudantium?
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet
              alias est optio, dolores temporibus doloremque error culpa facere
              omnis molestias obcaecati illum qui fugiat harum, voluptate eius
              aut dolor sint et eum laudantium odio repellendus officiis
              impedit. Eum, atque quis doloremque consequuntur minima,
              blanditiis tempora eos molestias, maiores corrupti unde!
            </p>
          </div>
        </div>
        <input
          type="radio"
          name="code"
          role="tab"
          className="tab"
          aria-label="Code"
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100"
        >
          <div className="card-body">
            Code content
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium, eligendi reprehenderit? Hic ex illum suscipit
              veritatis tempore accusantium perspiciatis laudantium?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RepoTabs;
