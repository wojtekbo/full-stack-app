import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import HomePage from './components/pages/HomePage/HomePage';
import NotFound from './components/pages/NotFound/NotFound';
import Header from './components/views/Header/Header';
import {Routes, Route} from 'react-router-dom';
import Post from './components/pages/Post/Post';
import AuthDropdown from './components/common/AuthDropdown/AuthDropdown';
import SearchResults from './components/pages/SearchResults/SearchResults';
import AddPost from './components/pages/AddPost/AddPost';
import EditPost from './components/pages/EditPost/EditPost';

function App() {
  return (
    <div className="App">
      <Container>
        <AuthDropdown className="text-center" />
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search/:searchPhrase" element={<SearchResults />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="/post/add" element={<AddPost />} />
          <Route path="/post/edit/:id" element={<EditPost />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
