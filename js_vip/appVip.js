import {doApi} from "./vipManager.js"
import {declareEvents} from "./eventsView.js"
import { lightboxInit } from "./lightbox.js";

const init = () => {
  doApi();
  declareEvents();
  lightboxInit();
}


init();