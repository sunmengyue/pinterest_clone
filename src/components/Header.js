import React from 'react';
import styled from 'styled-components';
import PinterestIcon from '@material-ui/icons/Pinterest';
import IconButton from '@material-ui/core/IconButton';

function header() {
  return (
    <Wrapper>
      <LogoWrapper>
        <IconButton>
          <PinterestIcon />
        </IconButton>
      </LogoWrapper>
      <HomepageButton>
        <a href='/'>Home</a>
      </HomepageButton>
      <FollowingButton>
        <a href='/'>Following</a>
      </FollowingButton>
      {/* <SearchWrapper>
        <SearchBarWrapper></SearchBarWrapper>
      </SearchWrapper>
      <IconsWrapper></IconsWrapper> */}
    </Wrapper>
  );
}

export default header;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 56px;
  background: #fff;
  color: black;
  padding: 12px 4px 4px 16px;
`;

const LogoWrapper = styled.div`
  .MuiSvgIcon-root {
    color: #e60023;
    font-size: 32px;
    cursor: pointer;
  }
`;

const HomeButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 40px;
  hight: 48px;
  cursor: pointer;
  min-width: 80px;
  a {
    text-decoration: none;
    font-weight: 700;
  }
`;

const HomepageButton = styled(HomeButtons)`
  background: rgb(17, 17, 17);
  padding: 15px 3px;
  margin-right: 13px;
  a {
    color: #fff;
  }
`;

const FollowingButton = styled(HomeButtons)`
  background: white;
  padding: 15px 15px;
  a {
    color: rgb(17, 17, 17);
  }

  :hover {
    background-color: #e1e1e1;
  }
`;
