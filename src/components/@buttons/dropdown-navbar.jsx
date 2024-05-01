import { Dropdown, NavbarItem, DropdownTrigger, Button, DropdownMenu, DropdownItem } from '@nextui-org/react';
import { IoIosArrowDown } from 'react-icons/io';

export function DropdownNavbar({ items, label, customClassName }) {
  items = items ?? [];

  return (
    <Dropdown>
      <NavbarItem>
        <DropdownTrigger>
          <Button
            disableRipple
            endContent={<IoIosArrowDown />}
            radius="sm"
            variant="light"
            color="foreground"
            className={customClassName ?? 'p-0 bg-transparent data-[hover=true]:bg-transparent hover:text-blue-400'}
          >
            {label}
          </Button>
        </DropdownTrigger>
      </NavbarItem>
      <DropdownMenu
        aria-label="ACME features"
        className="w-[340px]"
        itemClasses={{
          base: 'gap-4',
        }}
      >
        {items?.map((item) => (
          <DropdownItem href={item.route} key={`${item.label}`} description={item.description} startContent={item.icon}>
            {item.label}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}
