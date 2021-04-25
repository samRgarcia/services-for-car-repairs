export const QUERY_SEARCH_CLIENT = `
SELECT * FROM user
inner join client on user.idt_type_user = client.idclient WHERE user = ?;
`
