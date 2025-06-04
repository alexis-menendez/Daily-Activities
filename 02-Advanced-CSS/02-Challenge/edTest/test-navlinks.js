// check for navigation links
// check that a navigation link exists for each section with an id
edTest('Should have a navigation link for each section with an id', () => {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('nav a');
  const navLinkHrefs = new Set();
  navLinks.forEach((link) => {
    navLinkHrefs.add(link.getAttribute('href'));
  });

  const missingLinks = [];
  sections.forEach((section) => {
    const id = section.getAttribute('id');
    if (!navLinkHrefs.has(`#${id}`)) {
      missingLinks.push(id);
    }
  });

  if (missingLinks.length == 0) {
    return {
      ok: true,
      passed: true,
      score: 10,
      feedback:
        'Great job, you have a nav link for each section element with an id!',
    };
  }
  return {
    ok: true,
    passed: false,
    feedback: 'Not all section elements with an id have a nav link!',
  };
});
