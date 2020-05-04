# scheduling-organizer-api
Project based on Nodejs.

## Install dependencies
`npm install`

## Install knex globally for CLI
`npm install knex -g`

## Create .env file based on .env.sample file

## Set environmental variables for DB connection
`DATABASE_CLIENT = database client (pg, mysql, sqlite3)`

`DATABASE_CONNECTION_STRING = database connection string`

## Execute migrations command
`knex migrate:latest`

> :warning: **If necessary, execute migrations rollback command**: 
`knex migrate:rollback`

## Execute seeds command
`knex seed:run`

## Build project
`npm run build`

## Run project
`npm run start`

## Debug project on global mode
`npm run debug-all`

## Debug project on network mode
`npm run debug-net`
 
# **Route done** - Register user 

Used to register a new user as entertainer or customer.

**URL** : `/schedulingorganizer/users?type=value`

**Method** : `POST`

**Authorization required** : NO

**Query string**

`type=customer`
or
`type=entertainer`

**Data constraints**

```json
{
    "email": "[valid email address]",
    "password": "[password in plain text]",
    "name": "[valid string]",
    "category": "[CLOWN, MAGICIAN, JUGGLER]",
    "shiftsavailable": "[{MORNING,AFTERNOON,NIGHT}]",
    "daysofweekavailable": "[{MONDAY,TUESDAY,WEDNESDAY,THURSDAY,FRIDAY,SATURDAY,SUNDAY}]",
    "price": "[double]"
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
    "category": "CLOWN",
    "shiftsavailable": "{MORNING,AFTERNOON}",
    "daysofweekavailable": "{FRIDAY,SATURDAY,SUNDAY}",
    "price": 345.99
}
```

## Success Response

**Code** : `201 Created`

**Content example**

```json
Created
```

# **Route todo** - Logon

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

#  **Route done** - Consult entertainer agenda by email

Used to consult entertainer agenda by email or by id.

**URL** : `/schedulingorganizer/users?[id=value or email=value]`

**Method** : `GET`

**Authorization required** : YES

**Query string**

`id=5`
or
`email=some_email@domain.com`

## Success Response

**Condition** : If jwt has an entertainer valid email.

**Code** : `200 OK`

**Content example**

```json
[
{
    "id": 5,
    "name": "Brana Posvner",
    "email": "bposvner4@unesco.org",
    "password": "WFU6fAAa",
    "category": "JUGGLER",
    "shiftsavailable": "{MORNING,AFTERNOON,NIGHT}",
    "daysofweekavailable": "{TUESDAY,WEDNESDAY,THURSDAY}",
    "price": "170.08",
    "events": [
        {
            "name": "augue a suscipit",
            "description": "turpis adipiscing lorem vitae mattis nibh ligula nec sem",
            "datetime": "2020-05-09T18:23:23.000Z",
            "duration": 60,
            "place": "4 Village Green Trail",
            "isblocker": true,
            "isowner": false
        },
        {
            "name": "porttitor pede",
            "description": "et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum",
            "datetime": "2020-05-12T06:13:32.000Z",
            "duration": 240,
            "place": "07021 8th Drive",
            "isblocker": true,
            "isowner": true
        }
    ]
}
]
```

# **Route done** - Event

Used to schedule an event or party.

**URL** : `/schedulingorganizer/events?entertainerid=6`

**Method** : `POST`

**Authorization required** : YES

**Query string**

`entertainerid=6`

**Data constraints**

```json
{
    "name": "[string]",
    "description": "[string]",
    "dateTime": "[timestamp]",
    "duration": "[integer in minutes]",
    "place": "[string]",
    "isBlocker": "[boolean]",
    "isOwner": "[boolean]"
}
```

**Body**

```json
{
    "name": "some event",
    "description": "some description",
    "dateTime": "2019-10-31 03:00:00",
    "duration": 180,
    "place": "some place",
    "isBlocker": true,
    "isOwner": true
}
```

## Success Response

**Code** : `200 OK`

**Content example**

```json
Created
```
## **Route todo** - Obs: Methods PUT and DELETE are allowed just if the user is the owner of the event

# **Route done** - List all categories of entertainer

**URL** : `/schedulingorganizer/users/categories`

**Method** : `GET`

**Authorization required** : YES

**Code** : `200 OK`

**Content example**

```json
[
    {
        "category": "MAGICIAN"
    },
    {
        "category": "CLOWN"
    },
    {
        "category": "JUGGLER"
    }
]
```
# **Route todo** - List entertainer users by category and availability

Used to search entertainer users by category and availability.

**URL** : `/schedulingorganizer/users?category=magician&datetime=2019-10-31T03:00:00.000Z`

**Method** : `GET`

**Authorization required** : YES

**Categories:**

`MAGICIAN`
or
`CLOWN`
or
`JUGGLER`

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
