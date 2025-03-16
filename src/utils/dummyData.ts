/**
 * Dummy data for anonymous users
 * 
 * These are public domain songs that will be loaded for users who aren't logged in
 * to give them something to play with right away.
 */

import { Song } from '../types/Song';

export const publicDomainSongs: Song[] = [
  {
    id: 'pd-amazing-grace',
    title: 'Amazing Grace',
    artist: 'Traditional',
    key: 'G',
    tags: ['folk', 'traditional', 'hymn'],
    chords: [
      { name: 'G', positions: [{ string: 6, fret: 3 }, { string: 5, fret: 2 }, { string: 4, fret: 0 }, { string: 3, fret: 0 }, { string: 2, fret: 0 }, { string: 1, fret: 3 }] },
      { name: 'C', positions: [{ string: 5, fret: 3 }, { string: 4, fret: 2 }, { string: 3, fret: 0 }, { string: 2, fret: 1 }, { string: 1, fret: 0 }] },
      { name: 'D', positions: [{ string: 4, fret: 0 }, { string: 3, fret: 2 }, { string: 2, fret: 3 }, { string: 1, fret: 2 }] },
      { name: 'Em', positions: [{ string: 6, fret: 0 }, { string: 5, fret: 2 }, { string: 4, fret: 2 }, { string: 3, fret: 0 }, { string: 2, fret: 0 }, { string: 1, fret: 0 }] }
    ],
    structure: [
      { type: 'verse', content: 'G       G        C        G\nAmazing grace, how sweet the sound\nG       D        G\nThat saved a wretch like me\nG       G        C        G\nI once was lost, but now am found\nG       D        G\nWas blind, but now I see' }
    ],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    isPublic: true
  },
  {
    id: 'pd-auld-lang-syne',
    title: 'Auld Lang Syne',
    artist: 'Traditional Scottish',
    key: 'D',
    tags: ['folk', 'traditional', 'holiday'],
    chords: [
      { name: 'D', positions: [{ string: 4, fret: 0 }, { string: 3, fret: 2 }, { string: 2, fret: 3 }, { string: 1, fret: 2 }] },
      { name: 'G', positions: [{ string: 6, fret: 3 }, { string: 5, fret: 2 }, { string: 4, fret: 0 }, { string: 3, fret: 0 }, { string: 2, fret: 0 }, { string: 1, fret: 3 }] },
      { name: 'A', positions: [{ string: 5, fret: 0 }, { string: 4, fret: 2 }, { string: 3, fret: 2 }, { string: 2, fret: 2 }, { string: 1, fret: 0 }] },
      { name: 'Bm', positions: [{ string: 5, fret: 2 }, { string: 4, fret: 4 }, { string: 3, fret: 4 }, { string: 2, fret: 3 }, { string: 1, fret: 2 }] }
    ],
    structure: [
      { type: 'verse', content: 'D       G        D        A\nShould auld acquaintance be forgot\nD       G        A        D\nAnd never brought to mind?\nD       G        D        A\nShould auld acquaintance be forgot\nD       G        A        D\nAnd days of auld lang syne?' },
      { type: 'chorus', content: 'D       G        D        A\nFor auld lang syne, my dear\nD       G        A        D\nFor auld lang syne\nD       G        D        A\nWe\'ll take a cup of kindness yet\nD       G        A        D\nFor auld lang syne' }
    ],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    isPublic: true
  },
  {
    id: 'pd-greensleeves',
    title: 'Greensleeves',
    artist: 'Traditional English',
    key: 'Am',
    tags: ['folk', 'traditional', 'renaissance'],
    chords: [
      { name: 'Am', positions: [{ string: 5, fret: 0 }, { string: 4, fret: 2 }, { string: 3, fret: 2 }, { string: 2, fret: 1 }, { string: 1, fret: 0 }] },
      { name: 'G', positions: [{ string: 6, fret: 3 }, { string: 5, fret: 2 }, { string: 4, fret: 0 }, { string: 3, fret: 0 }, { string: 2, fret: 0 }, { string: 1, fret: 3 }] },
      { name: 'F', positions: [{ string: 6, fret: 1 }, { string: 5, fret: 3 }, { string: 4, fret: 3 }, { string: 3, fret: 2 }, { string: 2, fret: 1 }, { string: 1, fret: 1 }] },
      { name: 'E', positions: [{ string: 6, fret: 0 }, { string: 5, fret: 2 }, { string: 4, fret: 2 }, { string: 3, fret: 1 }, { string: 2, fret: 0 }, { string: 1, fret: 0 }] }
    ],
    structure: [
      { type: 'verse', content: 'Am      G        F        E\nAlas, my love, you do me wrong\nAm      G        E        Am\nTo cast me off discourteously\nAm      G        F        E\nFor I have loved you well and long\nAm      G        E        Am\nDelighted in your company' },
      { type: 'chorus', content: 'G       F        E        Am\nGreensleeves was all my joy\nG       F        E        Am\nGreensleeves was my delight\nG       F        E        Am\nGreensleeves was my heart of gold\nG       F        E        Am\nAnd who but my lady Greensleeves' }
    ],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    isPublic: true
  }
];

export default publicDomainSongs; 