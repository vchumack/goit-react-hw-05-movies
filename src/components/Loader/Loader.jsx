import React from 'react';
import { Hearts } from 'react-loader-spinner';
import {DivLoader} from './Loader.styled'

export const Loader = () => {
	return (
		<DivLoader>
			<Hearts
				height="80"
				width="80"
				color="#de6b10"
				ariaLabel="hearts-loading"
				wrapperStyle={{}}
				wrapperClass=""
				visible={true}
			/>
		</DivLoader>
	);
};
