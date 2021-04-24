export const QUERY_TRACING = `
SELECT * FROM tracing WHERE client_idclient = ?
`
export const QUERY_ID_VIEW_SUGGESTIONS_CLIENT=`
SELECT * FROM view_suggestions_client WHERE client_idclient = ?;
`;
