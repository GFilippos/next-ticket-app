import prisma from '@/prisma/db';
import DataTable from './DataTable';

const Tickets = async () => {
  const ticketArray = await prisma.ticket.findMany();

  return (
    <div>
      <DataTable ticketArray={ticketArray} />
    </div>
  );
};

export default Tickets;
