import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

	*,
	html {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
		list-style-type: none;
		text-decoration: none;
		font-family: ${({ theme }) => theme.fonts.fontFamily};
		outline: none;
  	  	border: none;
	}
	body {
	  -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
	  z-index: -1;
	  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1899%26quot%3b)' fill='none'%3e%3ccircle r='46.666666666666664' cx='1282.54' cy='103.73' fill='rgba(81%2c 133%2c 138%2c 1)'%3e%3c/circle%3e%3crect width='312' height='312' clip-path='url(%26quot%3b%23SvgjsClipPath1900%26quot%3b)' x='997.45' y='332.15' fill='url(%23SvgjsPattern1901)' transform='rotate(118.7%2c 1153.45%2c 488.15)'%3e%3c/rect%3e%3crect width='348' height='348' clip-path='url(%26quot%3b%23SvgjsClipPath1902%26quot%3b)' x='880.87' y='-36.48' fill='url(%23SvgjsPattern1903)' transform='rotate(218.52%2c 1054.87%2c 137.52)'%3e%3c/rect%3e%3crect width='252' height='252' clip-path='url(%26quot%3b%23SvgjsClipPath1904%26quot%3b)' x='856.42' y='395.12' fill='url(%23SvgjsPattern1905)' transform='rotate(338.53%2c 982.42%2c 521.12)'%3e%3c/rect%3e%3ccircle r='74.63784201469254' cx='455.88' cy='309.94' fill='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/circle%3e%3ccircle r='72.57057815646678' cx='1096.68' cy='434.55' stroke='rgba(122%2c 212%2c 179%2c 1)' stroke-width='1.86' stroke-dasharray='3%2c 2'%3e%3c/circle%3e%3crect width='172.79999999999998' height='172.79999999999998' clip-path='url(%26quot%3b%23SvgjsClipPath1906%26quot%3b)' x='103.33' y='373.99' fill='url(%23SvgjsPattern1907)' transform='rotate(191.05%2c 189.73%2c 460.39)'%3e%3c/rect%3e%3cpath d='M1203.83 515.79a5.6 5.6 0 1 0 2.67-10.88 5.6 5.6 0 1 0-2.67 10.88zM1207.64 500.25a5.6 5.6 0 1 0 2.66-10.88 5.6 5.6 0 1 0-2.66 10.88zM1211.44 484.71a5.6 5.6 0 1 0 2.66-10.88 5.6 5.6 0 1 0-2.66 10.88zM1215.24 469.17a5.6 5.6 0 1 0 2.67-10.88 5.6 5.6 0 1 0-2.67 10.88zM1211.77 550.68a5.6 5.6 0 1 0 2.66-10.88 5.6 5.6 0 1 0-2.66 10.88zM1215.57 535.14a5.6 5.6 0 1 0 2.66-10.88 5.6 5.6 0 1 0-2.66 10.88zM1219.38 519.59a5.6 5.6 0 1 0 2.66-10.87 5.6 5.6 0 1 0-2.66 10.87zM1223.18 504.05a5.6 5.6 0 1 0 2.66-10.88 5.6 5.6 0 1 0-2.66 10.88zM1219.71 585.56a5.6 5.6 0 1 0 2.66-10.88 5.6 5.6 0 1 0-2.66 10.88zM1223.51 570.02a5.6 5.6 0 1 0 2.66-10.88 5.6 5.6 0 1 0-2.66 10.88zM1227.31 554.48a5.6 5.6 0 1 0 2.66-10.88 5.6 5.6 0 1 0-2.66 10.88zM1231.11 538.94a5.6 5.6 0 1 0 2.67-10.88 5.6 5.6 0 1 0-2.67 10.88z' stroke='rgba(122%2c 212%2c 179%2c 1)' stroke-width='1.3' stroke-dasharray='3%2c 2'%3e%3c/path%3e%3cpath d='M677.1 75.87a5.6 5.6 0 1 0-3.8-10.53 5.6 5.6 0 1 0 3.8 10.53zM671.67 60.82a5.6 5.6 0 1 0-3.79-10.53 5.6 5.6 0 1 0 3.79 10.53zM666.25 45.77a5.6 5.6 0 1 0-3.8-10.54 5.6 5.6 0 1 0 3.8 10.54zM660.82 30.72a5.6 5.6 0 1 0-3.79-10.54 5.6 5.6 0 1 0 3.79 10.54z' stroke='rgba(122%2c 212%2c 179%2c 1)' stroke-width='1.52' stroke-dasharray='4%2c 4'%3e%3c/path%3e%3crect width='127.4' height='127.4' clip-path='url(%26quot%3b%23SvgjsClipPath1908%26quot%3b)' x='603.75' y='422.42' fill='url(%23SvgjsPattern1909)' transform='rotate(130.85%2c 667.45%2c 486.12)'%3e%3c/rect%3e%3cpath d='M1330.85 126.67L1333.5 139.2 1321.86 144.54 1324.51 157.07 1312.87 162.4 1315.52 174.93 1303.88 180.27' stroke='rgba(81%2c 133%2c 138%2c 1)' stroke-width='1' stroke-dasharray='2%2c 2'%3e%3c/path%3e%3cpath d='M830.6 35.28L842.08 29.59 850.14 39.54 861.62 33.86 869.68 43.81 881.16 38.13 889.22 48.08M828.89 43.09L840.37 37.41 848.43 47.36 859.91 41.68 867.97 51.63 879.45 45.95 887.51 55.9' stroke='rgba(81%2c 133%2c 138%2c 1)' stroke-width='1.19' stroke-dasharray='3%2c 3'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1899'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cpattern x='0' y='0' width='6' height='6' patternUnits='userSpaceOnUse' id='SvgjsPattern1901'%3e%3cpath d='M0 6L3 0L6 6' stroke='rgba(255%2c 255%2c 255%2c 1)' fill='none'%3e%3c/path%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath1900'%3e%3ccircle r='78' cx='1153.45' cy='488.15'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='6' height='6' patternUnits='userSpaceOnUse' id='SvgjsPattern1903'%3e%3cpath d='M3 1L3 5M1 3L5 3' stroke='rgba(122%2c 212%2c 179%2c 1)' fill='none' stroke-width='1'%3e%3c/path%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath1902'%3e%3ccircle r='87' cx='1054.87' cy='137.52'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='6' height='6' patternUnits='userSpaceOnUse' id='SvgjsPattern1905'%3e%3cpath d='M0 6L3 0L6 6' stroke='rgba(122%2c 212%2c 179%2c 1)' fill='none'%3e%3c/path%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath1904'%3e%3ccircle r='63' cx='982.42' cy='521.12'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='9.6' height='9.6' patternUnits='userSpaceOnUse' id='SvgjsPattern1907'%3e%3cpath d='M0 9.6L4.8 0L9.6 9.6' stroke='rgba(81%2c 133%2c 138%2c 1)' fill='none'%3e%3c/path%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath1906'%3e%3ccircle r='43.199999999999996' cx='189.73' cy='460.39'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='127.4' height='12.74' patternUnits='userSpaceOnUse' id='SvgjsPattern1909'%3e%3crect width='127.4' height='6.37' x='0' y='0' fill='rgba(122%2c 212%2c 179%2c 1)'%3e%3c/rect%3e%3crect width='127.4' height='6.37' x='0' y='6.37' fill='rgba(0%2c 0%2c 0%2c 0)'%3e%3c/rect%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath1908'%3e%3ccircle r='31.85' cx='667.45' cy='486.12'%3e%3c/circle%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
	  background-color: #d0e7cb;
	}
	code {
	  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
	    monospace;
	}
	// forms inputs etc
	*:focus,
	input:focus,
	* {
	  outline: none;
	}
	:focus {
	  outline: none;
	}
	*::-webkit-scrollbar {
	  width: 0; /* remove scrollbar space */
	  background: transparent; /* or/and make scrollbar invisible */
	}
	button:focus {
	  outline: 0;
	}
	form {
	  text-align: center;
	  margin: auto;
	}
	input:focus,
	textarea:focus {
	  border: none;
	  color: $primaryColor;
	  outline: none;
	}
	button {
	  outline: 0;
	  border: 0;
	}
`;

export default GlobalStyles;
