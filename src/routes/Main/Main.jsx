import { Link, Outlet } from "react-router-dom";

const MainPage = () => {
  return (
    <>
      <header>
        <nav className="nav">
          <div className="app__form">
            <Link to="/posts/new" className="btn-add">
              Создать пост
            </Link>
          </div>
        </nav>
      </header>
      <main className="posts-list">
        <Outlet />
      </main>
    </>
  );
};

export default MainPage;
