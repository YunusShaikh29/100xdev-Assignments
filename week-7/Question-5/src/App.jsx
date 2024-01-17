// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import { UserCard } from './components/UserCard';
import Input from './components/Input';

export default function App() {
  return <MantineProvider>
    <div style={{width: "100vw", display: "flex", justifyContent: "center", alignItems: "flex-start", height: "100vh", backgroundColor: 'rgb(28, 27, 27)'}}>
    <Input />
    </div>
    {/* <UserCard /> */}
  </MantineProvider>;
}