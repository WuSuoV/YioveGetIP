import request from "../request.js";

export async function getCuIpv4() {
    return await request({
        method: 'GET',
        url: 'https://ipv4_cu.itdog.cn/'
    })
}

export async function getCuIpv6() {
    return await request({
        method: 'GET',
        url: 'https://ipv6_cu.itdog.cn/'
    })
}