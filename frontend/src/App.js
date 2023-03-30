import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import SharedLayout from "./pages/SharedLayout";
import SharedPortfolioLayout from "./pages/SharedPortfolioLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import Resume from "./pages/Resume";
import Music from "./pages/Music";
import SinglePortfolio from "./pages/SinglePortfolio";
import Portfolio from "./pages/Portfolio";
export const url = "http://localhost:1337";
// apollo client
const api = new ApolloClient({
    uri: url + "/graphql",
    cache: new InMemoryCache(),
});

function App() {
    return (
        <BrowserRouter>
            <ApolloProvider client={api}>
                <Routes>
                    <Route path="/" element={<SharedLayout />}>
                        <Route index element={<Home />} />
                        <Route path="about" element={<About />} />
                        <Route path="resume" element={<Resume />} />
                        <Route
                            path="portfolio"
                            element={<SharedPortfolioLayout />}>
                            <Route index element={<Portfolio />} />
                            <Route
                                path=":portfolioId"
                                element={<SinglePortfolio />}
                            />
                        </Route>
                        <Route path="music" element={<Music />} />
                        <Route path="*" element={<Error />} />
                    </Route>
                    <Route path="*" element={<Error />} />
                </Routes>
            </ApolloProvider>
        </BrowserRouter>
    );
}

export function scrollBottom(e) {
    const element = document.getElementById("footer");
    element.scrollIntoView();
}

export function scrollTop(e) {
    window.scrollTo(0, 0);
}

export default App;
