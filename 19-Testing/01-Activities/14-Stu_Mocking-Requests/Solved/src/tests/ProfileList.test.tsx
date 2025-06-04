import { render, screen, waitFor } from '@testing-library/react';
import ProfileList from '../components/ProfileList';

describe('ProfileList', () => {
  it('should render a profile card for each user retrieved', async () => {
    // Render the ProfileList component which will fetch users in the useEffect hook
    render(<ProfileList />);
    // Wait for the ProfileList component to render and check that the first name in the mock data is displayed
    await waitFor(() => {
      expect(screen.getByText('John Doe')).not.toBeNull();
    });

    const profileCards = document.querySelectorAll('.profile-card');
    expect(profileCards.length).toBe(6);
  });

  it('should render profile cards with the correct data', async () => {
    // Render the ProfileList component which will fetch users in the useEffect hook
    render(<ProfileList />);
    // Wait for the ProfileList component to render and check that the first name in the mock data is displayed
    await waitFor(() => {
      expect(screen.getByText('John Doe')).not.toBeNull();
    });

    // Select all h2 elements to check that each user name is displayed
    const userNames = document.querySelectorAll('h2');

    // check that each user name is displayed
    expect(userNames[0].textContent).toBe('John Doe');
    expect(userNames[1].textContent).toBe('Jane Smith');
    expect(userNames[2].textContent).toBe('Joe Schmoe');
    expect(userNames[3].textContent).toBe('Tim Johnson');
    expect(userNames[4].textContent).toBe('Sally Johnson');
    expect(userNames[5].textContent).toBe('Bob Johnson');

    // Select all p elements to check that each user email is displayed
    const profileDetails = document.querySelectorAll('p');

    // check that each user email and phone number is displayed
    expect(profileDetails[0].textContent).toBe('john@doe.com');
    expect(profileDetails[1].textContent).toBe('123-456-7890');

    expect(profileDetails[2].textContent).toBe('jane@smith.com');
    expect(profileDetails[3].textContent).toBe('098-765-4321');

    expect(profileDetails[4].textContent).toBe('j@schmoe.com');
    expect(profileDetails[5].textContent).toBe('567-890-1234');

    expect(profileDetails[6].textContent).toBe('tj@johnson.com');
    expect(profileDetails[7].textContent).toBe('345-678-9012');

    expect(profileDetails[8].textContent).toBe('s@johnson.com');
    expect(profileDetails[9].textContent).toBe('234-567-8901');

    expect(profileDetails[10].textContent).toBe('b@johnson.com');
    expect(profileDetails[11].textContent).toBe('456-789-0123');
  });
});
