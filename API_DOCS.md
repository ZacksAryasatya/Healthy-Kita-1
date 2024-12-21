{nb: please call me before fetch to turn on tunelling server}

[Users API]
[SIGNUP & LOGIN]

[POST]
/api/signup/user
BODY property: {username,password,email}
response: {message}

[POST]
/api/login/user
BODY property: {username,password}
response: {message}

header: [HEADER] named token
standard for token is JWT


