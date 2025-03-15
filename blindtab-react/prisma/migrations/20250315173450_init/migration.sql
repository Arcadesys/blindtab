-- CreateTable
CREATE TABLE "public"."song" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "artist" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "key" TEXT,
    "tempo" INTEGER,
    "timeSignature" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "song_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."tag" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."_SongToTag" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_SongToTag_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "tag_name_key" ON "public"."tag"("name");

-- CreateIndex
CREATE INDEX "_SongToTag_B_index" ON "public"."_SongToTag"("B");

-- AddForeignKey
ALTER TABLE "public"."_SongToTag" ADD CONSTRAINT "_SongToTag_A_fkey" FOREIGN KEY ("A") REFERENCES "public"."song"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_SongToTag" ADD CONSTRAINT "_SongToTag_B_fkey" FOREIGN KEY ("B") REFERENCES "public"."tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;
