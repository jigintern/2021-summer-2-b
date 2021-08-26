
export const getEvents = (req) => {
  const subject = getQueries(req);
  const events = JSON.parse(Deno.readTextFileSync(`./_data/${subject}.json`));

  return {
    success: true,
    data: events,
  };
};

/**
 * 
 * @description get longitude, latitude from request params
 * @param {string} req 
 * @returns {string} subject
 */
const getQueries = (req) => {
  if(req.includes("subject")) {
    const subject = req.slice(8, 15);
    return subject;
  }
}