export default class MediaHandler {
    getPermissions() {
        return new Promise((res, rej) => {
            navigator.mediaDevices.getUserMedia({video: true, audio: false})
                .then((stream) => {
                    res(stream);
                })
                .catch(err => {
                    console.log(`Unable to fetch stream ${err}`)
                })
        });
    }
}
