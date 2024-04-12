import request from "../request.js";

export async function getCtIpv4() {
    return await request({
        method: 'GET',
        url: 'https://ipv4_ct.itdog.cn/'
    })
}

export async function getCtIpv6() {
    return await request({
        method: 'GET',
        url: 'https://ipv6_ct.itdog.cn/'
    })
}