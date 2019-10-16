/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getNotificationEvents = `query GetNotificationEvents($id: ID!) {
  getNotificationEvents(id: $id) {
    id
    name
    description
  }
}
`;
export const listNotificationEventss = `query ListNotificationEventss(
  $filter: ModelNotificationEventsFilterInput
  $limit: Int
  $nextToken: String
) {
  listNotificationEventss(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      description
    }
    nextToken
  }
}
`;
