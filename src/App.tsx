import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import {
  loader as viewerLoader,
  action as viewerAction,
} from "./routes/Viewer/utils";
import {
  loader as editorLoader,
  action as editorAction,
} from "./routes/Editor/utils";
import { loader as listLoader } from "./routes/List/utils";
import { action as creatorAction } from "./routes/Creator/utils";
import PostCreator from "./routes/Creator/Creator";
import MainPage from "./routes/Main/Main";
import Viewer from "./routes/Viewer/Viewer";
import Editor from "./routes/Editor/Editor";
import List from "./routes/List/List";
import "./App.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<MainPage />}>
        <Route index element={<List />} loader={listLoader} />
      </Route>
      <Route
        path="/posts/new"
        element={<PostCreator />}
        action={creatorAction}
      />
      <Route
        path="/posts/:id"
        element={<Viewer />}
        loader={viewerLoader}
        action={viewerAction}
      />
      <Route
        path="/posts/:id/edit"
        element={<Editor />}
        loader={editorLoader}
        action={editorAction}
      />
    </>,
  ),
);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
