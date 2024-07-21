import { PureLogicPipe } from './pure-logic.pipe';

describe('PureLogicPipe', () => {
  it.each([[null, null], [undefined, null] as any[], [1, "one"], [2, "2"]])(
    'for given %s return %s',
    (input, expected) => {
      expect(new PureLogicPipe().transform(input)).toBe(expected);
    }
  );
  it.each`
  given | expected
  ${null} | ${null}
  ${undefined} | ${null}
  ${1} | ${"one"}
  ${2} | ${"2"}
  `('for given $given return $expected', ({ given, expected }) => {
    expect(new PureLogicPipe().transform(given)).toBe(expected);
  });
}
)

