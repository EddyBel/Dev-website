import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  Button,
  NavbarMenuItem,
  Divider,
} from '@nextui-org/react';
import { AvatarCard } from '../@common/avatar-cards';
import { FaHouse } from 'react-icons/fa6';
import { FaNetworkWired } from 'react-icons/fa6';
import { IoDocumentText } from 'react-icons/io5';
import {
  SOURCE_CV,
  URL_GITHUB,
  URL_LINKEDIN,
  USERNAME,
  USERNAME_PROFILE,
  USER_AVATAR,
  USER_DESCRIPTION,
  USER_HASHTAG,
  USER_POSITION,
  USER_STATUS,
} from '../../constants/information';
// import { Navigation } from '../../web.config.json';

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="animation-navbar">
      <NavbarContent>
        <NavbarMenuToggle aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} className="sm:hidden" />
        <NavbarBrand>
          <AvatarCard
            img={USER_AVATAR}
            name={USERNAME}
            userProfile={USERNAME_PROFILE}
            position={USER_POSITION}
            status={USER_STATUS}
            hashtag={USER_HASHTAG}
            description={USER_DESCRIPTION}
            github={URL_GITHUB}
            linkedin={URL_LINKEDIN}
            key={`avatar-card-eddybel`}
          />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Button
            color="foreground"
            className="hover:bg-white hover:text-neutral-950 text-white py-1 px-2 rounded-3xl transition-colors duration-150 sulphur-point-bold"
            to={'/home'}
            as={Link}
          >
            Inicio
          </Button>
        </NavbarItem>
        {/* <DropdownNavbar
          label="Blog"
          customClassName="hover:bg-white hover:text-neutral-950 rounded-3xl transition-colors duration-150 sulphur-point-bold"
          items={[
            // {
            //   label: 'Ultimos articulos',
            //   icon: <GrFavorite className="text-3xl text-danger" />,
            //   description: 'Articulos destacados y recientes.',
            //   route: '/home/blog',
            // },
            {
              label: 'Articulos',
              icon: <FiBookOpen className="text-3xl text-warning" />,
              description: 'Articulos y tutoriales.',
              route: '/home/blog/posts',
            },
            {
              label: 'Código',
              icon: <FaCodepen className="text-3xl text-primary" />,
              description: 'Snippets o atajos de programación.',
              route: '/home/blog/snippets',
            },
            {
              label: 'Notas de Universidad',
              icon: <FiBook className="text-3xl text-secondary" />,
              description: 'Apuntes de la universidad.',
              route: '/home/blog/notes',
            },
          ]}
        /> */}
        <NavbarItem>
          <Button
            color="foreground"
            className="hover:bg-white hover:text-neutral-950 text-white py-1 px-2 rounded-3xl transition-colors duration-150 sulphur-point-bold"
            as={Link}
            to="/works"
          >
            Proyectos
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={Link}
            color="primary"
            to={SOURCE_CV}
            variant="flat"
            className="text-md font-bold"
            startContent={<IoDocumentText className="text-xl" />}
            target="_blank"
            rel="noopener noreferrer"
          >
            CV
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="pt-6">
        <NavbarMenuItem className="flex items-center gap-2 my-2">
          <FaHouse className="text-3xl text-success" />
          <Link color="foreground" className="w-full" to="/home" size="lg">
            Inicio
          </Link>
        </NavbarMenuItem>
        <Divider />
        {/* <NavbarMenuItem className="flex items-center gap-2 my-2">
          <GrFavorite className="text-3xl text-danger" />
          <Link color="foreground" className="w-full" href="/home/blog" size="lg">
            Blog
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem className="pl-3 flex items-center gap-2">
          <FiBookOpen className="text-3xl text-warning" />
          <Link color="foreground" className="w-full" href="/home/blog/posts" size="lg">
            Posts
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem className="pl-3 flex items-center gap-2">
          <FaCodepen className="text-3xl text-primary" />
          <Link color="foreground" className="w-full" href="/home/blog/snippets" size="lg">
            Snippets
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem className="pl-3 flex items-center gap-2">
          <FiBook className="text-3xl text-secondary" />
          <Link color="foreground" className="w-full" href="/home/blog/notes" size="lg">
            Notes
          </Link>
        </NavbarMenuItem> */}
        {/* <Divider /> */}
        <NavbarMenuItem className="flex items-center gap-2 my-2">
          <FaNetworkWired className="text-3xl text-primary" />
          <Link color="foreground" className="w-full" to="/works" size="lg">
            Proyectos
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
