import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import "../styles/globals.css";

import Header from "../components/Header";

const queryClient = new QueryClient();
const MyApp = ({ Component, pageProps }) => {
    return (
        <QueryClientProvider client={queryClient}>
            <Header />
            <Component {...pageProps} />
            <ReactQueryDevtools />
        </QueryClientProvider>
    );
};

export default MyApp;
