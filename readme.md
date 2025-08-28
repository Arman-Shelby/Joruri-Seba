
1. > What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

<!-- ------------------------------------------------------------------------------------------------ -->

--> getElementById- only works for a single specified id, it usually works faster than other selectors. It is one of the most commonly used methods for DOM manipulation in JavaScript, forming the basis for many interactive features and dynamic content updates on web pages.

--> gelElementByClassName-  returns a live HTMLCollection (an array-like object) of all child elements that possess the specified class name's. It accepts a single string argument representing one or more class names. Multiple class names should be separated by whitespace within the string. For an element to be included in the returned collection, it must have all of the specified class names.

-->querySelecor- returns the first element in the HTML document that matches a specified CSS selector.  It allows developers to select HTML elements using familiar CSS syntax, such as targeting an element by its ID, class, tag name, or a more complex combination of selectors. The method returns the matching element object or null if no match is found, and it can also be used on a specific element to search only within that element's descendants. 

-->querySelectorAll- selecting elements from the Document Object Model (DOM) based on CSS selectors. It returns a static NodeList containing all elements within the document (or a specified parent element) that match the provided CSS selector's. It accepts a string representing one or more CSS selectors, allowing for precise and complex selections based on IDs, classes, tag names, attributes, and more.

<!-- -------------------- -->

2. > How do you create and insert a new element into the DOM?
--> We use the document.createElement() method to create a new HTML element node and use appendChild() tag to insert the new element into the DOM as a last child.

<!-- --------------------------- -->

3. > What is Event Bubbling and how does it work?
--> Event Bubbling is a behavior in Jjs where an event triggered on a child element first runs its own event handler, and then the event continues to propagate upward through its parent, grandparent, and so on until it reaches the document. This means a single user action (like a click) can be detected not only by the element directly interacted with but also by all of its ancestor elements in the DOM tree.

<!-- ---------------------------------- -->

4. > What is Event Delegation in JavaScript? Why is it useful?

Event Delegation in js is a technique where instead of adding event listeners to multiple child elements, you attach a single event listener to their parent. The event then uses event bubbling to catch interactions on the children through the parent.

Why it’s useful:

1. Improves performance by reducing the number of event listeners.
2. Makes code cleaner and easier to maintain.
3. Works for dynamically added elements, since the parent can still listen to events on new children without needing new listeners.

<!-- --------------------------------- -->

5. > What is the difference between preventDefault() and stopPropagation() methods?

preventDefault() is a method in js that stops the browser’s default action associated with an event from happening (for example, preventing a form from submitting or a link from navigating).

stopPropagation() is a method that prevents the event from bubbling up or propagating to parent elements in the DOM, means only the target element’s handler will run and its ancestors won’t be notified of the event.




