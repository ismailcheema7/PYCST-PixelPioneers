// script.js

const cursorBubble = document.getElementById('cursor-bubble');

// Track mouse movement to position the bubble
document.addEventListener('mousemove', (e) => {
  cursorBubble.style.left = `${e.pageX}px`;
  cursorBubble.style.top = `${e.pageY}px`;

  // Optional scaling effect when cursor moves quickly
  cursorBubble.style.transform = `translate(-50%, -50%) scale(1.2)`;
});

// Reset scale when mouse stops
document.addEventListener('mouseleave', () => {
  cursorBubble.style.transform = `translate(-50%, -50%) scale(1)`;
});
