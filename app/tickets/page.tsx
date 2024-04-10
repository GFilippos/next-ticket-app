import prisma from '@/prisma/db';
import DataTable from './DataTable';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import Pagination from '@/components/Pagination';

type TicketsProps = {
  page: string;
};

const Tickets = async ({ searchParams }: { searchParams: TicketsProps }) => {
  const pageSize = 8;
  const page = parseInt(searchParams.page) || 1;
  const ticketCount = await prisma.ticket.count();

  const ticketArray = await prisma.ticket.findMany({
    take: pageSize,
    skip: (page - 1) * pageSize,
  });

  return (
    <div>
      <Link href="/tickets/new" className={buttonVariants({ variant: 'default' })}>
        Create New Ticket
      </Link>
      <DataTable ticketArray={ticketArray} />
      <Pagination itemCount={ticketCount} pageSize={pageSize} currentPage={page} />
    </div>
  );
};

export default Tickets;
