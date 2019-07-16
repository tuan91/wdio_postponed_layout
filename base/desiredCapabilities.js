const desiredCapabilities =
    [
        /*
        // Desktop
        {
            "os": "Windows",
            "os_version": "10",
            "browser": "Chrome",
            "logName": "Desktop",
            "resolution": "1920x1080"
        },
        {
            "os": "Windows",
            "os_version": "10",
            "browser": "Firefox",
            "logName": "Desktop",
            "resolution": "1920x1080"
        },
        // Smartphone
        {
            "os_version": "12",
            "device": "iPhone XR",
            "real_mobile": "true",
            "browserstack.appium_version": "1.9.1"
        },
         */
        {
            "os_version": "9.0",
            "device": "Google Pixel 3",
            "real_mobile": "true",
            "logName": "Mobile",
            "browserstack.appium_version": "1.12.1"
        }
        // Tablet
        /*
        {
            "os_version": "12",
            "device": "iPad Pro 12.9 2018",
            "real_mobile": "true",
            "browserstack.appium_version": "1.9.1"
        }
         */
    ];

module.exports = {desiredCapabilities};