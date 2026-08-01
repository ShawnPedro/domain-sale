import { useState } from 'react';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [usernameFocused, setUsernameFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  // Email validation
  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // Validate username/email field
  const validateUsername = (value) => {
    if (!value.trim()) {
      return isLogin
        ? 'Please enter your email or customer number.'
        : 'Please enter your email address.';
    }

    // Sign Up: Must be a valid email
    if (!isLogin && !isValidEmail(value)) {
      return 'Please enter a valid email address.';
    }

    // Log In: Accept email OR customer number
    if (isLogin) {
      const isEmail = isValidEmail(value);

      // Adjust this regex if your customer number has a specific format
      const isCustomerNumber = /^[0-9]+$/.test(value);

      if (!isEmail && !isCustomerNumber) {
        return 'Please enter a valid email address or customer number.';
      }
    }

    return '';
  };

  // Validate password
  const validatePassword = (value) => {
    if (!value) {
      return 'Please enter your password.';
    }

    if (value.length < 8) {
      return 'Password must be at least 8 characters.';
    }

    return '';
  };

  // Handle username input
  const handleUsernameChange = (e) => {
    const value = e.target.value;
    setUsername(value);

    // Clear error once input becomes valid
    if (usernameError) {
      setUsernameError(validateUsername(value));
    }
  };

  // Handle password input
  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);

    // Clear error once input becomes valid
    if (passwordError) {
      setPasswordError(validatePassword(value));
    }
  };

  // Validate username when user leaves the field
  const handleUsernameBlur = () => {
    setUsernameFocused(false);
    setUsernameError(validateUsername(username));
  };

  // Validate password when user leaves the field
  const handlePasswordBlur = () => {
    setPasswordFocused(false);
    setPasswordError(validatePassword(password));
  };

  const handleToggle = (loginMode) => {
    // Clear both fields
    setUsername('');
    setPassword('');

    // Clear validation errors
    setUsernameError('');
    setPasswordError('');

    // Reset password visibility
    setShowPassword(false);

    // Change between Sign Up and Log In
    setIsLogin(loginMode);
  };

  return (
    <div className="w-full max-w-[700px] border border-gray-300 rounded-md p-3 md:p-4">
      <h2 className="text-lg font-semibold">
        {isLogin ? 'Enter your details' : 'Create an account'}
      </h2>

      <h3 className="text-sm mb-4">
        {isLogin ? (
          <>
            <span className="text-gray-600">Don't have an account?</span>{' '}
            <span
              onClick={() => handleToggle(false)}
              className="text-teal-600 hover:text-teal-700 font-semibold cursor-pointer"
            >
              Sign Up
            </span>
          </>
        ) : (
          <>
            <span className="text-gray-600">Have an account?</span>{' '}
            <span
              onClick={() => handleToggle(true)}
              className="text-teal-600 hover:text-teal-700 font-semibold cursor-pointer"
            >
              Log In
            </span>
          </>
        )}
      </h3>

      <div className="flex flex-col md:flex-row md:justify-between gap-2">

        {/* Username / Email Field */}
        <div className="relative w-full">
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
            onFocus={() => setUsernameFocused(true)}
            onBlur={handleUsernameBlur}
            className={`w-full border px-3 py-4 outline-none transition-all duration-150 hover:border-black focus:border-black ${
              usernameError
                ? 'border-red-500'
                : 'border-gray-300'
            }`}
          />

          <label
            className={`absolute left-4 transition-all duration-200 pointer-events-none ${
              usernameFocused || username
                ? 'top-0 -translate-y-1/2 bg-white px-1 text-sm text-gray-700'
                : 'top-1/2 -translate-y-1/2 text-sm text-gray-600'
            }`}
          >
            {isLogin ? 'Email or Customer #' : 'Email'}{' '}
            <span className="text-red-600">*</span>
          </label>

          {/* Username Error */}
          {usernameError && (
            <p className="text-red-500 text-xs mt-1">
              {usernameError}
            </p>
          )}
        </div>

        {/* Password Field */}
        <div className="relative w-full">
          <input
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={handlePasswordChange}
            onFocus={() => setPasswordFocused(true)}
            onBlur={handlePasswordBlur}
            className={`w-full border px-3 py-4 outline-none transition-all duration-150 hover:border-black focus:border-black ${
              passwordError
                ? 'border-red-500'
                : 'border-gray-300'
            }`}
          />

          <label
            className={`absolute left-4 transition-all duration-200 pointer-events-none ${
              passwordFocused || password
                ? 'top-0 -translate-y-1/2 bg-white px-1 text-sm text-gray-700'
                : 'top-1/2 -translate-y-1/2 text-sm text-gray-600'
            }`}
          >
            Password <span className="text-red-600">*</span>
          </label>

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-teal-600 font-semibold border-b-2 border-teal-600 hover:text-teal-700"
          >
            {showPassword ? 'Hide' : 'Show'}
          </button>

          {/* Password Error */}
          {passwordError && (
            <p className="text-red-500 text-xs mt-1">
              {passwordError}
            </p>
          )}
        </div>

      </div>
    </div>
  );
};

export default SignIn;