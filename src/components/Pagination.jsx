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
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  const onNextPage = () => {
    if (currentPage <= pageNumbers.length - 1) setCurrentPage(currentPage + 1);
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
          currentPage <= pageNumbers.length ? 'is-disabled' : ''
        }`}
        onClick={onPreviousPage}
      >
        Previous
      </a>
      <a
        className={`pagination-next ${
          currentPage === pageNumbers.length ? 'is-disabled' : ''
        }`}
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
