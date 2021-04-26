export const QUERY_TRACING = `
SELECT 
tracing.idjobs_started, tracing.advance, tracing.idmechanical, tracing.name, tracing.last_name, tracing.first_name, tracing.gender, tracing.phone, tracing.email, tracing.idcars, tracing.model, tracing.license_place, tracing.client_idclient, tracing.idmechanical_problems, tracing.descriptions, tracing.status, 
idmechanic_suggestions, suggestions, price,mechanic_suggestions.status as status_mechanic
 FROM tracing
inner join mechanic_suggestions on tracing.idcars = mechanic_suggestions.cars_idcars
WHERE
 client_idclient = ? and mechanic_suggestions.status in ("progress","approved")
`;

export const QUERY_HISTORY_TRACING = `
SELECT 
tracing.idjobs_started, tracing.advance, tracing.idmechanical, tracing.name, tracing.last_name, tracing.first_name, tracing.gender, tracing.phone, tracing.email, tracing.idcars, tracing.model, tracing.license_place, tracing.client_idclient, tracing.idmechanical_problems, tracing.descriptions, tracing.status, 
idmechanic_suggestions, suggestions, price,mechanic_suggestions.status as status_mechanic
 FROM tracing
inner join mechanic_suggestions on tracing.idcars = mechanic_suggestions.cars_idcars
WHERE
 client_idclient = ? and mechanic_suggestions.status = "accepted"
`;

export const QUERY_ID_VIEW_SUGGESTIONS_CLIENT=`
SELECT * FROM view_suggestions_client WHERE client_idclient = ? and status in ("requested");
`;
