export function removeAllClasses(myDiv) {
  const classList = myDiv.classList;

  while (classList.length > 0) {
    classList.remove(classList.item(0));
  }
}