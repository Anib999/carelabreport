import { fetch } from "../utils/HttpUtil";

/**
 * @desc get report count by status and date range
 * @param {fromdate, todate} data
 * @param {ReportStatus} successCallback
 * @returns
 */
export const careLabTabApi = (data, successCallback) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `GetReportCountByStatusAndDateRange?fromdate=${data.fromdate}&todate=${data.todate}`
      );
      if (response?.status === 200) {
        successCallback(response?.data?.ReportStatus);
      } else successCallback([]);
    } catch (error) {}
  };
};

/**
 * @desc get patient sample summary status
 * @param {from, to, fiscalyearId, testin, testnotin, diagnosisin, diagnosisnotin} data
 * @param {CovidDetails} successCallback
 * @returns
 */
export const careLabSampleStatusApi = (data, successCallback) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `GetPatientSampleSummaryStatus?from=${data.fromdate}&to=${data.todate}&fiscalyearId=${data.fiscalyear}&testin=&testnotin=&diagnosisin=${data.diagListIn}&diagnosisnotin=`
      );
      if (response?.status === 200) {
        successCallback(response?.data?.CovidDetails);
      } else successCallback([]);
    } catch (error) {}
  };
};

/**
 * @desc get test list to view or verify in summary report
 * @param {sampleid, fiscalyear} data
 * @param {RecordList} successCallback
 * @returns
 */
export const careLabTestListApi = (data, successCallback) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `GetTestListToViewOrVerifyInSummaryReport?sampleid=${data.sampleid}&fiscalyear=${data.fiscalyear}`
      );
      if (response?.status === 200) {
        successCallback(response?.data?.RecordList);
      } else successCallback([]);
    } catch (error) {}
  };
};

/**
 * @desc get fiscal year code list
 * @param {} data
 * @param {FIscalYearCode} successCallback
 * @returns
 */
export const careLabFiscalCodeApi = (successCallback) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`GetFiscalYearCodeList`);
      if (response?.status === 200) {
        successCallback(response?.data?.FIscalYearCode);
      } else successCallback([]);
    } catch (error) {}
  };
};

/**
 * @desc get diagnosis group list
 * @param {} data
 * @param {DiagnosisGroup} successCallback
 * @returns
 */
export const careLabDiagnosisApi = (successCallback) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`GetDiagnosiGroupList`);
      if (response?.status === 200) {
        successCallback(response?.data?.DiagnosisGroup);
      } else successCallback([]);
    } catch (error) {}
  };
};
