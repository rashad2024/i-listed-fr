"use client";

import { useState, useEffect } from "react";

export default function PaginationView({
  page,
  totalPages,
  onPageChange,
}: {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}) {
  const [currentPage, setCurrentPage] = useState(page);

  const handlePageChange = (page: any) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    onPageChange(page);
  };

  return (
    <div className="pagination">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        &lt; Back
      </button>

      {[...Array(totalPages)].map((_, idx) => {
        const pageNum = idx + 1;
        return (
          <button
            key={pageNum}
            className={pageNum === currentPage ? "active" : ""}
            onClick={() => handlePageChange(pageNum)}
          >
            {pageNum}
          </button>
        );
      })}

      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next &gt;
      </button>
    </div>
  );
}
