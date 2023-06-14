# Debounce를 적용한 검색어 자동완성 solution

<img src="../../img/search%20autocompletion.gif" alt="search autocompletion" width="600px" />

<br>

## 구현 일지

- [[React] Debounce(디바운스) 적용한 검색어 자동완성 구현기 (1)](https://bluepebble25.tistory.com/53)
- [[React] Debounce(디바운스) 적용한 검색어 자동완성 구현기 (2) - 검색어 키보드로 선택하기](https://bluepebble25.tistory.com/54)

## Reference

- useDebounce hook 및 제네릭으로 재사용 용이하게 하는 방법 참조 - https://jinhyukoo.github.io/web/2021/04/10/useDebounce.html
- 탄력적인 컴포넌트 디자인 방법 (props에 함수 직접 넘겨 계산하는 대신 useEffect 사용해 최적화 하는 방법 영감을 얻음) - https://blog.rhostem.com/posts/2019-07-14-writing-resilient-components
- 검색창 키보드 컨트롤 - https://velog.io/@gbwlxhd97/%EA%B2%80%EC%83%89%EC%96%B4-%EC%9E%90%EB%8F%99%EC%99%84%EC%84%B1-%ED%82%A4%EB%B3%B4%EB%93%9C-%EC%BB%A8%ED%8A%B8%EB%A1%A4-withreact
- ref로 스크롤 위치 조작 - https://bayaa.tistory.com/16
- Element에 click() 안되니까 as HTMLElement로 타입 설정하라는 stackoverflow 조언 - https://stackoverflow.com/questions/46204003/trigger-click-in-typescript-property-click-does-not-exist-on-type-element
- velog) 탭 누르면 scroll로 그 페이지로 이동하는 글 - https://velog.io/@dosilv/ReactWeb-API-useRef-scrollIntoView
