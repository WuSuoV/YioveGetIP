import request from "../request.js";

export async function getGoogleIpv4() {
    return await request({
        method: 'GET',
        url: 'https://ipv4.lvhai.org/'
    })
}

export async function getGoogleIpv6() {
    return await request({
        method: 'GET',
        url: 'https://ipv6.lvhai.org/'
    })
}