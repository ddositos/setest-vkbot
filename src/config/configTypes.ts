const variables = [
	'ACCESS_TOKEN', 
	'SECRET_TOKEN', 
	'CONFIRMATION_TOKEN',
	'API_VERSION',
	'PORT',
	'GROUP_ID',
	'USER_TOKEN',
	'API_URL',
	'API_LOGIN',
	'API_PASSWORD'
] as const;

type Config = Record<typeof variables[number] | "API_JWT", string>;

export { variables, Config };