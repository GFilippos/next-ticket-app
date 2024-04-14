import UserForm from '@/components/UserForm';
import prisma from '@/prisma/db';

type EditUser = {
  params: { id: string };
};

const EditUser = async ({ params }: EditUser) => {
  const user = await prisma.user.findUnique({
    where: { id: parseInt(params.id) },
    select: {
      id: true,
      name: true,
      username: true,
      role: true,
    },
  });

  if (!user) {
    return <p className="text-destructive">User Not Found</p>;
  }

  const userWithEmptyPassword = { ...user, password: '' };

  return <UserForm user={userWithEmptyPassword} />;
};

export default EditUser;
