import React, {useEffect, useMemo, useState} from 'react';
import {usePosts} from "../hooks/usePost";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import {getPageCount} from "../utils/pages";
import MyButton from "../components/UI/button/MyButton";
import MyModal from "../components/UI/MyModal/MyModal";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import PostList from "../components/PostList";
import Pagination from "../components/UI/pagination/Pagination";
import Loader from "../components/UI/Loader/Loader";




function Posts() {

    const [posts, setPosts] = useState([

    ])
    //двустороннее связывание сортировки
    //const [selectedSort, setSelectedSort] = useState('')
    //Реалезация поиска
    //состояние для поиска
    //const [searchQuery, setSearchQuery] = useState('')

    //новая сортировка
    const [filter, setFilter] = useState({sort: '', query: ''})
    //отсортируем массив и уставновим номальный поиск вызывающтйся только при изменении в массиве

    //состояние отвечающее за то видимо ли модальное окно
    const [modal, setModal] = useState(false);

    //состояние для общего количества постов на сервере
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)

    //сформируем массив со значениеями от 1 до 10
    // на основании которого при нажатии на кнопки будет меняться страница
    //let pagesArray = getPagesArray(totalPages);

    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
    //штука для медленного интернета чтобы не было видно надписи "Stickers not found"
    //const [isPostsLoading, setIsPostsLoading] = useState(false);
    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
        const response = await PostService.getALL(limit, page);
        setPosts(response.data)
        const totalCount = (response.headers['x-total-count'])
        setTotalPages(getPageCount(totalCount, limit));
    })
    //функция которая отправляет запрос на сервер получсает какие то данные
    // и помещает их в состояние с постами

    useEffect(() => {
        fetchPosts();
    }, [page])

    //создаем пост из функции в PostForm.jsx
    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        //закрытие модального окна
        setModal(false);
    }
    //получаем пост из дочернего компонента
    //пришлость прокинуть функцию через два компонента PostItem и PostList
    const removePost = (post) => {
        //filter() - возвращает новый массив отфильтрованный по какому либо устровию
        setPosts(posts.filter(p => p.id !== post.id))
    }

    //функция которая изменяет номер страницы и подгружает новую порцию даннных
    const changePage = (page) => {
        setPage(page);

    }

    return (
        //горизонтальный разделитель hr -->
        <div className="App">
            <MyButton style={{marginTop: '30px'}} onClick={() => setModal(true)}>
                Create Sticker
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>
            <hr style={{margin: '15px 0', visibility: 'hidden'}}/>
            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />
            {postError &&
                <h1>Error ${postError}</h1>
            }
            {isPostsLoading
                ? <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}><Loader/></div>
                : <PostList remove={removePost} posts={sortedAndSearchedPosts} title='Stickers'/>
            }
            <Pagination page={page} changePage={changePage} totalPages={totalPages}/>
        </div>
    );
}

export default Posts;
