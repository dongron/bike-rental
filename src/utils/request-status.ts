const statuses = {
  FETCHING: 'FETCHING',
  DONE: 'DONE',
  ERROR: 'ERROR',
  NULL: null,
};

export type RequestStatusType = null | string;

export class RequestStatus {
  static get status() {
    return statuses;
  }

  static isDone = (status: RequestStatusType | undefined) =>
    statuses.DONE === status;

  static isFetching = (status: RequestStatusType | undefined) =>
    statuses.FETCHING === status;

  static isError = (status: RequestStatusType | undefined) =>
    statuses.ERROR === status;

  static isNull = (status: RequestStatusType | undefined) =>
    statuses.NULL === status;
}
