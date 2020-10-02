const NAME = "NAME";
const AGE = "AGE";
const LOCATION = "LOCATION";

export const setName = (name) => {
  return {
    type: NAME,
    payload: name,
  };
};

export const setAge = (age) => {
  return {
    type: AGE,
    payload: age,
  };
};

export const setLocation = (location) => {
  return {
    type: LOCATION,
    payload: location,
  };
};
