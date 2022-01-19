const arr = [
  {
    id: 2,
    startTime: 0,
    endTime: 120,
  },
  {
    id: 3,
    startTime: 100,
    endTime: 160,
  },
  {
    id: 4,
    startTime: 110,
    endTime: 150,
  },
  {
    id: 10,
    startTime: 180,
    endTime: 220,
  },
  {
    id: 100,
    startTime: 190,
    endTime: 200,
  },
];

const handler = (input, duration) => {
  let start = 0;
  let end = 0;

  let flag;
  for (let i = 0; i < input.length - 1; i++) {
    flag = true;
    if (input[i].startTime >= input[i].endTime)
      return console.log("The start time is always less than the end time!");
    start = input[i].endTime;
    end = input[i].endTime + duration;
    let j = i + 1;
    while (j === i + 1) {
      if (
        (start > input[j].startTime && start < input[j].endTime) ||
        (end > input[j].startTime && end < input[j].endTime)
      ) {
        flag = false;
      }
      j++;
    }
  }
  if (flag) console.log({ startTime: start, endTime: end });
  else console.log("Not found");
};

handler(arr, 20);
