import * as React from 'react';

export function IconSearch(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			fill="currentColor"
			viewBox="0 0 16 16"
			height="1em"
			width="1em"
			{...props}
		>
			<path d="M11.742 10.344a6.5 6.5 0 10-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 001.415-1.414l-3.85-3.85a1.007 1.007 0 00-.115-.1zM12 6.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0z" />
		</svg>
	);
}

export function IconGeoAlt(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			fill="currentColor"
			viewBox="0 0 16 16"
			height="1em"
			width="1em"
			{...props}
		>
			<path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 018 14.58a31.481 31.481 0 01-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0110 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 002 6c0 4.314 6 10 6 10z" />
			<path d="M8 8a2 2 0 110-4 2 2 0 010 4zm0 1a3 3 0 100-6 3 3 0 000 6z" />
		</svg>
	);
}

export function IconBxTimeFive(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			viewBox="0 0 24 24"
			fill="currentColor"
			height="1em"
			width="1em"
			{...props}
		>
			<path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
			<path d="M13 7h-2v5.414l3.293 3.293 1.414-1.414L13 11.586z" />
		</svg>
	);
}