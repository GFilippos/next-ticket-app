'use client';

import { useState } from 'react';
import { ArrowDown, ArrowUp } from 'lucide-react';
import Link from 'next/link';
import { SearchParams } from '@/app/tickets/page';
import { Ticket } from '@prisma/client';

type SortingButtonProps = {
  searchParams: SearchParams;
  header: keyof Ticket;
};

const SortingButton = ({ searchParams, header }: SortingButtonProps) => {
  const [sortingMode, setSortingMode] = useState(searchParams.sorting || '');
  const sortingIconStyle = 'inline p-1';
  return (
    <>
      <Link
        href={{
          query: {
            ...searchParams,
            orderBy: header,
            sorting: sortingMode === 'desc' ? 'asc' : 'desc',
          },
        }}
        onClick={() => setSortingMode((prev) => (prev === 'desc' ? 'asc' : 'desc'))}
      >
        {header.charAt(0).toUpperCase() + header.slice(1)}
      </Link>
      {header === searchParams.orderBy &&
        (sortingMode === 'desc' ? (
          <ArrowDown className={sortingIconStyle} />
        ) : (
          <ArrowUp className={sortingIconStyle} />
        ))}
    </>
  );
};

export default SortingButton;
