import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const sampleSongs = [
  {
    title: 'Amazing Grace',
    artist: 'John Newton',
    key: 'G',
    tempo: 80,
    timeSignature: '3/4',
    content: `# Amazing Grace
## John Newton
Key: G
Tempo: 80
Time: 3/4

[G]Amazing [G7]grace! How [C]sweet the [G]sound
That [G]saved a [D]wretch like [G]me!
I [G]once was [G7]lost, but [C]now am [G]found;
Was [G]blind, but [D]now I [G]see.

[G]'Twas [G7]grace that [C]taught my [G]heart to fear,
And [G]grace my [D]fears re[G]lieved;
How [G]precious [G7]did that [C]grace ap[G]pear
The [G]hour I [D]first be[G]lieved!`
  },
  {
    title: 'Hallelujah',
    artist: 'Leonard Cohen',
    key: 'C',
    tempo: 72,
    timeSignature: '4/4',
    content: `# Hallelujah
## Leonard Cohen
Key: C
Tempo: 72
Time: 4/4

I've [C]heard there was a [Am]secret chord
That [C]David played, and it [Am]pleased the Lord
But [F]you don't really [G]care for music, [C]do you? [G]
It [C]goes like this, the [F]fourth, the [G]fifth
The [Am]minor fall, the [F]major lift
The [G]baffled king com[E7]posing Halle[Am]lujah

Halle[F]lujah, Halle[Am]lujah
Halle[F]lujah, Halle[C]lu[G]jah [C]`
  },
  {
    title: 'Lean On Me',
    artist: 'Bill Withers',
    key: 'C',
    tempo: 96,
    timeSignature: '4/4',
    content: `# Lean On Me
## Bill Withers
Key: C
Tempo: 96
Time: 4/4

[C]Sometimes in our [F]lives, we all have [C]pain, we all have [G]sorrow
[C]But if we are [F]wise, we know that [C]there's always to[G]morrow

[C]Lean on me, when you're [F]not strong
And I'll be your [C]friend, I'll help you [G]carry on
[C]For it won't be [F]long, 'til I'm gonna [C]need
Somebody to [G]lean on

[C]Please swallow your [F]pride, if I have [C]things you need to [G]borrow
[C]For no one can [F]fill those of your [C]needs that you won't [G]let show`
  }
];

async function main() {
  console.log(`Start seeding ...`);
  
  for (const song of sampleSongs) {
    const createdSong = await prisma.song.create({
      data: song
    });
    console.log(`Created song with ID: ${createdSong.id}`);
  }
  
  console.log(`Seeding finished.`);
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