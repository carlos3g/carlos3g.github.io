import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home, Links, NotFound } from './pages';

const App: FC = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/links" element={<Links />} />
    <Route element={<NotFound />} />
  </Routes>
);

export default App;
