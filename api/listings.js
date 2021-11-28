import client from "./client";

const endpoint = "/magas";

const getListings = () => client.get(endpoint);

const addListing = (listing) => {
  const data = new FormData();
  data.append("title", listing.title);
  data.append("categoryId", listing.category.value);
  data.append("description", listing.description);
  data.append("price", listing.price);
  listing.images.forEach((image, index) => {
    data.append("images", {
      name: "image" + index,
      type: "image/jpeg",
      uri: image,
    });
  });

  if (listing.location) {
    data.append("location", JSON.stringify(listing.location));
  }
  return client.post(endpoint, data);
};

export default { getListings, addListing };
