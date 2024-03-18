import { Gender, PrismaClient, UserType } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const admin = await prisma.user.upsert({
    where: { email: 'admin@churcha.com' },
    update: {},
    create: {
      email: 'admin@churcha.com',
      fullName: 'Admin',
      phone: '09069787878',
      type: UserType.PASTOR,
      password: 'password',
      gender: Gender.MALE,
      appointedAdmin: true,
    },
  });

  const church = await prisma.church.create({
    data: {
      name: 'Sample Church',
      address: 'Test',
      pastorId: admin.id,
    },
  });

  console.log({ admin, church });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
