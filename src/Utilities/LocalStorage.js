import toast from "react-hot-toast";

export const saveDataToLocalStorage = (book) => {
  const savedData = JSON.parse(localStorage.getItem("readList")) || [];
  const isExist = savedData.find((item) => item.bookId === book.bookId);
  if (!isExist) {
    savedData.push(book);
    localStorage.setItem("readList", JSON.stringify(savedData));
    toast.success("This book added successfully!");
  } else {
    toast.error("Book Already added!");
  }
};

export const getDataFromLocalStorage = (book) => {
  const localStorageData = JSON.parse(localStorage.getItem("readList")) || [];
    const isReaded = localStorageData.find((item) => item.bookId === book.bookId);
    const
  if (!isReaded) {
    localStorage.setItem("withList", JSON.stringify(book));
  } else {
    toast.error("You already readed this book!");
  }
};
