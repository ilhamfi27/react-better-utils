# React Better Utils

[![Test and Build Workflow](https://github.com/ilhamfi27/react-better-utils/actions/workflows/test-and-build.yml/badge.svg)](https://github.com/ilhamfi27/react-better-utils/actions/workflows/test-and-build.yml)

[![NPM](https://nodei.co/npm/react-better-utils.png?compact=true)](https://www.npmjs.com/package/react-better-utils)

This is a ReactJS library to help you have a better, clean and readable code when it comes to iterating and conditioning things in your `JSX` or `TSX` file.

## Table of Contents

- [Usage](#usage)
  - [Show Util](#show-util)
  - [Each Util](#each-util)
- [Installation](#installation)
- [API Reference](#api-reference)
  - [Show](#show)
  - [Show.When](#showwhen)
  - [Show.Else](#showelse)
  - [Each](#each)
  - [render Parameters on Each Component](#render-parameters-on-each-component)
- [Development](#development)
  - [Running Locally](#running-locally)
  - [Testing](#testing)
- [Contributing](#contributing)

## Usage

### Show Util

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
import { Show } from 'react-better-utils';

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

### Each Util

Iterating in React are simple, we add iteration from an array and then render it. Like below:

```tsx
import React from 'react';

const items = ['Apple', 'Banana', 'Cherry'];

const WithoutEach = () => {
  return (
    <div>
      <h2>Without Each</h2>
      {items.map((item, index) => (
        <div key={index} className="item">
          {index + 1}. {item}
        </div>
      ))}
    </div>
  );
};

export default WithoutEach;
```

Using `Each` component from `react-better-utils` will make iteration inside your code more readable, cleaner, and more maintainable

```tsx
import React from 'react';
import { Each } from 'react-better-utils';

const items = ['Apple', 'Banana', 'Cherry'];

const WithEach = () => {
  return (
    <div>
      <h2>With Each</h2>
      <Each
        of={items}
        render={({ item, index }) => (
          <div key={index} className="item">
            {index + 1}. {item}
          </div>
        )}
      />
    </div>
  );
};

export default WithEach;
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

### `Each`

Iteration renderer for array object.
Prop | Type | Description
--- | --- | ---
`of` | object | Data that will be rendered.
`render` | Callback Function | Render anything inside the callback function.

### `render` Parameters on `Each` Component

`render` Callback Function params.
Prop | Type | Description
--- | --- | ---
`item` | object | Single data item to be rendered.
`index` | number | Index number of data.

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
