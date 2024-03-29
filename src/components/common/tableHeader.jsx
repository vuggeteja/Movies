import { faSortDesc } from '@fortawesome/free-solid-svg-icons';
import React, { Component } from 'react';

class TableHeader extends Component {
  
    raiseSort = path =>{
        const sortColumn = { ...this.props.sortColumn }
        if(sortColumn.path===path)
          sortColumn.order = (sortColumn.order === 'asc') ? 'desc' : 'asc'
        else{
          sortColumn.order = 'asc'
          sortColumn.path = path
        }
        this.props.onSort(sortColumn)
      }

      renderSortIcon = column =>{

        const { sortColumn } = this.props 
        if(column.path !== this.props.sortColumn.path) return null
        if(this.props.sortColumn.order==='asc') return <i className='fa fa-sort-asc' />
        return <i className='fa fa-sort-desc' />
      }

    render() { 
        return(
            <thead style={{backgroundColor:'darkgray',fontSize:'30px'}}>
                <tr>
                    {this.props.columns.map(column=>(
                        <th key={column.path || column.key} 
                            onClick={()=> this.raiseSort(column.path)}>
                            {column.label} {this.renderSortIcon(column)}
                        </th>))}
                </tr>
            </thead>
        )
          
    }
}
 
export default TableHeader;