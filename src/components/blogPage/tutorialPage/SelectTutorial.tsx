'use client';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useChooseTabs } from '@/store/chooseTabs';
import { useEffect, useState } from 'react';

export const SelectTutorials = ({ tabsList }: any) => {
  const [selectTutorials, setSelectTutorials] = useState<any>();
  const { changeTabs } = useChooseTabs();

  useEffect(() => {
    if (tabsList && tabsList.length > 0) {
      changeTabs(tabsList[0].attributes.titleListTab);
      setSelectTutorials(tabsList[0].attributes.titleListTab);
    }
  }, [tabsList, changeTabs]);

  if (!tabsList) {
    return <div>Loading...</div>;
  }

  return (
    <Select
      value={selectTutorials}
      onValueChange={(change) => {
        setSelectTutorials(change);
        changeTabs(change);
      }}
    >
      <SelectTrigger className="capitalize">
        <SelectValue placeholder="" aria-label={selectTutorials} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{selectTutorials}</SelectLabel>
          {tabsList &&
            tabsList.map((item: any, index: number) => {
              return (
                <SelectItem
                  key={index}
                  className="capitalize"
                  value={item.attributes.titleListTab}
                >
                  {item.attributes.titleListTab}
                </SelectItem>
              );
            })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
