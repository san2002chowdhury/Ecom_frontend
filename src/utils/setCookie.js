const setCookie = (name, value, minutes) => {
  // let expires = "";
  // if (minutes) {
  //   const date = new Date();
  //   date.setTime(date.getTime() + minutes * 60 * 1000);
  //   expires = "; expires=" + date.toUTCString();
  // }
  // // document.cookie = name + "=" + (value || "") + expires + ";path=/";
  // document.cookie = name + "=" + (value || "") + expires + ";path=/";
  localStorage.setItem(name, value);
};

export default setCookie;
