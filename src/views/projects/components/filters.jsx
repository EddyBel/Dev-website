import { Button } from '@nextui-org/react';
import { GetTechIcon } from '../../../components/@common/get-tech-icon';

export function FiltersProjects({ setFilter, stacks }) {
  function formatterName(name) {
    if (name === 'ia') return 'machine learning';
    return name;
  }

  return (
    <div className="w-full flex flex-wrap items-center justify-center gap-2 py-2">
      {stacks?.map((tech, index) => (
        <Button
          startContent={<GetTechIcon tech={tech} />}
          variant="flat"
          color="default"
          size="sm"
          onClick={() => setFilter(tech)}
          key={`filter-tech-${index}`}
        >
          {formatterName(tech)}
        </Button>
      ))}
    </div>
  );
}
