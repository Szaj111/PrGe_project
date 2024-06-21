import L from "leaflet";
import userIconImg from "../tmp/user_icon.webp";

const LeafIcon = L.Icon.extend({
  options: {
    iconSize: [40, 30],
    iconAnchor: [25, 25],
    tooltipAnchor: [0, 0],
  },
});

export const userIcon = new LeafIcon({ iconUrl: userIconImg });
