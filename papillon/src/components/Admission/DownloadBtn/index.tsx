import * as React from 'react';

import { downloadAdmissionExcel } from 'api/index';
import { downloadExcel } from 'utils/download';
import { Button } from '../../common';

function DownloadBtn() {
  const handleDownloadAdmission = React.useCallback(async () => {
    await downloadExcel(downloadAdmissionExcel, '수험표');
  }, []);

  return (
    <Button
      className="admission-ticket__download-btn"
      onClick={handleDownloadAdmission}
    >
      다운로드
    </Button>
  );
}

export default DownloadBtn;
