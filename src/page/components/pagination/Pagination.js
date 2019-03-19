import React from 'react'
import { Pagination } from 'semantic-ui-react'

const PaginationExamplePagination = ({ activePage, totalPages, onChangePage }) => (
  <Pagination defaultActivePage={1}
    activePage={activePage}
    onChange={onChangePage}
    totalPages={totalPages} />
)

export default PaginationExamplePagination
