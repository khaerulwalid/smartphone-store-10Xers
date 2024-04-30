# smartphone-store-10Xers
RESTful API for an online store that sells mobile phones. This repository for the backend uses expressjs.

> Tuliskan API Docs kamu di sini

## Endpoints :

List of available endpoints:

- `POST /users` -
- `POST /login` -
- `POST /discount` -
- `POST /smartphone` -
- `PUT /smartphone/:id` -
- `DELETE /smartphone/:id` -


## Address Aplication Server
```json

```


&nbsp;


## 2. POST /login

Request:

- body:

```json
{
  "email": "string",
  "password": "string"
}
```

_Response (200 - Ok)_
```json
{
    "access_token": "string",
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Email is require",
  "or",
  "message": "Password is require"
}

```
_Response (401 - Unauthorized)_

```json
{
  "message": "Error invalid username or email or password"
}

```

## 7. POST /users
Request:

- body:

```json

 {
    "name": "string",
    "email": "string",
    "password": "string",
  }

```
_Response (201 - Created)_

```json
{
    "id": "number",
    "name": "string",
    "email": "string",
    "password": "string",
}

```
_Response (400 - Bad Request)_

```json
{
  "message": "Name is require",
  "or",
  "message": "Email is require",
  "or",
  "message": "Password is require",
  "or",
  "message": "email must be unique"
}

```
## 7. POST /discounts
Request:

- body:

```json

 {
    "name": "string",
    "description": "string",
    "discount_percent": "number",
  }

```
_Response (201 - Created)_

```json
{
    "id": "number",
    "name": "string",
    "description": "string",
    "discount_percent": "string",
}

```
_Response (400 - Bad Request)_

```json
{
  "message": "Name is require",
  "or",
  "message": "Discount percent name is require"
}

```
## 7. POST /smartphone
Request:

- headers: 

```json
{
  "access_token": "string"
}
```

- body:

```json

 {
    "type": "string",
    "price": "number",
    "image_url": "string",
    "quantity": "number",
    "description": "string",
    "brand": "string",
    "Discount_Id": "number",
  }

```
_Response (201 - Created)_

```json
{
    "id": "number",
    "type": "string",
    "price": "number",
    "image_url": "string",
    "quantity": "number",
    "description": "string",
    "brand": "string",
    "Discount_Id": "number",
}

```
_Response (400 - Bad Request)_

```json
{
  "message": "Type is require",
  "or",
  "message": "price is require",
  "or",
  "message": "quantity is require",
  "or",
  "message": "brand is require",
  "or",
  "message": "Discount Id is require",
}

```

## 8. PUT /smartphones/:id
Request:

- headers: 

```json
{
  "access_token": "string"
}
```

- body:

```json

 {
    "type": "string",
    "price": "number",
    "image_url": "string",
    "quantity": "number",
    "description": "string",
    "brand": "string",
    "Discount_Id": "number",
  }

```

- params:

```json

  "id": "number"

```

_Response (200 - Create)_

```json
{
    "id": "number",
    "type": "string",
    "price": "number",
    "image_url": "string",
    "quantity": "number",
    "description": "string",
    "brand": "string",
    "Discount_Id": "number",
}

```
_Response (400 - Bad Request)_

```json
{
  "message": "Type is require",
  "or",
  "message": "price is require",
  "or",
  "message": "quantity is require",
  "or",
  "message": "brand is require",
  "or",
  "message": "Discount Id is require",
}

```
_Response (401 - Bad Request)_

```json
{
    "message": "Please login first"
}
```

## 6. DELETE /smartphones/:id
Request:

- headers: 

```json
{
  "access_token": "string"
}
```
- params:

```json

  "id": "number"

```
_Response (200 - Ok)_

```json
{
    "message": "string",
}
```

_Response (401 - Bad Request)_

```json
{
    "message": "Please login first"
}
```
_Response (404 - Not Found)_

```json
{
  "message": "Error not found"
}

```

## 8. GET /smartphones
Request:

_Response (200 - Ok)_

```json
[
  {
    "id": 9,
    "id": "number",
    "type": "string",
    "price": "number",
    "image_url": "string",
    "quantity": "number",
    "description": "string",
    "brand": "string",
    "Discount_Id": "number",
    "createdAt": "date",
    "updatedAt": "date"
  }
]
```