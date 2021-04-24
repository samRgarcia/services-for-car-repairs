export const QUERY_FILTER_ALL_PROBLEMS_OPEN = `
SELECT * FROM all_problems_cars WHERE status = ?;
`;

export const QUERY_VIEW_SUGGESTION_CLIENT = `
SELECT * FROM view_suggestions_client WHERE idmechanical = ?;
`
export const QUERY_VIEW_ALL_JOBS_ACCEPTED = `
SELECT * FROM current_jobs WHERE mechanical_idmechanical = ?;
`
