export default function getIdFromUrl(url) {
	return parseInt(url.match(/\d+/));
}
