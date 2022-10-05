import { lazy } from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './Layout';


const Home = lazy(() => import('pages/Home').then(module => ({ ...module, default: module.Home})));
const Movies = lazy(() => import('pages/Movies').then(module => ({ ...module, default: module.Movies })));
const Cast = lazy(() => import('./Cast').then(module => ({ ...module, default: module.Cast })));
const MovieDetails = lazy(() => import('../pages/MovieDetails').then(module => ({ ...module, default: module.MovieDetails })));
const Reviews = lazy(() => import('./Reviews').then(module => ({ ...module, default: module.Reviews })));


export const App = () => {
 

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home/>}/>
        <Route path="movies" element={<Movies />}/>
        <Route
          path="movies/:movieId"
          element={<MovieDetails/>}
        >
          <Route path="cast" element={<Cast/>} />
          <Route path="reviews" element={<Reviews/>} />
        </Route>
        <Route path="*" element={<Navigate to='/'/>} />
      </Route>
    </Routes>
  );
};
