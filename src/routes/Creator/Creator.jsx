import { Link, useNavigation, Form } from "react-router-dom";

export default function PostCreator() {
  const navigation = useNavigation();

  return (
    <>
      <div className="post__form">
        <Link to="/" className="post__close">
          X
        </Link>
        <h3>Создание поста</h3>
        <Form method="post">
          <label className="add__title">
            Текст:
            <input className="input__title" type="text" name="title" />
          </label>
          <input type="hidden" name="id" value="3" />
          <input
            className="btn__add__post"
            type="submit"
            value="Создать"
            disabled={navigation.state === "submitting"}
          />
        </Form>
      </div>
    </>
  );
}
