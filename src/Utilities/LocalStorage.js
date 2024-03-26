export const saveDataToLocalStorage = (book) => {
    const savedData = JSON.parse(localStorage.getItem('readList')) || []
    const isExist = savedData.find((item) => item.bookId === book.bookId)
    console.log(isExist);
    if (!isExist) {
        savedData.push(book)
        localStorage.setItem("readList", JSON.stringify(savedData));
    } else {
        alert('lol')
    }
    
}