// Test that the page style changes when the light mode/dark mode toggle is clicked.

edTest(
  'Should change the page style when the light mode/dark mode toggle is clicked.',
  () => {
    const toggle = document.querySelector('#toggle');
    const header = document.querySelector('header');
    const cssObject = window.getComputedStyle(header);

    const initialColor = cssObject.color;
    toggle.click();
    const newCssObject = window.getComputedStyle(header);
    const colorAfterClick = newCssObject.color;

    if (initialColor !== colorAfterClick) {
      return {
        ok: true,
        passed: true,
        score: 10,
        feedback:
          'Great job! The page style changes when the light mode/dark mode toggle is clicked!',
        expand_feedback: true,
        observed: `initialColor: ${initialColor}, colorAfterClick: ${colorAfterClick}`,
      };
    }
    return {
      ok: true,
      passed: false,
      feedback:
        'The page style does not change when the light mode/dark mode toggle is clicked!',
      expand_feedback: true,
      observed: `initialColor: ${initialColor}, colorAfterClick: ${colorAfterClick}`,
    };
  }
);

// Test that the "--circle-color" attribute changes when the light mode/dark mode toggle is clicked.

edTest(
  'Should change the "--circle-color" attribute when the light mode/dark mode toggle is clicked.',
  () => {
    const toggle = document.querySelector('#toggle');

    const initialCircleColor =
      document.documentElement.style.getPropertyValue('--circle-color');
    toggle.click();
    const circleColorAfterClick =
      document.documentElement.style.getPropertyValue('--circle-color');

    if (initialCircleColor !== circleColorAfterClick) {
      return {
        ok: true,
        passed: true,
        score: 10,
        feedback:
          'Great job! The "--circle-color" attribute changes when the light mode/dark mode toggle is clicked!',
        expand_feedback: true,
      };
    }
    return {
      ok: true,
      passed: false,
      feedback:
        'The "--circle-color" attribute does not change when the light mode/dark mode toggle is clicked!',
      expand_feedback: true,
    };
  }
);
