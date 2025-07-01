import db from '#db/client';

export const createPlaylistsTracks = async (playlistId, trackId) => {
  const sql = `
  INSERT INTO playlists_tracks (playlist_id, track_id)
  VALUES ($1, $2)
  RETURNING *;
  `;

  const { rows: newPlaylistTracks } = await db.query(sql, [playlistId, trackId]);
  return newPlaylistTracks;
}