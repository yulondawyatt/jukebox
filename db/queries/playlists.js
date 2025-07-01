import db from '#db/client';

export const createPlaylist = async (playlistName, description) => {
  const sql = `
  INSERT INTO playlists (name, description)
  VALUES ($1, $2)
  RETURNING *;
  `;

  const { rows: newPlaylist } = await db.query(sql, [playlistName, description]);
  return newPlaylist;
}