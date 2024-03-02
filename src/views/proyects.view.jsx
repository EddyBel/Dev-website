import { CoverWorks } from '../assets';
import { BannerShadow } from '../components/@common/banners';
import { ValidatorVariable } from '../components/@common/validators';
import { BannerLoader } from '../components/@loaders/banner.loader';
import { FiSearch } from 'react-icons/fi';
import { useDivideRepos, useExtractTags, useFilterByTag, useGithub, useSearchRepo } from '../hook/github';
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
  Input,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  Spinner,
  Chip,
  User,
  Link,
} from '@nextui-org/react';
import { useMemo, useState } from 'react';
import { FaGithub } from 'react-icons/fa6';
import { useStore } from '../hook/store.context';
import { truncate } from '../utils/formatter';
import { randomItem } from '../utils/random';
import { validateArrays, validateValues } from '../utils/validations';

const defaultLanguaje = 'Ninguno';

export function Proyects() {
  const [selectedKeys, setSelectedKeys] = useState(new Set(['Todos']));
  const selectedValue = useMemo(() => Array.from(selectedKeys).join(', ').replaceAll('_', ' '), [selectedKeys]);

  const { user } = useStore();
  const { repos } = useGithub();
  const newReposByTag = useFilterByTag(repos, selectedValue);
  const { newRepos, setSearh } = useSearchRepo(newReposByTag);
  const NewRepos = useDivideRepos(newRepos, 10);
  const Language = useExtractTags();
  const [page, setPage] = useState(1);
  const Headers = ['💻', 'Nombre', 'Lenguaje', 'Licencia', 'Tamaño'];

  function NumberToMegaBytes(number) {
    let megabytes = number / 1000;
    megabytes = megabytes.toFixed(2);
    return megabytes + ' Kb';
  }

  function SelectColorBylang(tagRef) {
    const tag = tagRef?.toLowerCase();
    if (tag === 'javascript') return 'warning';
    if (tag === 'typescript') return 'primary';
    if (tag === 'python') return 'primary';
    if (tag === 'css') return 'secondary';
    if (tag === 'lua') return 'secondary';
    if (tag === 'html') return 'danger';
    else return randomItem(['danger', 'warning', 'success', 'secondary', 'primary']);
  }

  function SelectColorByLicence(licenceRef) {
    const licence = licenceRef?.toLowerCase();
    if (licence.includes('mit')) return 'danger';
    if (licence.includes('apache')) return 'warning';
    else return 'default';
  }

  const onChangePagination = (page) => setPage(page);
  const onChangeInputSearch = (e) => setSearh(e.target.value);
  const validateNewRepos = () => !validateArrays(newRepos) | !newRepos;

  return (
    <main className="w-full max-w-[1000px] m-auto flex flex-col gap-5 p-5">
      <ValidatorVariable variable={validateArrays(repos)} elseComponent={<BannerLoader />}>
        <BannerShadow background={CoverWorks}>
          <h1 className="text-5xl capitalize font-extrabold text-neutral-100 flex items-center gap-3">
            Explora mis respositorios
          </h1>
        </BannerShadow>
      </ValidatorVariable>

      <div className="w-full mt-12 mb-12">
        <div className="flex flex-col gap-3">
          <div className="w-full flex gap-3">
            <Input
              label="Search"
              radius="lg"
              onChange={onChangeInputSearch}
              classNames={{
                label: 'text-black/50 dark:text-white/90',
                input: [
                  'bg-transparent',
                  'text-black/90 dark:text-white/90',
                  'placeholder:text-default-700/50 dark:placeholder:text-white/60',
                ],
                innerWrapper: 'bg-transparent',
                inputWrapper: [
                  'shadow-xl',
                  'bg-default-200/50',
                  'dark:bg-default/60',
                  'backdrop-blur-xl',
                  'backdrop-saturate-200',
                  'hover:bg-default-200/70',
                  'dark:hover:bg-default/70',
                  'group-data-[focused=true]:bg-default-200/50',
                  'dark:group-data-[focused=true]:bg-default/60',
                  '!cursor-text',
                ],
              }}
              placeholder="Type to search..."
              startContent={
                <FiSearch className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
              }
            />

            <Dropdown>
              <DropdownTrigger>
                <Button color="secondary" variant="solid" className="capitalize rounded-2xl min-h-[55px]">
                  {selectedValue}
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                aria-label="Single selection example"
                variant="flat"
                color="secondary"
                disallowEmptySelection
                selectionMode="single"
                selectedKeys={selectedKeys}
                onSelectionChange={setSelectedKeys}
              >
                {Language?.map((lang) => (
                  <DropdownItem key={lang ?? defaultLanguaje}>{lang ?? defaultLanguaje}</DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
          </div>

          <p className="text-neutral-950/60 dark:text-neutral-200/50">Total {repos?.length ?? 0} Repositorios</p>

          <Table
            color="secondary"
            selectionMode="single"
            aria-label="Github repos table"
            classNames={{
              table: validateNewRepos() ? 'min-h-[400px]' : 'min-h-auto',
            }}
          >
            <TableHeader>
              {Headers?.map((header) => (
                <TableColumn key={header} className="text-md">
                  {header}
                </TableColumn>
              ))}
            </TableHeader>
            <TableBody items={10} isLoading={validateNewRepos()} loadingContent={<Spinner />}>
              {NewRepos.repos[page - 1]?.map((repo) => (
                <TableRow key={repo?.id} href={repo?.url} as={Link} className="cursor-pointer">
                  <TableCell>
                    <FaGithub className="text-2xl text-neutral-950/70 dark:text-neutral-200/60" />
                  </TableCell>
                  <TableCell>
                    <User
                      avatarProps={{ radius: 'lg', src: user.avatar }}
                      description={truncate(repo?.fullName, 35)}
                      name={truncate(repo?.name, 35)}
                    >
                      {user.email}
                    </User>
                  </TableCell>
                  <TableCell>
                    <Chip
                      className="capitalize"
                      color={SelectColorBylang(repo?.lang ?? defaultLanguaje)}
                      size="sm"
                      variant="flat"
                    >
                      {repo?.lang ?? defaultLanguaje}
                    </Chip>
                  </TableCell>
                  <TableCell>
                    <Chip
                      className="capitalize"
                      color={SelectColorByLicence(repo?.licence ?? '')}
                      size="sm"
                      variant="flat"
                    >
                      {repo?.licence ?? 'No licence'}
                    </Chip>
                  </TableCell>
                  <TableCell>{NumberToMegaBytes(repo?.size)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="w-full flex justify-center items-center mt-6">
            <Pagination
              showShadow
              color="secondary"
              total={NewRepos.size}
              initialPage={1}
              onChange={onChangePagination}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
