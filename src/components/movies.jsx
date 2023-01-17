import React, { Component } from "react";
import { deleteMovie, getMovies } from "../services/movieService";
import Pagination from './common/pagination'
import paginate from '../utils/paginate'
import ListGroup from './common/listGroup'
import { getGenres } from "../services/genreService";
import MoviesTable from "./common/moviesTable";
import _ from 'lodash'
import Search from "./common/search";
import { toast } from 'react-toastify';
// import Surya from './surya'
// import New from './new'
import { Link } from "react-router-dom";

// import MyComponent from "./count";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    currentPage: 1,
    pageSize: 4,
    sortColumn: { path: 'title', order:'asc' },
    searchQuery: "",
    selectedGenre: null
  };

  async componentDidMount() {
    const {data} = await getGenres();
    const genres =[{_id: '', name: 'All Genres'}, ...data]

    const {data:movies} = await getMovies()
    this.setState({ movies, genres })
  }

  handleDelete = async movie => {
    const originalMovies = this.state.movies;
    const movies = originalMovies.filter(m => m._id !== movie._id);
    this.setState({ movies });
    try{
    await deleteMovie(movie._id)
    }
  catch (ex) {
    if(ex.response && ex.response.status === 404)
    toast.error("Movie already deleted")

    this.setState({movies:originalMovies})
  }
};

  handlePageChange = page => {
    this.setState({currentPage: page})
  }

  handleGenreSelect = genre => {
    this.setState({selectedGenre: genre, searchQuery:"", currentPage:1 })
  }

  handleSort = sortColumn => {
    this.setState({sortColumn})
  }

  handleSearch = query =>{
    this.setState({searchQuery: query, selectedGenre: null, currentPage:1})
  }

  getPagedData = () => {
    
    const { pageSize, currentPage, sortColumn, selectedGenre, searchQuery, movies:allMovies } = this.state; 
    let filtered = allMovies;
    if(searchQuery)
      filtered = allMovies.filter(m=>
        m.title.toLowerCase().startsWith(searchQuery.toLowerCase()))
    else if(selectedGenre && selectedGenre._id)
        filtered = allMovies.filter(m=>m.genre._id===selectedGenre._id) 

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order])

    const movies = paginate(sorted,currentPage,pageSize);

    return { totalCount: filtered.length, data: movies}
  }

  render() {
    const { length: count } = this.state.movies;
    const {user} = this.props
    const { pageSize, currentPage, sortColumn } = this.state;

    if(count===0) return <p>No movies available</p>

    const { totalCount, data: movies } = this.getPagedData()

    return (
     <React.Fragment>
    <div className="row">
      <div className="col-2" style={{paddingTop: "40px",
                                     background:'beige'}}>

      <ListGroup 
          items={this.state.genres} 
          selectedItem={this.state.selectedGenre}
          onItemSelect={this.handleGenreSelect} 
      />

      </div>
      <div className="col" style={{backgroundColor:'gainsboro', paddingTop:'20px'}}>
        {user && <Link to="/movies/new" className="btn btn-primary" style={{marginBottom: '20px'}}>New Movie</Link>}
        <p> Showing {totalCount} in DB</p>
      <Search value={this.state.searchQuery} onChange={this.handleSearch} />
      <MoviesTable 
          movies={movies} 
          sortColumn={sortColumn}
          onLike={this.handleLike} 
          onDelete={this.handleDelete}
          onSort={this.handleSort} 
      />

      <Pagination 
        itemsCount={totalCount} 
        pageSize={pageSize} 
        currentPage={currentPage}
        onPageChange={this.handlePageChange} 
      />
      </div>
     </div>
     </React.Fragment>
    );
  }
}

export default Movies;