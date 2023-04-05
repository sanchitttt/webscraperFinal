function filterBySearch(data, search) {
    search = search.toLowerCase();
    search = new RegExp(search, 'ig');
    let newArr = [];
    data.forEach((item) => {
        if (item.type === 'quora') {
            if (item.answer && (item.answer.match(search) !== null)) {
                newArr.push(item);
            }
            if (item.question && (item.question.match(search) !== null)) {
                newArr.push(item);
            }
        }
        else if (item.type === 'reddit') {
            if (item.question && (item.question.match(search) !== null)) {
                newArr.push(item);
            }
        }
        else if (item.type === 'youtube') {
            if (item.title && (item.title.match(search) !== null)) {
                newArr.push(item);
            }
        }
        else if (item.type === 'twitter') {
            if (item.text && (item.text.match(search) !== null)) {
                newArr.push(item);
            }
        }
    })
    return newArr;
}

export default filterBySearch;