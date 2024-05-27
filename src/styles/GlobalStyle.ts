import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	*,
	*::before,
	*::after {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	html {
		-moz-text-size-adjust: none;
		-webkit-text-size-adjust: none;
		text-size-adjust: none;
		font-size: 16px;
	}

	body,
	h1,
	h2,
	h3,
	h4,
	p,
	figure,
	blockquote,
	dl,
	dd {
		margin-block-end: 0;
		font-size: inherit;
		font-weight: inherit;
	}

	ul,
	ol{
		list-style: none;
	}

	a {
		display: block;
		text-decoration: none;
		color: inherit;
	}
`;

export default GlobalStyle;
