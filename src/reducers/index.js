import locationReducer, * as locations from './locations';
import errorReducer, * as errors from './errors';
import areaReducer, * as areas from './areas';
import openHouseReducer, * as openHouses from './openHouses';
import eventReducer, * as events from './events';
import plannerReducer, * as planner from './planner';

export default {
    locations: locationReducer,
    areas: areaReducer,
    openHouses: openHouseReducer,
    events: eventReducer,
    errors: errorReducer,
    planner: plannerReducer,
};

export const isLocationsLoaded = state => locations.isLoaded(state.locations);

export const getAllLocations = state => locations.getAllLocations(state.locations);

export const getLocation = (state, id) => locations.getLocation(state.locations, id);

export const isAreasLoaded = state => areas.isLoaded(state.areas);

export const getAllAreas = state => areas.getAllAreas(state.areas);

export const getArea = (state, id) => areas.getArea(state.areas, id);

export const getErrors = state => errors.getErrors(state.errors);

export const isOpenHousesLoaded = state => openHouses.isLoaded(state.openHouses);

export const hasOpenHouse = state => openHouses.hasOpenHouse(state.openHouses);

export const getOpenHouse = state => openHouses.getOpenHouse(state.openHouses);

export const isEventsLoaded = state => events.isLoaded(state.events);

export const getAllEvents = state => events.getAllEvents(state.events);

export const getEvent = (state, id) => events.getEvent(state.events, id);

export const eventIsInPlanner = (state, id) => planner.eventIsInPlanner(state.planner, id);
