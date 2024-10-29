import React from 'react';
import { Route, Router, Routes } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import Layout from './Layout/Layout';
import './index.css';
import Authors from './components/Authors/Authors';
import Blog from './components/Blog/Blog';
import OnlyBlogs from './components/Blog/OnlyBlogs';
import OnlyAuthors from './components/Authors/OnlyAuthors';
import AuthorPage from './components/Authors/AuthorPage';
import BlogPage from './components/Blog/BlogPage';

const App = () => {
  return (
    <div className='min-h-screen flex flex-col'>

    <Layout >
      <div className=' flex-grow'>

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/Blogs' element={<OnlyBlogs />} />
        <Route path='/Authors' element={<OnlyAuthors />} />

        <Route path='/Blogs/:slug' element={<BlogPage />} />
        <Route path='/Authors/:slug' element={<AuthorPage />} />
      </Routes>
      </div>
    </Layout>
    </div>
  );
};

export default App;