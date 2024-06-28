'use client';
import * as React from 'react';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { tutorialsList } from '@/lib/constants/tutorialsList';

export const SelectTutorials = () => {
  const [selectTutorials, setSelectTutorials] = React.useState(
    tutorialsList[0],
  );
  return (
    <Select
      value={selectTutorials}
      onValueChange={(change) => setSelectTutorials(change)}
    >
      <SelectTrigger className="capitalize">
        <SelectValue placeholder="" aria-label={selectTutorials} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{selectTutorials}</SelectLabel>
          {tutorialsList.map((item, index) => {
            return (
              <SelectItem key={index} className="capitalize" value={item}>
                {item}
              </SelectItem>
            );
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
