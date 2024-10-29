import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import "./styles/fonts.css"
import App from './App.jsx';


import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import theme from './mui_theme/Theme.js';

const client = new ApolloClient({
  uri: import.meta.env.VITE_BLOG_GRAPH_CMS,
  cache: new InMemoryCache(),
})

createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>

      <App />
      </ThemeProvider>
    </ApolloProvider>
  </BrowserRouter>
)
