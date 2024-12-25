import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { getMoviesPages } from '../Redux/Actions/Actions';

const PaginationComponent = () => {
  const dispatch = useDispatch();
  const pages = useSelector((state) => state.pageCount); // عدد الصفحات من Redux
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    if (pages) {
      setPageCount(pages);
    }
  }, [pages]);

  const handlePageClick = (data) => {
    const selectedPage = data.selected + 1; // الصفحة المطلوبة
    dispatch(getMoviesPages(selectedPage));
  };

  return (
    <div className="custom-pagination">
      <ReactPaginate
        breakLabel="..."
        nextLabel="التالي"
        onPageChange={handlePageClick}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        pageCount={pageCount} // عدد الصفحات
        previousLabel="السابق"
        containerClassName={'pagination justify-content-center p-3'}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link rounded shadow-sm"}
        previousClassName={"page-item"}
        nextClassName={"page-item"}
        previousLinkClassName={"page-link bg-primary text-white rounded-pill px-3"}
        nextLinkClassName={"page-link bg-primary text-white rounded-pill px-3"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active bg-primary text-white border-0"}
      />
    </div>
  );
};

export default PaginationComponent;
