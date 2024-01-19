/* eslint-disable react/prop-types */
const Pagination = ({
  productsPerPage,
  currentPage,
  setCurrentPage,
  totalProducts,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  const onPreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const onNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const onSpecificPage = (noPage) => {
    setCurrentPage(noPage);
  };

  return (
    <nav
      className="pagination is-centered mb-6"
      role="navigation"
      aria-label="pagination"
    >
      <a
        className={`pagination-previous ${
          currentPage === 1 ? 'is-disabled' : ''
        }`}
        style={currentPage === 1 ? { pointerEvents: 'none' } : {}}
        onClick={onPreviousPage}
      >
        Previous
      </a>
      <a
        className={`pagination-next ${
          currentPage >= pageNumbers.length ? 'is-disabled' : ''
        }`}
        style={
          currentPage >= pageNumbers.length ? { pointerEvents: 'none' } : {}
        }
        onClick={onNextPage}
      >
        Next page
      </a>
      <ul className="pagination-list">
        {pageNumbers.map((noPage, index) => (
          <li key={index}>
            <a
              className={`pagination-link ${
                noPage === currentPage ? 'is-current' : ''
              }`}
              onClick={() => onSpecificPage(noPage)}
            >
              {noPage}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
