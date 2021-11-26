import client from "./client";

const endpoint = "/magas";

const getListings = (a, b, c) => client.get(endpoint);

export default { getListings };
