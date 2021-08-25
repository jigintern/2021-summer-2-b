
const events = JSON.parse(Deno.readTextFileSync("./_data/sample.json"));

export const getEvents = () => {
  return {
    success: true,
    data: events
  }
}