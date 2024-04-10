import prisma from '@/prisma/db';
import DataTable from './DataTable';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';

const Tickets = async () => {
  const ticketArray = await prisma.ticket.findMany();

  return (
    <div>
      <Link href="/tickets/new" className={buttonVariants({ variant: 'default' })}>
        Create New Ticket
      </Link>
      <DataTable ticketArray={ticketArray} />
    </div>
  );
};

export default Tickets;
