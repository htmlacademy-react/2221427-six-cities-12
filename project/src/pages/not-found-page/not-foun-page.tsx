import {Link} from 'react-router-dom';

function NotFoundPage (): JSX.Element {
  return (
    <header className="header">
      <main className="page__main page__main--404">
        <h1>404. Page not found</h1>
        <Link to="/">Вернуться на главную</Link>
      </main>
    </header>
  );
}

export default NotFoundPage;

