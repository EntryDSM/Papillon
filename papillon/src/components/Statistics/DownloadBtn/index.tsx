import * as React from 'react';

import { Button } from '../../common';
import { downloadStatisticsExcel } from 'api/index';
import { downloadExcel } from 'utils/download';

function DownloadBtn() {
  const handleDownloadExcel = React.useCallback(async () => {
    await downloadExcel(downloadStatisticsExcel, '지원자통계');
  }, []);

  return (
    <Button className="statistics-all__excel-btn" onClick={handleDownloadExcel}>
      Excel 출력
    </Button>
  );
}

export default DownloadBtn;
