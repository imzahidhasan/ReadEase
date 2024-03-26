export const saveDataToLocalStorage = (book) => {
    const savedData = JSON.parse(localStorage.getItem('readlist')) || []
    const isExist = savedData.find(item => savedData.id === book.bookId)
    console.log(isExist);
    
}