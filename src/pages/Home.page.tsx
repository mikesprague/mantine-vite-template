import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from '../components/Welcome/Welcome';

export const HomePage = () => {
  return (
    <>
      <Welcome />
      <ColorSchemeToggle />
    </>
  );
};
