import './resume.css';
import {useState} from 'react';

export default  function Resume() {
	const pdfUrl = `${location.protocol}//${location.host}/Cody_Brooks_Software_Engineer_Resume.pdf`;
	const iframeUrl = `https://mozilla.github.io/pdf.js/web/viewer.html?file=${pdfUrl}`;


	return (
		<iframe className="resume-iframe" src={iframeUrl} frameBorder="0"></iframe>
	);
}
