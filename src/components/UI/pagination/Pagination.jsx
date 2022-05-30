import React from 'react';
import {getPagesArray} from "../../../utils/pages";
//прокрутка страниц
//получает массив значений из страниц и по клику изменяет страницу
const Pagination = ({totalPages, page, changePage}) => {
    //сформируем массив со значениеями от 1 до 10
    // на основании которого при нажатии на кнопки будет меняться страница
    let pagesArray = getPagesArray(totalPages);
    return (
        <div className="page__wrapper">
            {pagesArray.map(p =>
                <span
                    onClick={() => changePage(p)}
                    key={p} className={page === p ? 'page page__current' : 'page'}
                >
                    {p}
                </span>
            )}
        </div>
    );
};

export default Pagination;