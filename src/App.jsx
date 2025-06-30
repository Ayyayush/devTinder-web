import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Body from './Body';
import Login from './Login';
import Profile from './Profile';
// import Feed from './Feed'; // You'll need to create this
// import Matches from './Matches'; // You'll need to create this

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Body />}>
          <Route index element={<Feed />} />
          {/* <Route path="feed" element={<Feed />} /> */}
          <Route path="matches" element={<Matches />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="/login" element={<Login/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
