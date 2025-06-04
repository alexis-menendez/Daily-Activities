// Test that the Blog Page contains a header, with a light mode/dark mode toggle, and a "Back" button.

edTest(
  'Should have a header element, with a light mode/dark mode toggle, and a "Back" button.',
  () => {
    const header = document.querySelector('header');
    const toggle = document.querySelector('#toggle');
    const back = document.querySelector('#back');

    if (header && toggle && back) {
      return {
        ok: true,
        passed: true,
        score: 5,
        feedback:
          'Great job! You have a header element with a light mode/dark mode toggle and a "Back" button!',
        expand_feedback: true,
      };
    }
    return {
      ok: true,
      passed: false,
      feedback:
        'No header element found, or missing a light mode/dark mode toggle or "Back" button!',
      expand_feedback: true,
    };
  }
);

// Test that the Blog Page contains a main element.

edTest('Should have a main element.', () => {
  const main = document.querySelector('main');

  if (main) {
    return {
      ok: true,
      passed: true,
      score: 5,
      feedback: 'Great job! You have a main element!',
      expand_feedback: true,
    };
  }
  return {
    ok: true,
    passed: false,
    feedback: 'No main element found!',
    expand_feedback: true,
  };
});
