import TicketPriority from '@/components/TicketPriority';
import TicketStatusBadge from '@/components/TicketStatusBadge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Ticket } from '@prisma/client';
import Link from 'next/link';
import { ArrowDown, ArrowUp } from 'lucide-react';
import { SearchParams } from './page';
import SortingButton from '@/components/SortingButton';

type DataTableProps = {
  ticketArray: Ticket[];
  searchParams: SearchParams;
};

const DataTable = ({ ticketArray, searchParams }: DataTableProps) => {
  return (
    <div className="w-full mt-5">
      <div className="rounded-md sm:border ">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>
                <SortingButton searchParams={searchParams} header="title" />
              </TableHead>
              <TableHead>
                <div className="flex justify-center">
                  <SortingButton searchParams={searchParams} header="status" />
                </div>
              </TableHead>
              <TableHead>
                <div className="flex justify-center">
                  <SortingButton searchParams={searchParams} header="priority" />
                </div>
              </TableHead>
              <TableHead>
                <SortingButton searchParams={searchParams} header="createdAt" />
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {ticketArray &&
              ticketArray.map((ticket) => (
                <TableRow key={ticket.id} data-href="/">
                  <TableCell>
                    <Link href={`/tickets/${ticket.id}`}>{ticket.title}</Link>
                  </TableCell>
                  <TableCell>
                    <div className="flex justify-center">
                      <TicketStatusBadge status={ticket.status} />
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex justify-center">
                      <TicketPriority priority={ticket.priority} />
                    </div>
                  </TableCell>
                  <TableCell>
                    {ticket.createdAt.toLocaleDateString('en-US', {
                      year: '2-digit',
                      month: '2-digit',
                      day: '2-digit',
                      hour: 'numeric',
                      minute: 'numeric',
                      hour12: true,
                    })}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default DataTable;
