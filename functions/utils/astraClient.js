const { createClient } = require("@astrajs/collections");

let astraClient = null;

const getAstraClient = async () => {
  if (astraClient === null) {
    astraClient = await createClient(
      {
        astraDatabaseId: process.env.NlZzPpFZOAzNOhQZZhQPMvIa,
        astraDatabaseRegion: process.env.asia-south1,
        applicationToken: process.env.AstraCS:NlZzPpFZOAzNOhQZZhQPMvIa:1cfc22a2d8a2c023e1d1464a93cd34bc522d2e662bc3120a2fe5cfbe31ae3a09,
      },
      30000
    );
  }
  return astraClient;
};

const getCollection = async () => {
  const documentClient = await getAstraClient();
  return documentClient
    .namespace(process.env.ASTRA_DB_KEYSPACE)
    .collection("tktkposts");
};
