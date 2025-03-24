'use client';

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const normalStyles = 'flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white';
  const selectedStyles = 'z-10 flex items-center justify-center px-4 h-10 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white';
  const arrowStyles = 'flex items-center justify-center px-4 h-10 leading-tight text-gray-500 border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white';

  const buttonClickHandler = (page: number) => {
    if (page > 0 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <nav aria-label="Page navigation">
            <ul className="flex items-center -space-x-px h-10 text-base">
              <li>
                <button type="button" onClick={() => buttonClickHandler(currentPage - 1)} disabled={currentPage === 1} className={`${arrowStyles} ms-0 rounded-s-lg border-e-0 ${currentPage === 1 ? 'bg-gray-200' : 'bg-white'}`}>
                  <span className="sr-only">Previous</span>
                  <svg className="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                  </svg>
                </button>
              </li>
              {Array.from({ length: totalPages }, (_, index) => (
                <li key={index}>
                  <button type="button" onClick={() => buttonClickHandler(index + 1)} disabled={currentPage === index + 1} aria-current={currentPage === index + 1} className={currentPage === index + 1 ? selectedStyles : normalStyles}>{index + 1}</button>
                </li>
              ))}
              <li>
                <button type="button" onClick={() => buttonClickHandler(currentPage + 1)} disabled={currentPage === totalPages} className={`${arrowStyles} rounded-e-lg ${currentPage === totalPages ? 'bg-gray-200' : 'bg-white'}`}>
                  <span className="sr-only">Next</span>
                  <svg className="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                  </svg>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </>
  );
};
