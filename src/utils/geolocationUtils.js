export const getGeoLocation = () => {
	return new Promise((resolve, reject) => {
		if (!navigator.geolocation) {
			reject("Geolocation is not supported by your browser");
		} else {
			navigator.geolocation.getCurrentPosition(resolve, reject);
		}
	});
};
