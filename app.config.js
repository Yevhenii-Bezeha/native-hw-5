import "dotenv/config";

export default {
  expo: {
    name: "native",
    slug: "native",
    version: "1.0.0",
    ios: {
      config: {
        googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
      },
      bundleIdentifier: "com.native",
    },
    android: {
      config: {
        googleMaps: {
          apiKey: process.env.GOOGLE_MAPS_API_KEY,
        },
      },
      package: "com.goitsocialsapp",
    },
  },
};
