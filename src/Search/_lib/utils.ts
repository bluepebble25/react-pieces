export const filterCity = (
  cityList: { [key: string]: string[] },
  query: string
) => {
  // state를 돌며 하위의 도시 중 일치하는 것들을 배열에 담아 반환한다. => 이중 순회문 사용
  const states = Object.keys(cityList);
  const matchedResults: string[] = [];
  states.forEach((state) => {
    cityList[state].forEach((city) => {
      if (query === '') {
        return;
      } else if (city.toLowerCase().startsWith(query.toLowerCase())) {
        matchedResults.push(city);
      }
    });
  });
  return matchedResults;
};
