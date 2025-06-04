// check alt text on  images
// check for alt text in first image
edTest('First image should have alt text', () => {
    const images = document.querySelectorAll('img');
    const imgAlt = images[0].getAttribute('alt');
    
    if(imgAlt && imgAlt.length > 0) {
            return {
                ok: true,
                passed: true,
                score: 2,
                feedback: "Great job, the first image has alt text."
            };
        }
        return {
            ok: true,
            passed: false,
            feedback: "The first image is missing alt text!"
        }
  });
  
  // check for alt text in the second image
  edTest('Second image should have alt text', () => {
    const images = document.querySelectorAll('img');
    const imgAlt = images[1].getAttribute('alt');
    
    if(imgAlt && imgAlt.length > 0) {
            return {
                ok: true,
                passed: true,
                score: 2,
                feedback: "Great job, the second image has alt text."
            };
        }
        return {
            ok: true,
            passed: false,
            feedback: "The second image is missing alt text!"
        }
  });
  
  // check for alt text in the third image
  edTest('Third image should have alt text', () => {
    const images = document.querySelectorAll('img');
    const imgAlt = images[2].getAttribute('alt');
    
    if(imgAlt && imgAlt.length > 0) {
            return {
                ok: true,
                passed: true,
                score: 2,
                feedback: "Great job, the third image has alt text."
            };
        }
        return {
            ok: true,
            passed: false,
            feedback: "The third image is missing alt text!"
        }
  });
  
  // check for alt text in the fourth image
  edTest('Fourth image should have alt text', () => {
    const images = document.querySelectorAll('img');
    const imgAlt = images[3].getAttribute('alt');
    
    if(imgAlt && imgAlt.length > 0) {
            return {
                ok: true,
                passed: true,
                score: 2,
                feedback: "Great job, the fourth image has alt text."
            };
        }
        return {
            ok: true,
            passed: false,
            feedback: "The fourth image is missing alt text!"
        }
  });
  
  // check for alt text in the fifth image
  edTest('Fifth image should have alt text', () => {
    const images = document.querySelectorAll('img');
    const imgAlt = images[4].getAttribute('alt');
    
    if(imgAlt && imgAlt.length > 0) {
            return {
                ok: true,
                passed: true,
                score: 2,
                feedback: "Great job, the fifth image has alt text."
            };
        }
        return {
            ok: true,
            passed: false,
            feedback: "The fifth image is missing alt text!"
        }
  });
  
  // check for alt text in the sixth image
  edTest('Sixth image should have alt text', () => {
    const images = document.querySelectorAll('img');
    const imgAlt = images[5].getAttribute('alt');
    
    if(imgAlt && imgAlt.length > 0) {
            return {
                ok: true,
                passed: true,
                score: 2,
                feedback: "Great job, the sixth image has alt text."
            };
        }
        return {
            ok: true,
            passed: false,
            feedback: "The sixth image is missing alt text!"
        }
  });
  