class dhbalajiLogger {
    constructor(url, showLogsInConsole, headerObj) {
        this.url = url; //'https://jsonplaceholder.typicode.com/posts'
        this.shouldShowLogsInConsole = showLogsInConsole;
        this.headerObj = headerObj || {
            headers: {
                "content-type": "application/json; charset=UTF-8"
            },
            method: 'POST'
        };
        this.init();
    }

    successCB() {
        if (this.shouldShowLogsInConsole) {
            return 'Error logged'
        }
        return;
    }

    errorCB() {
        if (this.shouldShowLogsInConsole) {
            return 'Error submission errored'
        }
        return;
    }

    getUserAgent() {
        if (window && window.navigator) {
            const {doNotTrack, cookieEnabled, language, userAgent} = window.navigator;
            return {doNotTrack, cookieEnabled, language, userAgent};
        }
    }

    init() {
        window.onerror = (message, source, lineno, colno, error) => {
            const errorObj = {
                message,
                source,
                lineno,
                colno,
                error,
                date: new Date(),
                userAppSettings: this.getUserAgent()
            };
            const payload = Object.assign({}, { ...this.headerObj }, {
                body: JSON.stringify(errorObj)
            })
            if (this.shouldShowLogsInConsole) {
                console.clear();
                console.error(errorObj);
            }
            if (this.url) {
                fetch(this.url, payload).then(() => this.successCB()).catch(() => this.errorCB())
            }
        }
    }
}

module.exports = (URL, showLogsInConsole, headerObj) => {
    new dhbalajiLogger(URL, showLogsInConsole, headerObj);
};
