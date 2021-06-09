# Simple ManyToOne Properties on an Entity - code sample

- [NestS](https://nestjs.com/)

- [TypeORM](https://typeorm.io/#/)

- [PostgreSQL](https://www.postgresql.org/)

## entities Relations

- A central `Client` entity

- various "properties" entities

  - `Email`

  - `Phone`

  - `Property` - With address, zip code, etc

  - `Websites`

- Each Client can have multiples "properties". For example a client can have multiple emails, websites, etc

## Notes

- Uses `.env.development` for config the dev environment variables.

- Has a docker-compose file for ease of "testing". See the `docker.env` file for the DB config

- Use `docker-compose up` to run the containers.

## TODOS

- Most of the client and props routing and associated service/repo methods

- No tests
