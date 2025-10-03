// import React from 'react';

// const Pagination = ({ page, pages, onPage }) => {
//   if (pages <= 1) return null;
//   const prev = () => onPage(Math.max(1, page - 1));
//   const next = () => onPage(Math.min(pages, page + 1));
//   return (
//     <div className="pagination">
//       <button disabled={page === 1} onClick={prev}>Prev</button>
//       <span>{page} / {pages}</span>
//       <button disabled={page === pages} onClick={next}>Next</button>
//     </div>
//   );
// };

// export default Pagination;



import React from "react";

const Pagination = ({ page, pages, onPage }) => {
  if (pages <= 1) return null;

  const prev = () => onPage(Math.max(1, page - 1));
  const next = () => onPage(Math.min(pages, page + 1));

  // Calculate page numbers to display with ellipsis
  const getPageNumbers = () => {
    let start = Math.max(1, page - 2);
    let end = Math.min(pages, page + 2);

    if (page <= 3) {
      start = 1;
      end = Math.min(5, pages);
    } else if (page >= pages - 2) {
      start = Math.max(1, pages - 4);
      end = pages;
    }

    const nums = [];
    for (let i = start; i <= end; i++) {
      nums.push(i);
    }
    return nums;
  };

  const pageNumbers = getPageNumbers();

  return (
    <nav className="pagination" aria-label="Pagination Navigation">
      <button
        className="page-btn"
        disabled={page === 1}
        onClick={prev}
        aria-label="Previous page"
      >
        &laquo; Prev
      </button>

      {pageNumbers[0] > 1 && (
        <>
          <button className="page-btn" onClick={() => onPage(1)}>
            1
          </button>
          {pageNumbers[0] > 2 && <span className="pagination-ellipsis">…</span>}
        </>
      )}

      {pageNumbers.map((num) => (
        <button
          key={num}
          className={`page-btn ${num === page ? "active" : ""}`}
          onClick={() => onPage(num)}
          aria-current={num === page ? "page" : undefined}
          aria-label={`Page ${num}`}
        >
          {num}
        </button>
      ))}

      {pageNumbers[pageNumbers.length - 1] < pages && (
        <>
          {pageNumbers[pageNumbers.length - 1] < pages - 1 && (
            <span className="pagination-ellipsis">…</span>
          )}
          <button className="page-btn" onClick={() => onPage(pages)}>
            {pages}
          </button>
        </>
      )}

      <button
        className="page-btn"
        disabled={page === pages}
        onClick={next}
        aria-label="Next page"
      >
        Next &raquo;
      </button>

      <style>{`
        .pagination {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 8px;
          margin-top: 24px;
          user-select: none;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        .page-btn {
          background-color: #e0e5ff;
          border: none;
          border-radius: 6px;
          padding: 8px 14px;
          font-weight: 600;
          color: #4054b2;
          cursor: pointer;
          transition: background-color 0.2s ease, color 0.2s ease;
          min-width: 40px;
        }

        .page-btn:hover:not(:disabled),
        .page-btn:focus:not(:disabled) {
          background-color: #4054b2;
          color: white;
          outline: none;
        }

        .page-btn:disabled {
          cursor: not-allowed;
          opacity: 0.5;
        }

        .page-btn.active {
          background-color: #6278f7;
          color: white;
          cursor: default;
        }

        .pagination-ellipsis {
          user-select: none;
          font-size: 1.2rem;
          color: #888;
        }
      `}</style>
    </nav>
  );
};

export default Pagination;
