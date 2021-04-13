# Merging Intervals

## Setting up

`yarn`

## Running

`yarn start INPUT`

> example:
>
> `yarn start "1-5, 2-10, 1-10"`

## Testing

`yarn test` or `yarn test:watch`

# Answers

## Time complexity

- Parse has O(n)
- Merge would be O(n), but JS sort has O(log(n)).

So overall the solution is **O(log(n))**

## Space complexity

The final array cannot grow from the initial, only shrink. It has **O(n)** spacial complexity.
