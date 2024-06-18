import sanityClient from "../sanity";
import imageUrlBuilder from "@sanity/image-url";

const imageBuilder = imageUrlBuilder(sanityClient);

const imageUrlFor = source => imageBuilder.image(source);

export default imageUrlFor;
