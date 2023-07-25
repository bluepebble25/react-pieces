import { Link } from 'react-router-dom';

function MainPage() {
  const pageList = [
    { url: '/search', pageName: 'SearchPage' },
    { url: '/infinite-scroll', pageName: 'Infinite Scroll' },
  ];

  return (
    <div>
      <ul
        style={{ fontSize: '1.8rem', marginTop: '20px', paddingLeft: '40px' }}
      >
        {pageList.map((page) => (
          <li style={{ listStyleType: 'disc' }}>
            <Link to={page.url}>{page.pageName}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MainPage;
