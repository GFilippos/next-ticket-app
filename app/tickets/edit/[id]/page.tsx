import prisma from '@/prisma/db';
import dynamic from 'next/dynamic';

type NewTicketProps = {
  params: { id: string };
};

const TicketForm = dynamic(() => import('@/components/TicketForm'), {
  ssr: false,
});

const EditTicket = async ({ params }: NewTicketProps) => {
  const ticket = await prisma.ticket.findUnique({ where: { id: parseInt(params.id) } });

  if (!ticket) {
    return <p className="text-destructive">Ticket Not Found!</p>;
  }

  return <TicketForm ticket={ticket} />;
};

export default EditTicket;
