import { CAMPSITES } from '../../app/shared/CAMPSITES';
import CampsiteDetail from './CampsiteDetail';

export const selectAllCampsites = () => {
  return CAMPSITES;
};

export const selectCampsiteById = (id) => {
  return CAMPSITES.find((campsite) => campsite.id === parseInt(id));
};

export const selectFeaturedCampsite = () => {
  return CAMPSITES.find((campsite) => campsite.featured);
};
