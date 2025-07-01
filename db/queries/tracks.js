import db from '#db/client';

export const createTrack = async (trackName, durationMS) => {
  const sql = `
  INSERT INTO tracks (name, duration_ms)
  VALUES ($1, $2)
  RETURNING *;
  `;

  const { rows: newTrack } = await db.query(sql, [trackName, durationMS]);
  return newTrack;
}