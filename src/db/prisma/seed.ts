import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const data1 = await prisma.user.create({
    data: {
      email: 'masked@xyz.guy',
      name: 'TheMaskedGuy',
      tickets: {
        createMany: {
          data: [
            {
              subject: 'Sub1',
              description: 'Descr1',
            },
            {
              subject: 'Subjecty 2',
              description: 'Descryyy 2',
            },
            {
              subject: 'Subject 3',
              description: 'Description 3',
            },
          ],
        },
      },
      feedbacks: {
        createMany: {
            data: [
                {
                    rating: 3,
                    comment: 'An Okay Product!'
                },
                {
                    rating: 1,
                    comment: 'Support staff was rude!!'
                }
            ]
        }
      }
    },
  });
  const data2 = await prisma.user.create({
    data: {
      email: 'user1@test.in',
      name: 'test user #1',
      tickets: {
        createMany: {
          data: [
            {
              subject: 'Sub1',
              description: 'Descr1',
            },
            {
              subject: 'Sub2',
              description: 'Descr2',
            },
            {
              subject: 'Sub3',
              description: 'Descr3',
            },
          ],
        },
      },
      feedbacks: {
        createMany: {
            data: [
                {
                    rating: 5,
                    comment: 'Nice experience!'
                },
                {
                    rating: 4,
                    comment: 'Worth it!'
                }
            ]
        }
      }
    },
  });

  console.log({ data1, data2 });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
