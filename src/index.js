import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';
import { theme } from './constants/theme';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<BrowserRouter basename="/whatToWatch/">
				<App />
			</BrowserRouter>
		</ThemeProvider>
	</React.StrictMode>
);

/*
<BrowserRouter basename="/goit-react-hw-05-movies/">
*/
