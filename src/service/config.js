// const devBaseURL = "http://localhost:8080/blog"
const proBaseURL = "http://106.52.156.191:8080/blog"
const devBaseURL = "http://106.52.156.191:8080/blog"
// const proBaseURL = "https://production.org"

export const BASE_URL = process.env.NODE_ENV === 'development' ? devBaseURL : proBaseURL

export const TIMEOUT = 5000