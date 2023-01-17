import React,{ Component } from 'react';
import Joi from 'joi-browser'
import Form1 from '../components/common/form1';
import { getMovie, saveMovie } from '../services/movieService';
import { getGenres } from '../services/genreService';
import { genres } from './../services/fakeGenreService';
import { Link } from 'react-router-dom';

// const Movieform = ({match, history}) => {
//     return (
//     <div>
//         <h1>Movie Form {match.params.id}</h1>
//         <button className='btn btn-primary' onClick={()=>history.push("/movies")}>Save</button>
//     </div>
//     )    
// }

class Movieform extends Form1 {
    state = { 
        data:{
            title:"",
            genreId:'',
            numberInStock:'',
            dailyRentalRate:''
        },
        genres:[],
        errors:{}
     } 

     schema = {
        _id: Joi.string(),
        title: Joi.string().required().label("Title"),
        genreId: Joi.string().required().label("Genre"),
        numberInStock: Joi.number().min(0).max(100).required().label("Number In Stock"),
        dailyRentalRate: Joi.number().min(0).max(10).required().label("Daily Rental Rate")
    }

    async populateGenres() {
        const {data: genres } = await getGenres();
        this.setState({genres})
    }

    async populateMovie(){
        try{
            const movieId = this.props.match.params.id;
            if (movieId==="new") return
            const { data: movie} =await getMovie(movieId)
            this.setState({data:this.mapToViewModel(movie)})
        }
        catch(ex){
        if (ex.response && ex.response.status === 404) 
        return this.props.history.replace("/NotFound")
        }
    }

    async componentDidMount(){
        await this.populateGenres();
        await this.populateMovie()  
    }

    mapToViewModel(movie){
        return {
            _id: movie._id,
            title: movie.title,
            genreId: movie.genre._id,
            numberInStock: movie.numberInStock,
            dailyRentalRate: movie.dailyRentalRate
        }
    }

    doSubmit = async () =>{
        await saveMovie(this.state.data)
        this.props.history.push("/movies")
    }
    render() { 
        return (
            <div>
                <h1>MovieForm</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("title","Title")}
                    {this.renderSelect("genreId","Genre",this.state.genres)}
                    {this.renderInput("numberInStock","Number in Stock", "number")}
                    {this.renderInput("dailyRentalRate","Rate")}
                    {this.renderButton("Save")}
                </form>
            </div>
        );
    }
}
 
export default Movieform;