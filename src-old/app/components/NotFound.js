import React from "react";

import { Symbol } from "components/Logo";

class NotFound extends React.Component {
  render() {
    return (
      <div>
        <h2>Error</h2>
        <h4>페이지를 찾을 수 없습니다.</h4>
        <p>
          주소를 직접 입력하셨다면, 주소 창을 다시 확인해주세요.<br />
          링크를 누르셨다면, 삭제되거나 권한이 없는 페이지에 접속하신 것일 수 있습니다.<br />
          오류가 지속되는 경우 플랫폼셀에 문의해주세요.
        </p>
      </div>
    );
  }
}

export default NotFound;
