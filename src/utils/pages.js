//функция обработки страниц
//из общего количетсва постов и лимита считает общее число страниц

export const getPageCount = (totalCount, limit) => {
    return Math.ceil(totalCount / limit);
}

//заполение массива постов для страниц
export const getPagesArray = (totalPages) => {
    let result = [];
    for (let i = 0; i < totalPages; i++) {
        result.push(i + 1);
    }
    return result;
}
