import Image from "next/image";
import { FaRegComment } from "react-icons/fa";
import { AiOutlineFire } from "react-icons/ai";
import Tag from "../Tag";
const Post = ({ post }: PostProps) => {
  if (!post) {
    return <>Loading...</>;
  }
  return (
    <div className="post-wrapper">
      <div className="top-section">
        <div className="featured-image">
          <div className="image-container">
            <a href={post?.image as string} className="image-link">
              <span
                className="fullimage"
                style={{
                  backgroundImage: `url("${post?.image}")`,
                }}
              ></span>
              <span
                className="fullimage-fakelayout"
                style={{
                  backgroundImage: `url("${post?.image}")`,
                }}
              ></span>
            </a>
          </div>
          <div className="meta-container">
            <a href="#" className="title">
              <h1>{post?.title}</h1>
            </a>
            <div className="meta-data">
              <time className="published-date">{post?.published_date}</time>
              {/* - icon */}
              <div className="meta-read-time">{post?.read} read</div>
              <div className="meta-comment">
                <FaRegComment />
                <h4>{post?.comment}</h4>
              </div>
              <div className="meta-view">
                <AiOutlineFire />
                <h4>{post?.views}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="paragragh">{post?.content}</div>
        <div className="tag-author">
          <div className="tag-wrapper">
            {post?.tags &&
              post.tags.map((tag: Tag, index: number) => (
                <Tag name={tag?.name} link={tag?.link} key={index} />
              ))}
          </div>
          <div className="author-info">
            <div className="author-image">
              <Image
                width={35}
                height={35}
                alt="author-image"
                src="https://themes.estudiopatagon.com/wordpress/maktub/wp-content/uploads/2022/05/avatar-10.jpg"
              />
            </div>
            <div className="author-name">
              <h4>Jonothan Doe</h4>
            </div>
          </div>
        </div>
      </div>
      <div
        className="continue-btn"
   
      >
        <a
          href="#"
          className="text-link"
        >
          <h4>Continue Reading</h4>
          <span className=".fullText"></span>
          <span className=".fullText-fakelayout"></span>
        </a>
      </div>
    </div>
  );
};

export default Post;
