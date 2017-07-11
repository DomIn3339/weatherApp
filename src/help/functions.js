export function isInList(id, CITIES){
  for(let i = 0; i < CITIES.length; i++)
  {
    if(id === CITIES[i].id){
      return true;
    }
  }
  return false;
}

export function getApiURL(queryType = 'name', data, unitsType = "metric"){
  let URL = 'http://api.openweathermap.org/data/2.5/weather?';
  switch (queryType) {
    case 'name':
      URL += "q=" + data.name;
      break;
    case 'coords':
      URL += "lat=" + data.lat + "&lon=" + data.lon;
      break;
    case 'ID':
      URL += "id=" + data.id;
      break;
    default:
      break;
  }

  URL += "&appid=b1b35bba8b434a28a0be2a3e1071ae5b&units=" + unitsType;

  return URL;
}
