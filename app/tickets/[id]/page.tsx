import prisma from '@/prisma/db';
import TicketDetail from './TicketDetail';

type ViewTicketProps = {
  params: { id: string };
};

const ViewTicket = async ({ params }: ViewTicketProps) => {
  const ticket = await prisma.ticket.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!ticket) {
    return <p className="text-destructive">Ticket Not Found!</p>;
  }

  return <TicketDetail ticket={ticket} />;
};

export default ViewTicket;
