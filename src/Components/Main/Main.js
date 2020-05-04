import React, { useState } from 'react';
import axios from 'axios';
import { Wrapper, Header, Content, Item, Footer, PageBtn } from './Styled';

export default function Main() {
  const [searchKey, setSearchKey] = useState('');
  const [pageData, setPageData] = useState();
  const [currentPage, setCurrentPage] = useState(1);

  function handleSearchKeyChange(value) {
    setSearchKey(value);
  }

  function handleSearch() {
    if (searchKey.trim().length === 0) {
      return;
    }
    fetchData();
  }

  async function fetchData() {
    const key = 'YOUR_API_KEY';
    const res = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?type=video&maxResults=30&key=${key}&part=snippet&q=${searchKey}`
    );

    const newPageData = {
      page1: [],
      page2: [],
      page3: [],
    };
    res.data.items.forEach((item, idx) => {
      if (idx < 10) {
        newPageData.page1.push(item);
      } else if (idx < 20) {
        newPageData.page2.push(item);
      } else {
        newPageData.page3.push(item);
      }
    });

    setPageData(newPageData);
  }

  function handleOpenVedio(id) {
    window.open(`https://www.youtube.com/watch?v=${id}`);
  }

  return (
    <Wrapper>
      <Header>
        <div>
          <input
            type='text'
            placeholder='輸入關鍵字'
            value={searchKey}
            onChange={(e) => handleSearchKeyChange(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      </Header>
      <Content>
        {pageData &&
          pageData[`page${currentPage}`].map(({ id, snippet }) => (
            <Item key={id.videoId} onClick={() => handleOpenVedio(id.videoId)}>
              <img src={snippet.thumbnails.high.url} alt='test' />
              <div>{snippet.title}</div>
            </Item>
          ))}
      </Content>
      <Footer>
        {pageData &&
          [1, 2, 3].map((page) => (
            <PageBtn
              key={`page_${page}`}
              onClick={() => setCurrentPage(page)}
              actived={currentPage === page}
            >
              {page}
            </PageBtn>
          ))}
      </Footer>
    </Wrapper>
  );
}
