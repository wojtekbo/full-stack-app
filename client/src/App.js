import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import HomePage from './components/pages/HomePage/HomePage';
import NotFound from './components/pages/NotFound/NotFound';
import Header from './components/views/Header/Header';
import {Routes, Route} from 'react-router-dom';
import EditablePost from './components/pages/EditablePost/EditablePost';
import Post from './components/pages/Post/Post';
import AuthDropdown from './components/common/AuthDropdown/AuthDropdown';

function App() {
  return (
    <div className="App">
      <Container>
        <AuthDropdown />
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="/post/add" element={<EditablePost />} />
          <Route path="/post/edit/:id" element={<EditablePost />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
