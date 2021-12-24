import { opts } from './opts';

type FindOperationType = {
  left: number;
  right: number;
  opt: string;
};

const findOperation = ({ left, right, opt }: FindOperationType) => {
  switch (opt) {
    case opts.ADDITION:
      return left + right;
    case opts.SUBTRACTION:
      return left - right;
    case opts.MULTIPLICATION:
      return left * right;
    case opts.DIVISION:
      return left / right;
    default:
      throw Error('Veuillez choisir une opération arithmétique');
  }
};

const sortByDate = (value: Array<{ date: Date }>) => {
  return value.sort((a, b) => +new Date(b.date) - +new Date(a.date));
};

const formatDate = (value: Date) => {
  return Intl.DateTimeFormat('fr-FR', {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hourCycle: 'h24',
  }).format(value);
};

export { findOperation, sortByDate, formatDate };
