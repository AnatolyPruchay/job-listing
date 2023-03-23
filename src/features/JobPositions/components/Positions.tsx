import { Badge } from '../../../shared';
import { IJobPositions } from '../types';

const Positions = ({
                     badges,
                     handleAddFilter,
                     }: IJobPositions) => {
  return (
    <>
      {badges.map(item => (
        <Badge
          key={item}
          onClick={() => handleAddFilter(item)}
        >{item}</Badge>
      ))}
    </>
  )
}

export { Positions };
