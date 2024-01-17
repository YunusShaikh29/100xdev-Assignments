// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import { UserCard } from './components/UserCard';

export default function App() {
  return <MantineProvider>
    <UserCard />
  </MantineProvider>;
}