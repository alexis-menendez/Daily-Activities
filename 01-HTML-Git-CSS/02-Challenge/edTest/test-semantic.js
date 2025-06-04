// check for semantic elements
// check for header
edTest('Should have a header element', () => {
    const header = document.querySelector('header');
    if(header) {
        return {
            ok: true,
            passed: true,
            score: 7,
            feedback: "Great job, you have a header element!"
        };
    }
    return {
        ok: true,
        passed: false,
        feedback: "No header element found!"
    }
  });
  
  // check for nav
  edTest('Should have a nav element', () => {
    const nav = document.querySelector('nav');
    if(nav) {
        return {
            ok: true,
            passed: true,
            score: 7,
            feedback: "Great job, you have a nav element!"
        };
    }
    return {
        ok: true,
        passed: false,
        feedback: "No nav element found!"
    }
  });
  
  // check for main
  edTest('Should have a main element', () => {
    const main = document.querySelector('main');
    if(main) {
        return {
            ok: true,
            passed: true,
            score: 7,
            feedback: "Great job, you have a main element!"
        };
    }
    return {
        ok: true,
        passed: false,
        feedback: "No main element found!"
    }
  });
  
  // check for more than one section
  edTest('Should have more than one section element', () => {
    const sections = document.querySelectorAll('section');
    if(sections.length > 1) {
        return {
            ok: true,
            passed: true,
            score: 7,
            feedback: "Great job, you have more than one section element!"
        };
    }
    return {
        ok: true,
        passed: false,
        feedback: "No section elements found!"
    }
  });
  
  // check for aside
  edTest('Should have an aside element', () => {
    const aside = document.querySelector('aside');
    if(aside) {
        return {
            ok: true,
            passed: true,
            score: 7,
            feedback: "Great job, you have an aside element!"
        };
    }
    return {
        ok: true,
        passed: false,
        feedback: "No aside element found!"
    }
  });
  
  // check for footer
  edTest('Should have a footer element', () => {
    const footer = document.querySelector('footer');
    if(footer) {
        return {
            ok: true,
            passed: true,
            score: 7,
            feedback: "Great job, you have a footer element!"
        };
    }
    return {
        ok: true,
        passed: false,
        feedback: "No footer element found!"
    }
  });
  