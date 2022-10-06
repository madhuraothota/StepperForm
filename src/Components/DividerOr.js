import * as React from 'react';
import { styled, Divider } from '@mui/material';



const Root = styled('div')(({ theme }) => ({
  width: '100%',
  ...theme.typography.body2,
  '& > :not(style) + :not(style)': {
    marginTop: theme.spacing(2),
  },
}));

const DividerOr = () => {
  const content = (
    <div>
      {``}
    </div>
  );

  return (
    <Root>
      {content}
      <Divider><h6><b>OR</b></h6></Divider>

    </Root>
  );
}

export default DividerOr;