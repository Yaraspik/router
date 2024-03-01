import { Link, useLoaderData, useNavigation, Form } from "react-router-dom";
import moment from "moment";

export default function Viewer() {
  const { post } = useLoaderData();
  const navigation = useNavigation();

  return (
    <>
      <div className="post__info">
        <Link to="/" className="post__close">
          X
        </Link>
      </div>
      <div className="post">
        <div className="post-content">
          <div className="post__header">
            <div className="post__avatar"></div>
            <div className="post__info">
              <Link to="#" className="name">
                Name
              </Link>
              <p className="date">
                {moment(post.created).format("DD.MM.YYYY")}
              </p>
            </div>
          </div>
          <Link to={`/posts/${post.id}`} className="post__text">
            {post.title}
          </Link>
          <p className="post__text">{post.content}</p>
          <Link to={`/posts/${post.id}/edit`}>Редактирование</Link>
          <Form method="DELETE">
            <button type="submit" disabled={navigation.state === "submitting"}>
              Удалить
            </button>
          </Form>
        </div>
      </div>
    </>
  );
}
