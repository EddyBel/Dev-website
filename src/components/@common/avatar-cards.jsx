import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  User,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Avatar,
  Chip,
} from '@nextui-org/react';
import { ImLinkedin2 } from 'react-icons/im';
import { IoLogoGithub } from 'react-icons/io';
import { Link } from 'react-router-dom';
// import { useState } from 'react';

export function AvatarCard({ img, name, description, userProfile, position, hashtag, status, github, linkedin }) {
  //   const [isFollowed, setIsFollowed] = useState(false);

  return (
    <Popover showArrow placement="bottom" backdrop="blur">
      <PopoverTrigger>
        <User
          as="button"
          name={name}
          description={position}
          className="transition-transform"
          avatarProps={{
            className: 'mr-1',
            isBordered: true,
            src: img,
            color: status ? 'success' : 'secondary',
          }}
        />
      </PopoverTrigger>
      <PopoverContent className="p-1">
        <Card className="max-w-[340px]">
          <CardHeader className="justify-between">
            <div className="flex gap-5">
              <Avatar isBordered color={status ? 'success' : 'secondary'} radius="full" size="md" src={img} />
              <div className="flex flex-col gap-1 items-start justify-center">
                <h4 className="text-small font-semibold leading-none text-default-600">{name}</h4>
                <h5 className="text-small tracking-tight text-default-400">{userProfile}</h5>
              </div>
            </div>
            <div className="flex gap-1">
              <Link to={github} target="_blank" rel="noopener noreferrer">
                <Button isIconOnly color="default" aria-label="Github" variant="ghost" size="sm">
                  <IoLogoGithub className="text-xl" />
                </Button>
              </Link>
              <Link to={linkedin} target="_blank" rel="noopener noreferrer">
                <Button isIconOnly color="primary" aria-label="Linkedin" variant="ghost" size="sm">
                  <ImLinkedin2 className="text-xl" />
                </Button>
              </Link>
            </div>
          </CardHeader>
          <CardBody className="px-3 py-0 text-small text-default-400">
            <p>{description}</p>
            <span className="pt-2">
              {hashtag}
              <span className="py-2" aria-label="computer" role="img">
                💻
              </span>
            </span>
          </CardBody>
          <CardFooter className="gap-3">
            <Chip color={status ? 'success' : 'secondary'}>{status ? 'Disponible' : 'No disponible'}</Chip>
          </CardFooter>
        </Card>
      </PopoverContent>
    </Popover>
  );
}
