// obj는 값인데 밑에서는 값을 타입으로 쓰려고 하고 있다. 그때 typeof
const obj = { a: '123', b: '234' } as const;

// obj를 타입으로 사용하는 경우
type Key = typeof obj;

// objd의 키를 타입으로 쓰는경우
type Key2 = keyof typeof obj;

// obj의 value들만 가져오는 경우
type Key3 = (typeof obj)[keyof typeof obj];

{
  /*--------인덱스드 시그니처----------*/
}
type B = 'A' | 'B' | 'C';
type A = { [key in B]: number };
const aaaa: A = { A: 1, B: 2, C: 124123 };

{
  /*------Pick 만들기------- */
}
interface Profile {
  name: string;
  age: number;
  married: boolean;
}

type P<T, S extends keyof T> = {
  [Key in S]: T[Key];
};

const shim: P<Profile, 'name' | 'age'> = {
  name: 'shim',
  age: 10,
};
