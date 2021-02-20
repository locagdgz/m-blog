import request from './request'

export function listArticle(pageNo, pageSize) {
    return request({
        url: "/article/listArticle",
        params: {
            pageNo,
            pageSize
        }
    })
}

export function getArticle(id) {
    return request({
        url: "/article/get/" + id
    })
}
