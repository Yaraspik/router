import { useLoaderData, useNavigation, Form } from "react-router-dom";

export default function Editor() {
  const {
    post: { id, title },
  } = useLoaderData();
  const navigation = useNavigation();

  return (
    <Form method="PUT">
      <label className="add__title">
        Title:
        <input
          className="input__title"
          type="text"
          name="title"
          defaultValue={title}
        />
      </label>
      <input className="input__title" hidden name="id" defaultValue={id} />
      <input
        className="btn__edit__post"
        type="submit"
        value="Update post"
        disabled={navigation.state === "submitting"}
      />
    </Form>
  );
}
