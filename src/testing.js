const myArrObj = [
  {
    id: '1',
    name: 'one',
    age: '11',
    major: 'CS',
  },
  {
    id: '2',
    name: 'two',
    age: '22',
    major: 'ENG',
  },
  {
    id: '3',
    name: 'three',
    age: '33',
    major: 'PHY',
  },
];

console.log(
  myArrObj.map(({ id, ...otherElems }) => `key=${id}, ${{ ...otherElems }}`)
);
