import React from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({ pageCount, onPageChange }) => {
    return (
        <ReactPaginate
            nextLabel="next >"
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={pageCount}
            previousLabel="< previous"
            onPageChange={onPageChange} // Xử lý sự kiện khi trang thay đổi
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
        />
    );
};

export default Pagination;
