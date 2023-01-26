import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import BlogLayout from "./layouts/BlogLayout/BlogLayout";
import Post from "./pages/Post/Post";
import DestinationsLayout from "./layouts/DestinationsLayout/DestinationsLayout";
import Destination from "./pages/Destination/Destination";
import DestinationsHome from "./pages/DestinationHome/DestinationsHome";
import PostsContextProvider from "./contexts/PostContextProvider";
import Utils from "./pages/Utils/Utils";
import UtilsPost from "./pages/UtilsPost/UtilsPost";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";

function App() {
    return (
        <PostsContextProvider>
            <Routes>
                <Route path="/" element={<BlogLayout />}>
                    <Route index element={<Home />} />
                    <Route path="/utils" element={<Utils />} />
                    <Route path="/utils/:postId" element={<UtilsPost />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Route>
                <Route path="/destinations" element={<DestinationsLayout />}>
                    <Route index element={<DestinationsHome />} />
                    <Route path="/destinations/:destinationId" element={<Destination />} />
                    <Route path="/destinations/:destinationId/post/:postId" element={<Post />} />
                </Route>
            </Routes>
        </PostsContextProvider>
    );
}

export default App;