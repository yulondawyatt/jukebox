import db from "#db/client";
import { createPlaylist } from './queries/playlists.js';
import { createTrack } from './queries/tracks.js';
import { createPlaylistsTracks } from './queries/playlists_tracks.js';

const seed = async () => {
 await db.connect();

 await createPlaylist('Janet Jackson', 'All Janet Jackson tracks');
 await createPlaylist('Whitney Houston', 'All Whitney Houston tracks');
 await createPlaylist('Beyonce', 'All Beyonce tracks');
 await createPlaylist('Mariah Carey', 'All Mariah Carey tracks');
 await createPlaylist('Christina Aguilera', 'All Christina Aguilera tracks');
 await createPlaylist(`Missy "Misdemeanor" Elliot`, 'All Missy tracks');
 await createPlaylist('Nelly', 'All Nelly tracks');
 await createPlaylist('Justin Timberlake', 'All Justin Timberlake tracks');
 await createPlaylist('Timbaland', 'All Timbaland tracks');
 await createPlaylist('QUEEN', "All QUEEN tracks");
 
 await createTrack('Hit Em With Da Hee', 245000); 
 await createTrack('Gossip Folks', 271000);
 await createTrack('Hot in Herre', 309000);
 await createTrack('Air Force Ones', 240000);
 await createTrack('Rock Your Body', 240000); 
 await createTrack('Cry Me A River', 261000);
 await createTrack('The Way I Are', 309000);
 await createTrack('Bounce', 240000);
 await createTrack("Don't Stop Me Now", 309000);
 await createTrack('Bohemian Rhapsody', 261000);
 await createTrack('Rhythm Nation 1814', 240000); 
 await createTrack('China Love', 261000);
 await createTrack('Where Do Broken Hearts Go', 309000);
 await createTrack('The Greatest Love of All', 240000);
 await createTrack('Partition', 240000); 
 await createTrack('Drunk in Love', 261000);
 await createTrack('Vision of Love', 309000);
 await createTrack('Emotions', 240000);
 await createTrack('Car Wash', 309000);
 await createTrack('Candyman', 261000);

 await createPlaylistsTracks();


await db.end();
console.log("🌱 Database seeded.");
}
  seed();