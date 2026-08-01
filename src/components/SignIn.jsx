import { useState } from 'react';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [usernameFocused, setUsernameFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const handleToggle = (loginMode) => {
    // Clear both fields
    setUsername('');
    setPassword('');

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
        {/* Username Field */}
        <div className="relative w-full">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onFocus={() => setUsernameFocused(true)}
            onBlur={() => setUsernameFocused(false)}
            className="w-full border border-gray-300 px-3 py-4 outline-none transition-all duration-150 hover:border hover:border-black"
          />
          <label
            className={`absolute left-4 transition-all duration-200 pointer-events-none ${
              usernameFocused || username
                ? 'top-0 -translate-y-1/2 bg-white px-1 text-sm text-gray-700'
                : 'top-1/2 -translate-y-1/2 text-sm text-gray-600'
            }`}
          >
            {isLogin ? 'Email or Customer #' : 'Email'} <span className="text-red-600">*</span>
          </label>
        </div>

        {/* Password Field */}
        <div className="relative w-full">
          <input
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onFocus={() => setPasswordFocused(true)}
            onBlur={() => setPasswordFocused(false)}
            className="w-full border border-gray-300 px-3 py-4 outline-none transition-all duration-150 hover:border hover:border-black"
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
        </div>
      </div>
    </div>
  );
};

export default SignIn;