import { Link, useLoaderData } from "react-router-dom";
import moment from "moment";

export default function List() {
  const posts = useLoaderData();
  return (
    <>
      {posts.map((item, i) => (
        <div className="post" key={i}>
          <div className="post-content">
            <div className="post__header">
              <div className="post__avatar"></div>
              <div className="post__info">
                <p className="name">Name</p>
                <p className="date">
                  {moment(item.created).format("DD.MM.YYYY")}
                </p>
              </div>
            </div>
            <Link to={`/posts/${item.id}`} className="post__text">
              {item.title}
            </Link>
            <p className="post__text">{item.content}</p>
          </div>
        </div>
      ))}
    </>
  );
}
