# PayZen

Rest client for the PayZen gateway, for more info, please check the [Official Documentation](https://payzen.io/pt-BR/rest/V4.0/api/reference.html)

## Usage

Authorizing the connection.

```ts
import * as PayZen from '@singleware/payzen';
import * as Injection from '@singleware/injection';

// Basic authorization.
Injection.resolve(PayZen.Client).setAuthorization('USER', 'SECRET');
```

Creating new credit card token.

```ts
import * as PayZen from '@singleware/payzen';
import * as Injection from '@singleware/injection';

// Getting a promise to receive the credit card token.
const promise = Injection.resolve(PayZen.Tokens.Mapper).create({
  currency: PayZen.Types.Currency.BRL,
  customer: {
    email: 'customer@email.br'
  },
  paymentForms: [
    {
      paymentMethodType: PayZen.Types.Payment.Method.Card,
      pan: 'CARD_NUMBER',
      expiryMonth: 'CARD_MONTH',
      expiryYear: 'CARD_YEAR',
      securityCode: 'CARD_CVV'
    }
  ]
});
```

Creating a new payment based on the received card token.

```ts
import * as PayZen from '@singleware/payzen';
import * as Injection from '@singleware/injection';

// Getting a promise to receive the payment uuid.
const promise = Injection.resolve(PayZen.Payments.Mapper).create({
  amount: 1000,
  currency: PayZen.Types.Currency.BRL,
  paymentMethodToken: 'CARD_TOKEN',
  customer: {
    email: 'customer@email.br'
  }
});
```

Creating a new subscription based on the received card token.

```ts
import * as PayZen from '@singleware/payzen';
import * as Injection from '@singleware/injection';

// Getting a promise to receive the subscription id.
const promise = Injection.resolve(PayZen.Payments.Mapper).create({
  amount: 1000,
  currency: PayZen.Types.Currency.BRL,
  effectDate: new Date(),
  paymentMethodToken: 'CARD_TOKEN',
  rrule: 'RRULE:FREQ=MONTHLY;BYMONTHDAY=1;COUNT=1',
  customer: {
    email: 'customer@email.br'
  }
});
```

## Install

Using npm:

```sh
npm i @singleware/payzen
```

## License

[MIT &copy; Silas B. Domingos](https://balmante.eti.br)
