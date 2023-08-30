import React from 'react';
import Button from './components/Button';
import Flex from './components/Flex';

const App = () => {
  return (
    <>
      <Flex>
        <Button
          size="small"
          theme="primary"
          strokeMode
          fullWidth
          disabled
          type="button">
          바로 보러가기 &gt;
        </Button>
        <Button
          size="medium"
          theme="secondary"
          fullWidth
          type="button">
          바로 보러가기 &gt;
        </Button>
        <Button
          size="medium"
          theme="tertiary"
          fullWidth
          type="button">
          바로 보러가기 &gt;
        </Button>
      </Flex>
      <Flex>
        <Button
          size="large"
          theme="primary"
          fullWidth
          type="button">
          바로 보러가기 &gt;
        </Button>
      </Flex>
    </>
  );
}

export default App;
