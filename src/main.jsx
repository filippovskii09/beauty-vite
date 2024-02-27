import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './reset.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Router/Router';
import { Provider } from 'react-redux';
import { store } from './store/store';
import FavoriteProvider from './context/FavoriteContext';
import AddedItemProvider from './context/AddedItemContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
		<Provider store={store}>
			<FavoriteProvider>
				<AddedItemProvider>
					<RouterProvider router={router} />
				</AddedItemProvider>
			</FavoriteProvider>
		</Provider>
  </React.StrictMode>
);
