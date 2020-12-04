import React from 'react';
import {Pagination} from "react-bootstrap";

function JobsPagination(props) {
    const {page, setPage, hasNext} = props;
    const pageSetter = (page)=>{
        setPage(page);
    }
    return (
        <Pagination>
            {
                (page > 1) && <Pagination.Prev onClick = {()=>pageSetter(page - 1)} />
            }
            {
                (page > 2) && <Pagination.Item onClick = {()=>pageSetter(1)}>1</Pagination.Item>
            }
            {
                (page > 1) && <Pagination.Item onClick = {()=>pageSetter(page - 1)}>{page - 1}</Pagination.Item>
            }
            {
                (page >= 2)&&<Pagination.Ellipsis/>
            }
            <Pagination.Item onClick={() => pageSetter(page)} className="active">{page}</Pagination.Item>
            {hasNext && <Pagination.Item onClick = {()=>pageSetter(page + 1)}>{page + 1}</Pagination.Item>}
            {hasNext && <Pagination.Next onClick = {()=>pageSetter(page + 1)}/>}
        </Pagination>
    );
}

export default JobsPagination;