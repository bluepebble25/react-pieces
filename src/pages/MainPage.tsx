import { Link } from 'react-router-dom';

function MainPage() {
  return (
    <div>
      <ul style={{ fontSize: '1.8rem' }}>
        <li>
          <Link to="/search">SearchPage</Link>
        </li>
      </ul>
    </div>
  );
}

export default MainPage;
