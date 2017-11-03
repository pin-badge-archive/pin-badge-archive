import React from "react";
import { Container, Header } from 'semantic-ui-react';

class NotFound extends React.Component {
  render() {
    return (
      <Container>
        <Header as="h2">
          Error
          <Header.Subheader as="h4">
            페이지를 찾을 수 없습니다.
          </Header.Subheader>
        </Header>
        <p>
          주소를 직접 입력하셨다면, 주소 창을 다시 확인해주세요.<br />
          링크를 누르셨다면, 삭제되거나 권한이 없는 페이지에 접속하신 것일 수 있습니다.<br />
          오류가 지속되는 경우 <a href="mailto:support@b-archive.com">support@b-archive.com</a> 으로 문의해주세요.
        </p>
      </Container>
    );
  }
}

export default NotFound;
