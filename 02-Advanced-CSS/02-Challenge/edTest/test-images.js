// check that there are background images for each of the five classes defined in the stylesheet
// test for .run-buddy class
edTest('should have a background image for the ".run-buddy" class', () => {
  const runBuddy = document.querySelector('.run-buddy');
  const runBuddyStyle = window.getComputedStyle(runBuddy);
  const runBuddyBackground = runBuddyStyle.getPropertyValue('background-image');

  if (runBuddyBackground !== 'none') {
    return {
      ok: true,
      passed: true,
      score: 2,
      feedback: 'Great job! The ".run-buddy" class has a background image.',
    };
  }

  return {
    ok: true,
    passed: false,
    feedback: 'Make sure the ".run-buddy" class has a background image.',
  };
});

// test for .led-wall class
edTest('should have a background image for the ".led-wall" class', () => {
  const ledWall = document.querySelector('.led-wall');
  const ledWallStyle = window.getComputedStyle(ledWall);
  const ledWallBackground = ledWallStyle.getPropertyValue('background-image');

  if (ledWallBackground !== 'none') {
    return {
      ok: true,
      passed: true,
      score: 2,
      feedback: 'Great job! The ".led-wall" class has a background image.',
    };
  }

  return {
    ok: true,
    passed: false,
    feedback: 'Make sure the ".led-wall" class has a background image.',
  };
});

// test for .react-calc class
edTest('should have a background image for the ".react-calc" class', () => {
  const reactCalc = document.querySelector('.react-calc');
  const reactCalcStyle = window.getComputedStyle(reactCalc);
  const reactCalcBackground = reactCalcStyle.getPropertyValue('background-image');

  if (reactCalcBackground !== 'none') {
    return {
      ok: true,
      passed: true,
      score: 2,
      feedback: 'Great job! The ".react-calc" class has a background image.',
    };
  }

  return {
    ok: true,
    passed: false,
    feedback: 'Make sure the ".react-calc" class has a background image.',
  };
});

// test for .pastel-puzzles class
edTest('should have a background image for the ".pastel-puzzles" class', () => {
  const pastelPuzzles = document.querySelector('.pastel-puzzles');
  const pastelPuzzlesStyle = window.getComputedStyle(pastelPuzzles);
  const pastelPuzzlesBackground = pastelPuzzlesStyle.getPropertyValue('background-image');

  if (pastelPuzzlesBackground !== 'none') {
    return {
      ok: true,
      passed: true,
      score: 2,
      feedback: 'Great job! The ".pastel-puzzles" class has a background image.',
    };
  }

  return {
    ok: true,
    passed: false,
    feedback: 'Make sure the ".pastel-puzzles" class has a background image.',
  };
});

// test for .surf-report class
edTest('should have a background image for the ".surf-report" class', () => {
  const surfReport = document.querySelector('.surf-report');
  const surfReportStyle = window.getComputedStyle(surfReport);
  const surfReportBackground = surfReportStyle.getPropertyValue('background-image');

  if (surfReportBackground !== 'none') {
    return {
      ok: true,
      passed: true,
      score: 2,
      feedback: 'Great job! The ".surf-report" class has a background image.',
    };
  }

  return {
    ok: true,
    passed: false,
    feedback: 'Make sure the ".surf-report" class has a background image.',
  };
});
