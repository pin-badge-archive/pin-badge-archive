import React from "react";

import styled from "lib/styled";

const notFoundBG = require("./assets/not-found.svg");

const NotFoundWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const ErrorMessageBox = styled.div`
  position: relative;
  width: 800px;
  padding: 20px 10px 60px;
  border-top: 1px solid ${props => props.theme.gray20};
  border-bottom: 1px solid ${props => props.theme.gray20};

  &::before {
    content: "";
    position: absolute;
    display: block;
    top: -64px;
    right: 20px;
    width: 110px;
    height: 77px;
    background: url(${notFoundBG}) 0 0 no-repeat;
  }
`;

const ErrorCode = styled.div`
  margin-bottom: 140px;
  font-size: 1.125rem;
  line-height: 28px;
  color: ${props => props.theme.primary100};
`;

const ErrorCodeTitle = styled.span`
  margin-left: 12px;
  vertical-align: -2px;
`;

const Code = styled.span`
  color: ${props => props.theme.gray60};
  vertical-align: -2px;
`;

const ErrorTitle = styled.h1`
  margin-bottom: 1.875rem;
  padding-left: 36px;
  font-size: 2.25rem;
  color: ${props => props.theme.gray100};
`;

const ErrorDesc = styled.div`
  padding-left: 36px;
  line-height: 1.875;
  color: ${props => props.theme.gray80};
`;

import { Symbol } from "components/Logo";

class NotFound extends React.Component {
  render() {
    return (
      <NotFoundWrapper>
        <ErrorMessageBox>
          <ErrorCode>
            <Symbol width="24px" height="28px" />
            <ErrorCodeTitle>Error</ErrorCodeTitle>
            <Code> | 404</Code>
          </ErrorCode>
          <ErrorTitle>페이지를 찾을 수 없습니다.</ErrorTitle>
          <ErrorDesc>
            주소를 직접 입력하셨다면, 주소 창을 다시 확인해주세요.<br />
            링크를 누르셨다면, 삭제되거나 권한이 없는 페이지에 접속하신 것일 수 있습니다.<br />
            오류가 지속되는 경우 플랫폼셀에 문의해주세요.
          </ErrorDesc>
        </ErrorMessageBox>
      </NotFoundWrapper>
    );
  }
}

export default NotFound;
