import { Switch } from '@nextui-org/react';
import { IoMoon } from 'react-icons/io5';
import { FaSun } from 'react-icons/fa6';
import { useStore } from '../../hook/store.context';

export function SwitchTheme() {
  const { setTheme, theme } = useStore();
  const changeValue = (e) => {
    localStorage.setItem('theme', e);
    setTheme(e);
  };

  return (
    <div className="fixed bottom-3 right-3 z-50">
      <Switch
        isSelected={theme}
        size="lg"
        color="primary"
        startContent={<FaSun />}
        endContent={<IoMoon />}
        onValueChange={changeValue}
      ></Switch>
    </div>
  );
}
