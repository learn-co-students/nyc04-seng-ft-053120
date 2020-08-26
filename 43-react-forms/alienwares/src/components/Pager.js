import React from 'react'

const Pager = ({ currentPage, totalPages, onPageClick }) => {

  const pageButtons = Array(totalPages)  // make an array from the total pages => [empty × 3]
    .fill()                               // fill it => [undefined, undefined, undefined]
    .map((_, index) => index + 1)        // map it => [1, 2, 3]
    .map(page => (                       // map it => [<button />, <button />, <button />]
      <button
        key={page}
        disabled={page === currentPage}
        onClick={() => onPageClick(page)}
      >{page}</button>
    ))

  return (
    <>
      <p>Showing page {currentPage} of {totalPages}</p>
      <div>
        <button
          disabled={currentPage <= 1}
          onClick={() => onPageClick(currentPage - 1)}
        >Prev</button>
        {pageButtons}
        <button
          disabled={currentPage >= totalPages}
          onClick={() => onPageClick(currentPage + 1)}
        >Next</button>
      </div>
    </>
  )
}

export default Pager