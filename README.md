# React Better Utils

[![Test and Build Workflow](https://github.com/ilhamfi27/react-better-utils/actions/workflows/test-and-build.yml/badge.svg)](https://github.com/ilhamfi27/react-better-utils/actions/workflows/test-and-build.yml)

This is a ReactJS library to help you have a better, clean and readable code when it comes to iterating and conditioning things in your `JSX` or `TSX` file.

## Usage

See this code. With more than one condition that need to be handled, it barely readable right? It also less maintainable if we need to add condition.

```tsx
import React from 'react';

const UserDashboard = ({
  user,
}: {
  user: { status: string; name: string };
}) => {
  return (
    <div className="dashboard">
      <h1>Welcome, {user.name}!</h1>
      {user.status === 'active' ? (
        <p className="text-green-600">
          Your account is active. Enjoy the services!
        </p>
      ) : user.status === 'pending' ? (
        <p className="text-green-600">
          Your account is pending approval. Please wait for confirmation.
        </p>
      ) : user.status === 'suspended' ? (
        <p className="text-green-600">
          Your account is suspended. Please contact support to resolve the
          issue.
        </p>
      ) : (
        <p className="text-gray-600">
          We couldn't determine your account status. Please refresh the page.
        </p>
      )}
    </div>
  );
};

export default UserDashboard;
```

But if you use `react-better-utils`, you can organize your code better and with this handler, your code will be more maintainable when you need to add more condition.

```tsx
import React from 'react';
import { Show } from 'react-better-utils'; // Replace with your actual library name

const UserDashboard = ({
  user,
}: {
  user: { status: string; name: string };
}) => {
  return (
    <div className="dashboard">
      <h1>Welcome, {user.name}!</h1>

      <Show>
        {/* Show content for active users */}
        <Show.When isTrue={user.status === 'active'}>
          <p className="text-green-600">
            Your account is active. Enjoy the services!
          </p>
        </Show.When>

        {/* Show content for pending users */}
        <Show.When isTrue={user.status === 'pending'}>
          <p className="text-yellow-500">
            Your account is pending approval. Please wait for confirmation.
          </p>
        </Show.When>

        {/* Show content for suspended users */}
        <Show.When isTrue={user.status === 'suspended'}>
          <p className="text-red-600">
            Your account is suspended. Please contact support to resolve the
            issue.
          </p>
        </Show.When>

        {/* Default message for undefined status */}
        <Show.Else>
          <p className="text-gray-600">
            We couldn't determine your account status. Please refresh the page.
          </p>
        </Show.Else>
      </Show>
    </div>
  );
};

export default UserDashboard;
```

## Installation

Install the Show component from npm, it's inside `react-better-utils` dependency:

```bash
npm install react-better-utils
```

or if you use yarn

```bash
yarn add react-better-utils
```

## API Reference

### `Show`

The main wrapper component that evaluates the conditions.
Prop | Type | Description
--- | --- | ---
`children` | ReactNode | Contains `Show.When` and/or `Show.Else`.

### `Show.When`

Used for conditional rendering when the condition is `true`.
Prop | Type | Description
--- | --- | ---
`isTrue` | boolean | The condition to evaluate.
`children` | ReactNode | Content to render if condition passes.

### `Show.Else`

Fallback rendering when none of the Show.When conditions are satisfied.
Prop | Type | Description
--- | --- | ---
`render` | boolean | Optional additional render condition.
`children` | ReactNode | Contains `Show.When` and/or `Show.Else`.

## Development

### Running Locally

Clone the repository and install dependencies:

```bash
git clone https://github.com/ilhamfi27/react-better-utils
cd react-better-utils
yarn
```

### Testing

Run tests to ensure everything works as expected:

```bash
npm test
```

## Contributing

Contributions are welcome! Please submit a pull request or open an issue if you encounter a problem.
