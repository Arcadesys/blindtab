import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Clear existing data
  await prisma.song.deleteMany();
  await prisma.tag.deleteMany();

  // Create tags
  const folkTag = await prisma.tag.create({
    data: { name: 'Folk' },
  });

  const classicalTag = await prisma.tag.create({
    data: { name: 'Classical' },
  });

  const traditionalTag = await prisma.tag.create({
    data: { name: 'Traditional' },
  });

  const christmasTag = await prisma.tag.create({
    data: { name: 'Christmas' },
  });

  // Create songs
  await prisma.song.create({
    data: {
      title: 'Amazing Grace',
      artist: 'John Newton',
      key: 'G',
      tempo: 70,
      timeSignature: '3/4',
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
      title: 'Moonlight Sonata',
      artist: 'Ludwig van Beethoven',
      key: 'C#m',
      tempo: 60,
      timeSignature: '4/4',
      content: `# Moonlight Sonata (First Movement)

C#m     G#m     A       E
The gentle flow of moonlight cascades,
C#m     G#m     F#      B
Through shadows cast on evening shades.
C#m     G#m     A       E
A melody of haunting grace,
C#m     G#m     F#      C#m
In every note, a solemn space.

*Note: This is a simplified chord representation of Beethoven's Moonlight Sonata (Piano Sonata No. 14 in C# minor, Op. 27, No. 2). The original is a piano piece without chord notations.*`,
      tags: {
        connect: [{ id: classicalTag.id }],
      },
    },
  });

  await prisma.song.create({
    data: {
      title: 'Jingle Bells',
      artist: 'James Lord Pierpont',
      key: 'G',
      tempo: 120,
      timeSignature: '4/4',
      content: `# Jingle Bells

G
Dashing through the snow
C               G
In a one-horse open sleigh,
D7
O'er the fields we go
D7              G
Laughing all the way.
G
Bells on bobtail ring
C                 G
Making spirits bright,
D7                      C        D7       G
What fun it is to ride and sing a sleighing song tonight!

G
Jingle bells, jingle bells,
C           G
Jingle all the way.
D7                      C        D7       G
Oh what fun it is to ride in a one-horse open sleigh, hey!
G
Jingle bells, jingle bells,
C           G
Jingle all the way.
D7                      C        D7       G
Oh what fun it is to ride in a one-horse open sleigh.`,
      tags: {
        connect: [{ id: traditionalTag.id }, { id: christmasTag.id }],
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

  console.log('Database has been seeded with public domain songs!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 