import { type FormEvent, useState, type ChangeEvent } from 'react';
import { useMutation } from '@apollo/client';

import { ADD_PROFILE } from '../../utils/mutations';
import { QUERY_PROFILES } from '../../utils/queries';

const ProfileForm = () => {
  // ! Update the state object to a more general name and include the new fields.
  const [formState, setFormState] = useState({
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    zipCode: ''
  });

  const [addProfile, { error }] = useMutation(ADD_PROFILE, {
    refetchQueries: [
      QUERY_PROFILES,
      'allProfiles'
    ]
  });


  const handleFormSubmit = async (event: FormEvent) => {
    event.preventDefault();

    try {
      console.log('formState:', formState)

      // ! Important for input types: We need to update the mutation to pass the profileInput object.
      await addProfile({
        variables: { profileInput: { ...formState } },
      });

      // Clear form values
      setFormState({
        username: '',
        firstName: '',
        lastName: '',
        email: '',
        zipCode: ''
      });
    } catch (err: any) {
      console.error('Error adding profile:', err.message);
    }
  };

  // ! When adding more fields to the Profile type, we create a new handleChange function that each input field can use.
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  }

  return (
    <div>
      <h3>Add yourself to the list...</h3>
      <form
        className="flex-row justify-center justify-space-between-md align-center"
        onSubmit={handleFormSubmit}
      >
        <div className="col-12 col-lg-9">
          <input
          // ? We add a name attribute to each input field that matches the key in the formState object. This allows us to use the same handleChange function for all input fields.
            name="username"
            placeholder="Add your profile username..."
            value={formState.username}
            className="form-input w-100"
            onChange={handleChange}
          />
        </div>
        <div className="col-12 col-lg-9">
          <input
            name="firstName"
            placeholder="Add your First Name..."
            value={formState.firstName}
            className="form-input w-100"
            onChange={handleChange}
          />
        </div>
        <div className="col-12 col-lg-9">
          <input
            name="lastName"
            placeholder="Add your Last Name..."
            value={formState.lastName}
            className="form-input w-100"
            onChange={handleChange}
          />
        </div>
        <div className="col-12 col-lg-9">
          <input
            name="email"
            placeholder="Add your Email..."
            value={formState.email}
            className="form-input w-100"
            onChange={handleChange}
          />
        </div>
        <div className="col-12 col-lg-9">
          <input
            name="zipCode"
            placeholder="Add your Zip Code..."
            value={formState.zipCode}
            className="form-input w-100"
            onChange={handleChange}
          />
        </div>

        <div className="col-12 col-lg-3">
          <button className="btn btn-info btn-block py-3" type="submit">
            Add Profile
          </button>
        </div>
        {error && (
          <div className="col-12 my-3 bg-danger text-white p-3">
            Something went wrong...
          </div>
        )}
      </form>
    </div>
  );
};

export default ProfileForm;
