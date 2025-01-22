import './resume.css';

export default function Resume() {
	const pdfUrl = `${import.meta.env.VITE_FRONT_END_BASE_URI}/Cody_Brooks_Software_Engineer_Resume.pdf`;
	const iframeUrl = `https://mozilla.github.io/pdf.js/web/viewer.html?file=${pdfUrl}`;

	return (
		<iframe className="resume-iframe" src={iframeUrl} frameBorder="0"></iframe>
	);
}
