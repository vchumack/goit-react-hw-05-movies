import { Home } from 'pages/Home';
import { Movies } from 'pages/Movies';
import { Routes, Route, Outlet } from 'react-router-dom';
import { Layout } from './Layout';
import { MovieDetails } from './MovieDetails';
// import { useState } from 'react';

export const App = () => {
  // const [query, setQuery] = useState('');


  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home/>}/>
        <Route path="movies" element={<Movies />}/>
        <Route
          path="movies/:movieId"
          element={<MovieDetails/>}
        >
          <Route path="cast" element={<div>cast</div>} />
          <Route path="reviews" element={<div>reviews</div>} />
        </Route>
        <Route path="*" element={<div>Not Found</div>} />
      </Route>
    </Routes>
  );
};
