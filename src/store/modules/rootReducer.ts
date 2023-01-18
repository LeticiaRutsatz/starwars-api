import { combineReducers } from 'redux';
import { MoviesReducer } from './Filmes';
import { PersonagensReducer } from './Personagens';


const rootReducer = combineReducers({
    personagens: PersonagensReducer,
    movies: MoviesReducer,
});

export { rootReducer };