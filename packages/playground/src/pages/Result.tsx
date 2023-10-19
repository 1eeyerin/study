import {Link} from "react-router-dom";
import {useLanguageList} from '../context/LanguageProvider';
import styled from 'styled-components';

const Result = () => {

  return (
    <>
      주로 사용하는 언어는
      <br/>
      <Wrapper>
        <LanguagesResult />
      </Wrapper>
      <Link to="/">수정하기</Link>
    </>
  )
}

const LanguagesResult = () => {
  const { languages } = useLanguageList();

  if (!languages.length) {
    return (
      <div>없어요</div>
    )
  }

  return (
    <>
      {languages.map((string) => {
        return (
          <Box key={string}>
            {string}
          </Box>
        )}
      )}
    </>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0;
`;

const Box = styled.div`
  padding: 0 15px;
`;

export default Result;