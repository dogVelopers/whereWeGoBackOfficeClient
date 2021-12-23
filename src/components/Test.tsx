import { Dispatch, SetStateAction } from 'react';

interface ITestProps {
  num: number;
  name: string;
  setNum: Dispatch<SetStateAction<number>>;
}

function Test({ num, name }: ITestProps) {
  return <div>hi </div>;
}

export default Test;
