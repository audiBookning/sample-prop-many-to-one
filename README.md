# Simple ManyToOne Properties on an Entity - code sample

Part of a personal [list](https://github.com/audiBookning/sample-nestjs-codes) of random samples code for NestJS

- [NestS](https://nestjs.com/)

- [TypeORM](https://typeorm.io/#/)

- [PostgreSQL](https://www.postgresql.org/)

## Entities Relations

- A central `Client` entity

- various "properties" entities

  - `Email`

  - `Phone`

  - `Property` - With address, zip code, etc

  - `Websites`

- Each Client can have multiples "properties". For example a client can have multiple emails, websites, etc

## Notes

- The purpose of this sample is more to illustrate the concept for inexperienced devs. "Copy pasting" this will not really help save any time.

- Uses `.env.development` for config the dev environment variables.

- Has a docker-compose file for ease of "testing". See the `docker.env` file for the DB config

- Use `docker-compose up` to run the containers.

- Has a `RepoService` that joins all the entities repository for the sake of pure laziness.

## TODOS

- Some of the client and props routing and associated service/repo methods

- No tests

## BuyMeACoffee

<a href="https://www.buymeacoffee.com/audiobookning" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="41" width="174"></a>

## Disclaimer

This code is not and will never be maintained. It is just some random sample code.

Feel free to copy and make any change you like.

##

License
ISC © 2021 AudiBookning
