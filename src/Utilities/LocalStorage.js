import toast from "react-hot-toast";

export const saveDataToLocalStorage = (book) => {
  const savedData = JSON.parse(localStorage.getItem("readList")) || [];
  const isExist = savedData.find((item) => item.bookId === book.bookId);
  const WishList = JSON.parse(localStorage.getItem("wishList")) || [];
  const filteredWishlist = WishList.filter(
    (item) => item.bookId !== book.bookId
  );
  if (!isExist) {
    localStorage.setItem("wishList", JSON.stringify(filteredWishlist));
    savedData.push(book);
    localStorage.setItem("readList", JSON.stringify(savedData));
    toast.success("This book added as read!");
  } else {
    toast.error("You have already readed this book");
  }
};

export const getDataFromLocalStorage = (book) => {
  const localStorageData = JSON.parse(localStorage.getItem("readList")) || [];
  const isReaded = localStorageData.find((item) => item.bookId === book.bookId);
  const LocalWishList = JSON.parse(localStorage.getItem("wishList")) || [];
  const isAlreadyExist = LocalWishList.find(
    (item) => item.bookId === book.bookId
  );
  if (isReaded) {
    toast.error("you readed this book");
  } else if (isAlreadyExist) {
    toast.error("Already have in wishlist");
  } else if (!isReaded && !isAlreadyExist) {
    const wishListArr = JSON.parse(localStorage.getItem("wishList")) || [];
    wishListArr.push(book);
    localStorage.setItem("wishList", JSON.stringify(wishListArr));
    toast.success("This book added to wishlist");
  } else {
    toast.error("You have Already added this book in wishlist");
  }
};

export const getLocalReadList = () => {
  const localReadList = JSON.parse(localStorage.getItem("readList")) || [];
  return localReadList;
};

export const getLocalWishList = () => {
  const LocalWishList = JSON.parse(localStorage.getItem("wishList")) || [];
  return LocalWishList;
};
