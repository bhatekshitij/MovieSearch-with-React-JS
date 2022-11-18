import React from "react";



// function MovieCard(props) {    // traditional fucntion component which doesn't have a call back function method thats why we can used props here and the other part of code we can't use props and thats why we use array destructuring right then and there.
//     return (<div className="movie">
//         <div>
//             {/* <p>{props.movie1.Year}</p> */}
//         </div>

//         <div>
//             <img src={props.movie.Poster !== 'N/A' ? props.movie.Poster : 'https://via.placeholder.com/400'} alt={props.movie.Title}></img>
//         </div>

//         <div>
//             <span>{props.movie.Type}</span>
//             <h3>{props.movie.Title}</h3>
//         </div>
//     </div>)
// }


const MovieCard = ({ movie }) => {
    return (
        <div className="movie">
            <div>
                <p>{movie.Year}</p>
            </div>

            <div>
                <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt={movie.Title}></img>
            </div>

            <div>
                <span>{movie.Type}</span>
                <h3>{movie.Title}</h3>
            </div>
        </div>
    )

}

export default MovieCard;
