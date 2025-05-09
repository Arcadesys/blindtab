import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  try {
    await prisma.song.deleteMany();
    await prisma.tag.deleteMany();
    await prisma.user.deleteMany();

    console.log('Database cleared successfully');

    const folkTag = await prisma.tag.create({
      data: { name: 'Folk' },
    });

    const classicalTag = await prisma.tag.create({
      data: { name: 'Classical' },
    });

    const traditionalTag = await prisma.tag.create({
      data: { name: 'Traditional' },
    });

    console.log('Tags created successfully');

    const hashedPassword = await bcrypt.hash('password123', 10);
    const user = await prisma.user.create({
      data: {
        name: 'Test User',
        email: 'test@example.com',
        password: hashedPassword,
      },
    });

    console.log('Test user created successfully');

    await prisma.song.create({
      data: {
        title: 'Amazing Grace',
        artist: 'John Newton',
        key: 'G',
        tempo: 70,
        timeSignature: '3/4',
        isPublic: true,
        content: `# Amazing Grace

G       G7      C        G
Amazing grace! How sweet the sound
Em      G       D
That saved a wretch like me!
G       G7      C        G
I once was lost, but now am found;
Em      D       G
Was blind, but now I see.

G       G7      C        G
'Twas grace that taught my heart to fear,
Em      G       D
And grace my fears relieved;
G       G7      C        G
How precious did that grace appear
Em      D       G
The hour I first believed.`,
        tags: {
          connect: [{ id: folkTag.id }, { id: traditionalTag.id }],
        },
      },
    });

    await prisma.song.create({
      data: {
        title: 'Greensleeves',
        artist: 'Traditional English',
        key: 'Am',
        tempo: 85,
        timeSignature: '6/8',
        isPublic: true,
        content: `# Greensleeves

Am      G       Am
Alas, my love, you do me wrong,
C       G       Am
To cast me off discourteously.
A       G       Am
For I have loved you well and long,
C       E       Am
Delighted in your company.

Am      C       G       Em
Greensleeves was all my joy,
Am      G       Em      Am
Greensleeves was my delight,
Am      C       G       Em
Greensleeves was my heart of gold,
Am      E       Am
And who but my lady Greensleeves.`,
        tags: {
          connect: [{ id: folkTag.id }, { id: traditionalTag.id }],
        },
      },
    });

    await prisma.song.create({
      data: {
        title: 'Scarborough Fair',
        artist: 'Traditional English',
        key: 'Am',
        tempo: 75,
        timeSignature: '3/4',
        isPublic: true,
        content: `# Scarborough Fair

Am      G       Am
Are you going to Scarborough Fair?
C       Am      C       G       Am
Parsley, sage, rosemary, and thyme.
Am      G       Am      G       Em
Remember me to one who lives there,
Am      G       Em      Am
She once was a true love of mine.

Am      G       Am
Tell her to make me a cambric shirt,
C       Am      C       G       Am
Parsley, sage, rosemary, and thyme.
Am      G       Am      G       Em
Without no seams nor needlework,
Am      G       Em      Am
Then she'll be a true love of mine.`,
        tags: {
          connect: [{ id: folkTag.id }, { id: traditionalTag.id }],
        },
      },
    });

    console.log('Public domain songs created successfully');

    await prisma.song.create({
      data: {
        title: 'Private Song',
        artist: 'Test Artist',
        key: 'C',
        tempo: 120,
        timeSignature: '4/4',
        isPublic: false,
        content: `# Private Song

C       G       Am      F
This is a private song for testing
C       G       F
Only authenticated users can see it
C       G       Am      F
It should not appear in public listings
C       G       F       C
This is just for testing purposes`,
        userId: user.id,
        tags: {
          connect: [{ id: folkTag.id }],
        },
      },
    });

    console.log('Private song created successfully');
    console.log('Database has been set up successfully!');
  } catch (error) {
    console.error('Error setting up database:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
