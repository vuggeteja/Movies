import React, { Component } from 'react';
import Like from './like'
import Table from './table';
import {Link} from 'react-router-dom'



class MoviesTable extends Component {

  columns = [
    {path:'title', label: 'Title', content: movie=><Link to={`/movies/${movie._id}`}>{movie.title}</Link> },
    {path:'genre.name', label: 'Genre'},
    {path:'numberInStock', label: 'Stock'},
    {path:'dailyRentalRate', label: 'Rate'},
    { key: 'like', 
      content: movie => (<Like liked={movie.liked} onClick={()=> this.props.onLike(movie)} />) },
    { key: 'delete',
      content:movie => (<button onClick={
                          ()=>this.props.onDelete(movie)} 
                          className="btn btn-danger">Delete
                         </button>) }
  ]
  render() { 
    const { movies, onDelete, onLike, onSort, sortColumn } = this.props 
    return (
      <Table columns={this.columns} data={movies} sortColumn={sortColumn} onSort={onSort} />
    
    /* <tbody style={{fontSize:'20px', fontStyle:'italic'} }>
      {movies.map(movie=>(
        <tr key={movie._id}>
          <td>{movie.title}</td>
          <td>{movie.genre.name}</td>
          <td>{movie.numberInStock}</td>
          <td>{movie.dailyRentalRate}</td>
          <td>
            <Like liked={movie.liked} onClick={()=> onLike(movie)} />
          </td>
          <td><button onClick={
                ()=>onDelete(movie)} 
                className="btn btn-danger">Delete
              </button>
          </td>
        </tr> 
        ))}
    </tbody> */
  )
  }
}

export default MoviesTable