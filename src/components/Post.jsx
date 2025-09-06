// ✅ AFTER: The clean, scalable component
// 1. Define the initial state
const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  isSubscribed: false,
  theme: 'light',
};

// 2. Create a reducer function to handle all state updates
function formReducer(state, action) {
  switch (action.type) {
    case 'UPDATE_FIELD':
      // A single handler for all text/select inputs
      return {
        ...state,
        [action.field]: action.value,
      };
    case 'TOGGLE_BOOLEAN':
      // A handler for checkboxes
      return {
        ...state,
        [action.field]: !state[action.field],
      };
    case 'RESET_FORM':
      // Easy to add complex actions, like a reset
      return initialState;
    default:
      return state;
  }
}

function CleanUserProfile() {
  // 3. useReducer returns the current state and a dispatch function
  const [formState, dispatch] = useReducer(formReducer, initialState);

  // 4. Generic change handler for most inputs
  const handleInputChange = (field, value) => {
    dispatch({ type: 'UPDATE_FIELD', field, value });
  };

  // 5. Generic handler for checkboxes
  const handleCheckboxChange = (field) => {
    dispatch({ type: 'TOGGLE_BOOLEAN', field });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Our state is already a single, cohesive object - perfect for the API call!
    api.updateUserProfile(formState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={formState.firstName}
        onChange={(e) => handleInputChange('firstName', e.target.value)}
      />
      <input
        type="text"
        value={formState.lastName}
        onChange={(e) => handleInputChange('lastName', e.target.value)}
      />
      <input
        type="email"
        value={formState.email}
        onChange={(e) => handleInputChange('email', e.target.value)}
      />
      <label>
        <input
          type="checkbox"
          checked={formState.isSubscribed}
          onChange={() => handleCheckboxChange('isSubscribed')}
        />
        Subscribe
      </label>
      <select
        value={formState.theme}
        onChange={(e) => handleInputChange('theme', e.target.value)}
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
      <button type="submit">Save</button>
    </form>
  );
}