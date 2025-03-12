// test for responsive design

const resized = new Promise((resolve) => {
  window.addEventListener('resize', () => {
    resolve();
  });
});

const waitForTransition = new Promise((resolve) => {
  setTimeout(() => {
    resolve();
  }, 1000);
});

// check that all of the flex items have the same height
edTest(
  'Should resize the minHeight when screen size is less than or equal to 768px.',
  async () => {
    window.resizeTo(768, 768);
    await resized;

    await waitForTransition;

    const flexItems = document.querySelectorAll('.flex-item');
    const flexItemFirstHeight = window.getComputedStyle(flexItems[0]).getPropertyValue('height');
    console.log(flexItemFirstHeight);
    for(let item of flexItems) {
      if (window.getComputedStyle(item).getPropertyValue('height') !== flexItemFirstHeight) {
        return {
          ok: true,
          passed: false,
          feedback: 'Make sure all of the flex items have the same height.',
        };
      }
    }
    return {
      ok: true,
      passed: true,
      score: 10,
      feedback: 'Great job! All of the flex items have the same height.',
    };
  }
);
