const initializeLocalStorage = (hasData) => {
  const posts = readLocalStorage();
  if (!hasData) {
    return posts;
  }

  const formData = {
    username: 'test',
    title: 'test',
    content: 'test',
  };

  storeLocalStorage(formData);
  const newPosts = readLocalStorage();
  renderBlogList();
  return newPosts;
};

// Test if no blog posts are found, the page should display a message indicating that no blog posts are available.

edTest(
  'Should display a message indicating that no blog posts are available if no blog posts are found.',
  () => {
    const main = document.querySelector('main');
    const posts = initializeLocalStorage(false);

    if (main && main.innerHTML.includes('No Blog posts yet...')) {
      return {
        ok: true,
        passed: true,
        score: 10,
        feedback:
          'Great job! The page displays a message indicating that no blog posts are available!',
        expand_feedback: true,
        observed: `main.innerHTML: ${main.innerHTML}`,
      };
    }
    return {
      ok: true,
      passed: false,
      feedback:
        'The page does not display a message indicating that no blog posts are available!',
      expand_feedback: true,
      observed: `main.innerHTML: ${main.innerHTML}`,
    };
  }
);

// Test that the main content of the Blog Page is populated with blog posts pulled from localStorage.

edTest(
  'Should have a main element with a list of blog posts pulled from localStorage.',
  () => {
    const main = document.querySelector('main');

    main.innerHTML = '';
    const posts = initializeLocalStorage(true);

    if (main && main.innerHTML.includes(posts[0].username)) {
      return {
        ok: true,
        passed: true,
        score: 10,
        feedback:
          'Great job! You have a main element with a list of blog posts pulled from localStorage!',
        expand_feedback: true,
        observed: `main.innerHTML: ${main.innerHTML}`,
      };
    }
    return {
      ok: true,
      passed: false,
      feedback:
        'No main element found, or no blog posts pulled from localStorage!',
      expand_feedback: true,
      observed: `main.innerHTML: ${main.innerHTML}`,
    };
  }
);

// Test that a rendered blog entry includes the author's username, and the post's title and content.

edTest(
  "Should render a blog entry with the author's username, and the post's title and content.",
  () => {
    const main = document.querySelector('main');
    const posts = initializeLocalStorage(true);

    if (
      main &&
      posts.every(
        (post) =>
          main.innerHTML.includes(post.username) &&
          main.innerHTML.includes(post.title) &&
          main.innerHTML.includes(post.content)
      )
    ) {
      return {
        ok: true,
        passed: true,
        score: 10,
        feedback:
          "Great job! All blog entries include the author's username, and the post's title and content!",
        expand_feedback: true,
        observed: `main.innerHTML: ${main.innerHTML}`,
      };
    }
    return {
      ok: true,
      passed: false,
      feedback:
        "Not all blog entries include the author's username, and the post's title and content!",
      expand_feedback: true,
      observed: `main.innerHTML: ${main.innerHTML}`,
    };
  }
);

// Test that the "Back" button returns the user to the landing page.

edTest(
  'Should return the user to the landing page when the "Back" button is clicked.',
  () => {
    const backButton = document.querySelector('#back');

    backButton.dispatchEvent(new Event('click'));

    const redirected = redirectURL.includes('index.html');

    if (backButton && redirected) {
      return {
        ok: true,
        passed: true,
        score: 5,
        feedback:
          'Great job! The "Back" button returns the user to the landing page!',
        expand_feedback: true,
        observed: `redirectURL: ${redirectURL}`,
      };
    }
    return {
      ok: true,
      passed: false,
      feedback:
        'The "Back" button does not exist or does not return the user to the landing page!',
        expected: 'redirectURL should contain "blog.html"',
        observed: `redirectURL: ${redirectURL}`,
        expand_feedback: true,
    };
  }
);
