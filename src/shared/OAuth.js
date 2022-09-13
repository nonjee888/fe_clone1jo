const REST_API_KEY = "f4190768ed12333a6bf90f3cb94251a1"; //Kakao에서 받은 REST API
const REDIRECT_URI = "http://www.localhost:3000/kakaoloading/"; //Redirect를 loading페이지로 함

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
