import React, {useMemo, useState} from 'react';
import {useRef} from "react";
import Counter from "./components/Counter";
import Logo from "./components/Logo";
import Sticker from "./components/Sticker";
import MyInput from "./components/UI/input/MyInput";
import './components/styles/App.css';
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import {usePosts} from "./hooks/usePost";



function App() {

    const [posts, setPosts] = useState([
        {id: 1, title: 'My Title', body: 'Description' },
        {id: 2, title: 'My Title', body: 'Description' },
        {id: 3, title: 'My Title', body: 'Description' },
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

    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);


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

  return (
      //горизонтальный разделитель hr -->
    <div className="App">
        <MyButton style={{marginTop: '30px'}} onClick={() => setModal(true)}>
            Create Sticker
        </MyButton>
        <MyModal visible={modal} setVisible={setModal}>
            <PostForm create={createPost}/>
        </MyModal>
        <hr style={{margin: '15px 0'}}/>
        <PostFilter
            filter={filter}
            setFilter={setFilter}
        />
        <PostList remove={removePost} posts={sortedAndSearchedPosts} title='Stickers'/>
    </div>
  );
}

export default App;
