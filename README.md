# scheduling-organizer-api
Project based on Nodejs.

## Build project
`npm run build`

## Run project
`npm run start`

## Debug project on global mode
`npm run debug-all`

## Debug project on network mode
`npm run debug-net`

# Register user

Used to register a new user as entertainer or customer.

**URL** : `/schedulingorganizer/users`

**Method** : `POST`

**Authorization required** : NO

**Data constraints**

```json
{
    "email": "[valid email address]",
    "password": "[password in plain text]",
    "name": "[valid string]",
    "category": "[Clown, Magician, Juggler]",
    "availability": "[availability object]",
    "price": "[string double]"
}
```

**Body as Customer**

```json
{
    "email": "email@domain.com",
    "password": "some password",
    "name": "some name"
}
```

**Body as Entertainer**

```json
{
    "email": "email@domain.com",
    "password": "some password",
    "name": "some name",
    "category": "Magician",
    "availability": {
        "daysOfWeek": [
            "Wednesday",
            "Friday"
        ],
        "Shift": [
            "Morning",
            "Night"
        ]
    },
    "price": "345,99"
}
```

## Success Response

**Code** : `201 Created`

**Content example**

```json
{
    "id": "1",
    "email": "some_email@domain.com",
    "name": "some name"
}
```

# Logon

Used to logon registered user.

**URL** : `/schedulingorganizer/users/logon`

**Method** : `POST`

**Authorization required** : NO

**Data constraints**

```json
{
    "email": "[valid email address]",
    "password": "[password in plain text]"
}
```

**Body**

```json
{
    "email": "email@domain.com",
    "password": "some password"
}
```

## Success Response

**Code** : `200 OK`

**Content example**

```json
{
    "token": "jwt token" 
}
```

# Consult entertainer agenda by email

Used to consult entertainer agenda by email.

**URL** : `/schedulingorganizer/users`

**Method** : `GET`

**Authorization required** : YES

## Success Response

**Condition** : If jwt has an entertainer valid email.

**Code** : `200 OK`

**Content example**

```json
[
    {
        "email": "email@domain.com",
        "name": "some name",
        "category": "Magician",
        "availability": {
            "daysOfWeek": [
                "Wednesday",
                "Friday"
            ],
            "Shift": [
                "Morning",
                "Night"
            ]
        },
        "price": "345,99"
    }
]
```

# Event

Used to schedule an event or party.

**URL** : `/schedulingorganizer/events`

**Method** : `POST`

**Authorization required** : YES

**Data constraints**

```json
{
    "name": "[string]",
    "description": "[string]",
    "dateTime": "[date and time]",
    "duration": "[number in minutes]",
    "place": "[string]",
    "isBlocker": "[boolean]",
    "owner": "[user email]"
}
```

**Body**

```json
{
    "name": "some name",
    "description": "some description",
    "dateTime": "2019-10-31T03:00:00.000Z",
    "duration": 30,
    "place": "some place",
    "isBlocker": true,
    "owner": "email@domain.com",
}
```

## Success Response

**Code** : `200 OK`

**Content example**

```json
{
    "id": 7,
    "name": "some name",
    "description": "some description",
    "dateTime": "2019-10-31T03:00:00.000Z",
    "duration": 30,
    "place": "some place",
    "isBlocker": true,
    "owner": "email@domain.com",
}
```
## Obs: Methods PUT and DELETE are allowed just if the user is the owner of the event

# List all categories of entertainer

**URL** : `/schedulingorganizer/users/categories`

**Method** : `GET`

**Authorization required** : YES

**Code** : `200 OK`

**Content example**

```json
[
    {
        "id": 1,
        "category": "Clown"
    },
    {
        "id": 2,
      "category": "Magician"
    },
    {
        "id": 3,
        "category": "Juggler"
    }
]
```
# List entertainer users by category and availability

Used to search entertainer users by category and availability.

**URL** : `/schedulingorganizer/users?category=Magician&datetime=2019-10-31T03:00:00.000Z`

**Method** : `GET`

**Authorization required** : YES

**Categories:**

`Clown`
`Magician`
`Juggler`

## Success Response

**Condition** : If category and datetime is provided.

**Code** : `200 OK`

**Content example**

```json
[
    {
        "id": 5,
        "email": "email@domain.com",
        "name": "some name",
        "category": "Magician",
        "price": "345,99"
    },
    {
        "id": 8,
        "email": "email@domain.com",
        "name": "some name",
        "category": "Magician",
        "price": "199,99"
    },
    {
        "id": 12,
        "email": "email@domain.com",
        "name": "some name",
        "category": "Magician",
        "price": "460,99"
    },
]
```
