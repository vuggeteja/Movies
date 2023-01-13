import React, { Component } from 'react';
import _ from 'lodash'

const Pagination = props => {
    const { itemsCount, pageSize, currentPage, onPageChange } = props;
    
    const pagesCount = Math.ceil(itemsCount/pageSize);
    const pages = _.range(1,pagesCount+1)
    if(pagesCount===1){return null}
   
        return (
        <div style={{ paddingTop:'20px', fontSize:'18px'}}>
        <nav aria-label="Page navigation example">
            <ul class='pagination' style={{listStyleType:'none' }}>
                {pages.map(page=>(
                <li key = {page} style={{cursor:'pointer'}} 
                    class={page===currentPage?'page-item active':'page-item'}>
                    <a class='page-link' onClick={()=>onPageChange(page)}>{page}</a>
                </li>))}
            </ul>
        </nav>
        </div>
        )
    } 
 
export default Pagination;