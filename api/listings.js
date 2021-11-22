import client from "./client";

const endpoint = "/magas";

const getListings = () => client.get(endpoint);

export default { getListings };
