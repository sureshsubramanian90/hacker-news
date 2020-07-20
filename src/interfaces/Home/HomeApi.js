import RestClient from '../RestClient/RestClient';

export function getData(params) {
  const config = {
    url: 'search',
    params
  };
  return RestClient.get(config).then((json) => {
    return json;
  });
}
