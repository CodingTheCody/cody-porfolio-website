import {useState, type JSX, useEffect} from 'react';

export function EnsurePageIsLoaded(props: {loadingComponent: JSX.Element, children: JSX.Element}) {
	const [isLoaded, setIsLoaded] = useState(false);
	useEffect(() => {
		return
	});
	return isLoaded ? props.children : props.loadingComponent;
}
