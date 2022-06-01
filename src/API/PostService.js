import axios from "axios";

export default class PostService {
    static async getALL(limit = 10, page = 1) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/', {
            params: {
                _limit: limit,
                _page: page
            }
        })
        return response;
    }
//get post id from server
    static async getById(id) {
        //добавляем к запросу id поста
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/`)
        return response;
    }

    static async getCommentsByPostId(id) {
//get post comment by id from server
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        return response;
    }
}