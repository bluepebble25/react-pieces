import { Link } from 'react-router-dom';

function MainPage() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/search">SearchPage</Link>
        </li>
      </ul>
    </div>
  );
}

export default MainPage;
