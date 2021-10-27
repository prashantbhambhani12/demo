/*Function that attaches events to provided selectors and call respective functions*/
let handleEvent = (selector, event, func) => {
  if (document.querySelectorAll(selector).length)
    document.querySelectorAll(selector).forEach((v) =>
      v.addEventListener(event, (e) => {
        func(e);
      })
    );
};

export { handleEvent };
