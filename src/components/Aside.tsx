import Tag from "./Tag";
import AsidePost from "./Aside/AsidePost";

const Aside = ({ data }: AsideProps) => {
  return (
    <aside id="aside">
      <div className="aside-element">
        <div className="heading-wrapper">
          <h1>
            <span>Recent posts</span> <span className="red-line"></span>
          </h1>
        </div>
        <div className="recent-post-wrapper">
          <AsidePost />
        </div>
      </div>
      <div className="aside-element">
        <div className="heading-wrapper">
          <h1>
            <span>Tag Cloud</span> <span className="red-line"></span>
          </h1>
        </div>
        <div className="tag-wrapper">
          <Tag name={"Health"} link={""} />
        </div>
      </div>
    </aside>
  );
};

export default Aside;
