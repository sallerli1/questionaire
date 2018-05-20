export function fetch(method, url, data) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest()
        xhr.onload = () => {
            resolve(xhr.response)
        }
        xhr.onerror = (event) => {
            reject(event.error)
        }
        xhr.responseType = 'json'

        xhr.open(method, url, true)
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
        
        if (data instanceof Object) {
            data = jsonToUrl(data)
        }

        xhr.send(data)
    })
}

export function get(url, data) {
    return fetch('GET', url, data)
}

export function post(url, data) {
    return fetch('POST', url, data)
}

function jsonToUrl(param, key) {
    var paramStr = "";
    if (typeof param === 'string' || typeof param === 'number' || typeof param === 'boolean') {
        paramStr += "&" + key + "=" + encodeURIComponent(param);
    } else {
        if (Array.isArray(param)) {
            for (let i=0; i<param.length; i++) {
                var k = key == null ? i : key + (param instanceof Array ? "[" + i + "]" : "." + i);
                paramStr += '&' + jsonToUrl(param[i], k);
            }
        } else {
            for (const keyStr of Object.keys(param)) {
                var k = key == null ? keyStr : key + (param instanceof Array ? "[" + keyStr + "]" : "." + keyStr);
                paramStr += '&' + jsonToUrl(param[keyStr], k);
            }
        }
    }
    return paramStr.substr(1);
};