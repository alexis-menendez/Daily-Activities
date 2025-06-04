// test css of elements

// check that header has a background color #2a607c
edTest('Header should have a background color of #2a607c', () => {
    const header = document.querySelector('header');
    const headerStyles = getComputedStyle(header);
    const headerBackgroundColor = headerStyles.backgroundColor;
  
    if(headerBackgroundColor === 'rgb(42, 96, 124)') {
        return {
            ok: true,
            passed: true,
            score: 4,
            feedback: "Great job, the header has the correct background color!"
        };
    }
    return {
        ok: true,
        passed: false,
        feedback: "The header does not have the correct background color!"
    }
  });
  
  // check that header has the text color #ffffff
  edTest('Header should have the text color #ffffff', () => {
    const header = document.querySelector('header');
    const headerStyles = getComputedStyle(header);
    const headerColor = headerStyles.color;
  
    if(headerColor === 'rgb(255, 255, 255)') {
        return {
            ok: true,
            passed: true,
            score: 4,
            feedback: "Great job, the header has the correct text color!"
        };
    }
    return {
        ok: true,
        passed: false,
        feedback: "The header does not have the correct text color!"
    }
  });
  
  // check that the first image has a height of 200px
  edTest('First image should have a height of 200px', () => {
    const images = document.querySelectorAll('img');
    const img1Height = images[0].height;
  
    if(img1Height === 200) {
        return {
            ok: true,
            passed: true,
            score: 4,
            feedback: "Great job, the first image has the correct height!"
        };
    }
    return {
        ok: true,
        passed: false,
        feedback: "The first image does not have the correct height!"
    }
  });
  
  // check that the second image has a height of 200px
  edTest('Second image should have a height of 200px', () => {
    const images = document.querySelectorAll('img');
    const img1Height = images[1].height;
  
    if(img1Height === 200) {
        return {
            ok: true,
            passed: true,
            score: 4,
            feedback: "Great job, the second image has the correct height!"
        };
    }
    return {
        ok: true,
        passed: false,
        feedback: "The second image does not have the correct height!"
    }
  });
  
  // check that the third image has a height of 200px
  edTest('Third image should have a height of 200px', () => {
    const images = document.querySelectorAll('img');
    const img1Height = images[2].height;
  
    if(img1Height === 200) {
        return {
            ok: true,
            passed: true,
            score: 4,
            feedback: "Great job, the third image has the correct height!"
        };
    }
    return {
        ok: true,
        passed: false,
        feedback: "The third image does not have the correct height!"
    }
  });
  
  // check that the fourth image has a height of 150px
  edTest('Fourth image should have a height of 150px', () => {
    const images = document.querySelectorAll('img');
    const img1Height = images[3].height;
  
    if(img1Height === 150) {
        return {
            ok: true,
            passed: true,
            score: 4,
            feedback: "Great job, the fourth image has the correct height!"
        };
    }
    return {
        ok: true,
        passed: false,
        feedback: "The fourth image does not have the correct height!"
    }
  });
  
  // check that the fifth image has a height of 150px
  edTest('Fifth image should have a height of 150px', () => {
    const images = document.querySelectorAll('img');
    const img1Height = images[4].height;
  
    if(img1Height === 150) {
        return {
            ok: true,
            passed: true,
            score: 4,
            feedback: "Great job, the fifth image has the correct height!"
        };
    }
    return {
        ok: true,
        passed: false,
        feedback: "The fifth image does not have the correct height!"
    }
  });
  
  // check that the sixth image has a height of 150px
  edTest('Sixth image should have a height of 150px', () => {
    const images = document.querySelectorAll('img');
    const img1Height = images[5].height;
  
    if(img1Height === 150) {
        return {
            ok: true,
            passed: true,
            score: 4,
            feedback: "Great job, the sixth image has the correct height!"
        };
    }
    return {
        ok: true,
        passed: false,
        feedback: "The sixth image does not have the correct height!"
    }
  });
  
  // check that the footer has 30px padding
  edTest('Footer should have 30px padding', () => {
    const footer = document.querySelector('footer');
    const footerStyles = getComputedStyle(footer);
    const footerPadding = footerStyles.padding;
  
    if(footerPadding === '30px') {
        return {
            ok: true,
            passed: true,
            score: 4,
            feedback: "Great job, the footer has the correct padding!"
        };
    }
    return {
        ok: true,
        passed: false,
        feedback: "The footer does not have the correct padding!"
    }
  });
  
  // check that the footer text is centered
  edTest('Footer text should be centered', () => {
    const footer = document.querySelector('footer');
    const footerStyles = getComputedStyle(footer);
    const footerTextAlign = footerStyles.textAlign;
  
    if(footerTextAlign === 'center') {
        return {
            ok: true,
            passed: true,
            score: 4,
            feedback: "Great job, the footer has the correct text alignment!"
        };
    }
    return {
        ok: true,
        passed: false,
        feedback: "The footer does not have the correct text alignment!"
    }
  });
  