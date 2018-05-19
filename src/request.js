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
        xhr.send(data)
    })
}

export function get(url, data) {
    return fetch('GET', url, data)
}

export function post(url, data) {
    return fetch('POST', url, data)
}