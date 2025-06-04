// check that the title element is altered
edTest('Should have altered the title element', () => {
    const title = document.querySelector('title');
    if(title.textContent !== "website") {
        return {
            ok: true,
            passed: true,
            score: 6,
            feedback: "Great job, you have altered the title element!"
        };
    }
    return {
        ok: true,
        passed: false,
        feedback: "The title element is not altered!"
    }
  });
  